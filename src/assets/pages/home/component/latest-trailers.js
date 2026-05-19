import React, {useEffect, useMemo, useRef, useState} from 'react';
import { Row, Col }  from 'antd';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Api } from '../../../services/api';
import ImgError from '../../../img/image-not-available.png';

const trailerTabs = [
    { key: 'tv', label: 'On TV' },
    { key: 'movie', label: 'In Theaters' },
];

const getTrailer = (videos) => {
    const results = videos?.results || [];
    return results.find((item) => item.site === 'YouTube' && item.type === 'Trailer')
        || results.find((item) => item.site === 'YouTube' && item.type === 'Teaser')
        || results.find((item) => item.site === 'YouTube');
};

const LatestTrailers = () => {
    const [activeTab, setActiveTab] = useState('tv');
    const [trailerCache, setTrailerCache] = useState({});
    const [loadingTabs, setLoadingTabs] = useState({ tv: true, movie: false });
    const [videoId, setVideoId] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const trailerCacheRef = useRef({});

    useEffect(() => {
        let isMounted = true;

        const loadTrailers = async () => {
            if (trailerCacheRef.current[activeTab]) {
                setLoadingTabs((current) => ({ ...current, [activeTab]: false }));
                return;
            }

            setLoadingTabs((current) => ({ ...current, [activeTab]: true }));

            const listData = activeTab === 'tv'
                ? await Api.getTvOnTheAir(1)
                : await Api.getMoviesNowPlaying(1);

            const baseItems = (listData.results || []).slice(0, 12);
            const detailRequests = baseItems.map((item) => (
                activeTab === 'tv'
                    ? Api.getDetailTv(item.id, 'en-US')
                    : Api.getDetailMovie(item.id, 'en-US')
            ));

            const details = await Promise.all(detailRequests);
            const trailerItems = details
                .map((detail, index) => ({
                    id: detail.id,
                    title: detail.title || detail.name || baseItems[index]?.title || baseItems[index]?.name,
                    date: detail.release_date || detail.first_air_date || baseItems[index]?.release_date || baseItems[index]?.first_air_date,
                    backdrop_path: detail.backdrop_path || baseItems[index]?.backdrop_path,
                    poster_path: detail.poster_path || baseItems[index]?.poster_path,
                    trailer: getTrailer(detail.videos),
                }))
                .filter((item) => item.trailer)
                .slice(0, 8);

            if (isMounted) {
                trailerCacheRef.current = {
                    ...trailerCacheRef.current,
                    [activeTab]: trailerItems,
                };
                setTrailerCache(trailerCacheRef.current);
                setLoadingTabs((current) => ({ ...current, [activeTab]: false }));
            }
        };

        loadTrailers();

        return () => {
            isMounted = false;
        };
    }, [activeTab]);

    const items = useMemo(() => trailerCache[activeTab] || [], [trailerCache, activeTab]);
    const loading = Boolean(loadingTabs[activeTab]);

    const backgroundImage = useMemo(() => {
        const backdrop = items[0]?.backdrop_path;
        return backdrop ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop}` : '';
    }, [items]);

    const openTrailer = (key) => {
        setVideoId(key);
        setIsOpen(true);
    };

    return (
        <Row>
            <Col
                span={24}
                className='latest_trailers'
                style={backgroundImage ? {backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.92), rgba(3,37,65, 0.72)), url(${backgroundImage})`} : undefined}
            >
                <div className="latest_trailers--top">
                    <h2 className='latest_trailers--header'>Latest Trailers</h2>
                    <div className="latest_trailers--tabs" role="tablist" aria-label="Latest trailer filters">
                        {trailerTabs.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                className={activeTab === tab.key ? 'active' : ''}
                                aria-pressed={activeTab === tab.key}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="latest_trailers--list latest_trailers--list-loading" aria-label="Loading trailers">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="latest_trailers--item latest_trailers--skeleton">
                                <span className="latest_trailers--thumb" />
                                <span className="latest_trailers--name" />
                                <span className="latest_trailers--date" />
                            </div>
                        ))}
                    </div>
                ) : items.length > 0 ? (
                    <div className="latest_trailers--list latest_trailers--list-ready">
                        {items.map((item) => (
                            <button
                                key={`${activeTab}-${item.id}`}
                                type="button"
                                className="latest_trailers--item"
                                onClick={() => openTrailer(item.trailer.key)}
                            >
                                <span className="latest_trailers--thumb">
                                    <img
                                        alt={item.title}
                                        src={item.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : item.poster_path ? `https://image.tmdb.org/t/p/w300/${item.poster_path}` : ImgError}
                                    />
                                    <span className="latest_trailers--play">▶</span>
                                </span>
                                <span className="latest_trailers--name">{item.title}</span>
                                <span className="latest_trailers--date">{item.date || 'Coming soon'}</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <p>This panel didn't return any results. Try refreshing it.</p>
                )}

                <ModalVideo channel='youtube' autoplay controls isOpen={isOpen} videoId={videoId} onClose={() => setIsOpen(false)} />
            </Col>
        </Row>
    )
}
export default React.memo(LatestTrailers)
