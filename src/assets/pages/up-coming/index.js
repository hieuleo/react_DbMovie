import React, {useState,useEffect} from 'react';
import loadable from '@loadable/component'
import { Api } from '../../services/api';
const LayoutComponent = loadable(() => import('../../components/layout'));
const PaginationComponent = loadable(() => import('../../components/Pagination'));
const ListComponent = loadable(() => import('../../components/list'));

const ComingPage = () => {
    const [dataMovies, setDataMovies] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    useEffect(() => {
        const callData = async () => {
            const data = await Api.getApiOfUpcoming(page,3);
            if (data.hasOwnProperty('results')) {
                setDataMovies(data.results);
            }
            if (data.total_results !== totalItems){
                if (data.hasOwnProperty('total_results')){
                    setTotalItems(data.total_results)
                }
            }
            setLoading(false)
        }
        callData()
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });           
    },[page,totalItems])

    const choosePage = (key) => {
        setPage(key)
    }
    
    return(
        <LayoutComponent>
            <h2>List of upcoming movies: {totalItems} results</h2>
            <ListComponent lists={dataMovies} loading={loading} />
            <PaginationComponent current={page} total={totalItems} changePages={choosePage}/>
        </LayoutComponent>
    )
}

export default React.memo(ComingPage);