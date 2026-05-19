import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {Api} from '../../services/api';
import loadable from '@loadable/component';
import 'react-modal-video/css/modal-video.min.css';
import ErrorPage from '../error/index';
const LayoutComponent = loadable(() => import('../../components/layout'));
const HeaderDetail = loadable(() => import('../../components/detail/header'));
const ContentComponent = loadable(() => import('../../components/detail/container'));

const DetailPage = () => {
    const [dataMovies, setDataMovies] = useState([]);
    const [dataCast, setDataCast] = useState([]);
    const [language, setLanguage] = useState('en-US');
    const [loading, setLoading] = useState(true);
    const {movieSlug} = useParams();
    const id = movieSlug?.split('~').pop();
    const hasValidId = Boolean(id && /^\d+$/.test(id));

    useEffect(() => {
        if (!hasValidId) {
            setLoading(false);
            return;
        }

        const callDataNew = async () => {
            setLanguage('en-US');
            const data = await Api.getDetailMovie(id, language);
            if (!data.hasOwnProperty('status_code')) {
                setDataMovies(data);
            }
            setLoading(false)
        }
        callDataNew();

        const callDataCast = async () => {
            setLanguage('en-US');
            const data = await Api.getCastAndCrewDetails(id, language);
            if (data.hasOwnProperty('cast')){
                setDataCast(data.cast)
            }
        }
        callDataCast();

        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });  
    },[id, language, hasValidId]);
    return(
        hasValidId ?
        <LayoutComponent>
            <HeaderDetail dataMovies={dataMovies} loading={loading}/>
            <ContentComponent dataMovies={dataMovies} dataCast={dataCast} id={id} language={language}/>
        </LayoutComponent>
        : <ErrorPage />
    )
}


export default React.memo(DetailPage);
