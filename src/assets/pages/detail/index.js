import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {Api} from '../../services/api';
import loadable from '@loadable/component';
import 'react-modal-video/css/modal-video.min.css';
const LayoutComponent = loadable(() => import('../../components/layout'));
const HeaderDetail = loadable(() => import('../../components/detail/header'));
const ContentComponent = loadable(() => import('../../components/detail/container'));

const DetailPage = () => {
    const [dataMovies, setDataMovies] = useState([]);
    const [listProposalMuvies, setListProposalMuvies] = useState([]);
    const [totalResultProposalMuvies, setTotalResultProposalMuvies] = useState(1)
    const [ currentPageProposalMuvies, setCurrentPageProposalMuvies] = useState(1);
    const [language, setLanguage] = useState('en-US');
    const [loading, setLoading] = useState(true);
    let {id} = useParams();

    useEffect(() => {
        const callDataNew = async () => {
            setLanguage('en-US');
            const data = await Api.getDetailMovie(id, language);
            if (!data.hasOwnProperty('status_code')) {
                setDataMovies(data);
            }
            setLoading(false)
        }
        callDataNew();

        const callDataMovieProposal = async () => {
            const data = await Api.getProposalDetails(id, 2);
            console.log(data)
            if (data.hasOwnProperty('results')){
                setListProposalMuvies(data.results);
            }
            if (data.hasOwnProperty('total_pages')){
                setTotalResultProposalMuvies(data.total_pages);
            }
        }   
        callDataMovieProposal();
    },[id, language])

    console.log(listProposalMuvies, totalResultProposalMuvies)
    // feature:
        // trả về thông báo k có data.
        // mục cmt: https://api.themoviedb.org/3/movie/338953/reviews?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&page=1
        // Nhận danh sách các bộ phim được đề xuất cho một bộ phim:
            // https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&page=1
        // Nhận danh sách các bộ phim tương tự:
            // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&page=1
    return(
        <LayoutComponent>
            <HeaderDetail dataMovies={dataMovies} loading={loading}/>
            <ContentComponent/>
        </LayoutComponent>
    )
}


export default React.memo(DetailPage);