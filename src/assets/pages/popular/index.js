import React, {useEffect, useState} from 'react';
import loadable from '@loadable/component'
import { Api } from '../../services/api';
const LayoutComponent = loadable(() => import('../../components/layout'));
const PaginationComponent = loadable(() => import('../../components/Pagination'));
const ListComponent = loadable(() => import('../../components/list'));

const PopularPage = () => {
    const [dataMovies, setDataMovies] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        let isMounted = true;

        const callData = async () => {
            setLoading(true);
            const data = await Api.getMoviesDiscover(page);

            if (!isMounted) {
                return;
            }

            if (data.hasOwnProperty('results')) {
                setDataMovies(data.results);
            }

            if (data.hasOwnProperty('total_results')) {
                setTotalItems(data.total_results);
            }

            setLoading(false);
        }

        callData();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

        return () => {
            isMounted = false;
        };
    }, [page]);

    const choosePage = (key) => {
        setPage(key);
    }

    return(
        <LayoutComponent>
            <h2>Popular movies: {totalItems} results</h2>
            <ListComponent lists={dataMovies} loading={loading} />
            <PaginationComponent current={page} total={totalItems} changePages={choosePage}/>
        </LayoutComponent>
    )
}


export default React.memo(PopularPage);
