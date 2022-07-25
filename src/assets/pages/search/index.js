import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component'
import { Api} from '../../services/api';
import './search.css';
const LayoutComponent = loadable(() => import('../../components/layout'));
const TitleComponent = loadable(() => import('../../components/common/title'));
const SeacrchComponent = loadable(() => import('../../features/searchInput'));
const ListComponent = loadable(() => import('../../components/list'));
const PaginationComponent = loadable(() => import('../../components/Pagination'));

const SearchPage = () => {
    const [loading, setLoading] = useState(false);
    const [loadingList, setLoadingList] = useState(true);
    const [keyWords, setKetWorks] = useState('');
    const [lists, setLists] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [check, setCheck] = useState(false)

    // first list:
    useEffect(() => {
        async function firstGetData (){
            let data = await Api.getRecommendedSearch(1);
            if (data.hasOwnProperty('results')){
                setLists(data.results)
            }
            setLoading(false);
            setLoadingList(false);
        } 
        firstGetData()
    },[])

    // click search button:
    useEffect(() => {
        if (keyWords){
            async function results () {
                setLoading(true);
                setLoadingList(true);
                const data = await Api.getSearchMovie(keyWords,page);
                // set list
                if (data.hasOwnProperty('results')){
                    setLists(data.results)
                }
                //setPage
                if (data.total_results !== totalItems){
                    setTotalItems(data.total_results)
                    setCheck(true);
                }
                setLoadingList(false);
                setLoading(false)
            }
            results () 
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            }); 
        }
    },[keyWords, page, totalItems])

    const onSearch = (key) => {
        if (key.trim().length> 0){
            setKetWorks(key);
            setPage(1);
        }
    }

    const changePages = (key) => {
        setPage(key);
    }

    return(
        <LayoutComponent>
            <TitleComponent>
                <h2 className="header-content">Rearch</h2>
                <h3 className="header-content-sub">Unlimited TV shows, movies and more.</h3>
                <SeacrchComponent loading={loading} onSearch={onSearch}/>
            </TitleComponent>
            {check 
                &&
                <div className="search-results">
                    <span>Search Results For </span>
                    <span className="search-results--name">{keyWords} </span>
                    <span> : </span>
                    <span className="search-results--number"> {totalItems}</span>
                </div>
            }
            <ListComponent loading={loadingList} lists={lists}/>
            {check 
                &&
                <PaginationComponent current={page} total={totalItems} changePages={changePages}/>
            }
        </LayoutComponent>
    )
}


export default React.memo(SearchPage);