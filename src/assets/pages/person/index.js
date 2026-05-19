import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Col, Row, Skeleton } from 'antd';
import slugify from 'slugify';
import LayoutComponent from '../../components/layout';
import ErrorPage from '../error';
import { Api } from '../../services/api';
import ImgError from '../../img/image-not-available.png';
import AvatarFallback from '../../img/nullAvatar.png';
import './person.css';

const PersonPage = () => {
    const { personSlug } = useParams();
    const personId = personSlug?.split('~').pop();
    const hasValidId = Boolean(personId && /^\d+$/.test(personId));
    const [person, setPerson] = useState(null);
    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!hasValidId) {
            setLoading(false);
            return;
        }

        let isMounted = true;

        const getPersonData = async () => {
            setLoading(true);

            try {
                const [personData, creditsData] = await Promise.all([
                    Api.getPersonDetails(personId, 'en-US'),
                    Api.getPersonMovieCredits(personId, 'en-US'),
                ]);

                if (!isMounted) {
                    return;
                }

                setPerson(personData);
                setCredits(creditsData.cast || []);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        getPersonData();

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

        return () => {
            isMounted = false;
        };
    }, [personId, hasValidId]);

    const knownMovies = useMemo(() => {
        return [...credits]
            .filter((movie) => movie.id && movie.title)
            .sort((firstMovie, secondMovie) => secondMovie.popularity - firstMovie.popularity)
            .slice(0, 18);
    }, [credits]);

    if (!hasValidId) {
        return <ErrorPage />;
    }

    if (loading) {
        return (
            <LayoutComponent>
                <Row className="person_page">
                    <Col span={6}>
                        <Skeleton.Image active className="person_skeleton-image" />
                    </Col>
                    <Col span={17} offset={1}>
                        <Skeleton active paragraph={{ rows: 8 }} />
                    </Col>
                </Row>
            </LayoutComponent>
        );
    }

    if (!person || person.status_code) {
        return <ErrorPage />;
    }

    return (
        <LayoutComponent>
            <Row className="person_page">
                <Col xs={24} md={6} className="person_sidebar">
                    <img
                        className="person_avatar"
                        alt={person.name}
                        src={person.profile_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${person.profile_path}` : AvatarFallback}
                    />
                    <div className="person_facts">
                        <h3>Personal Info</h3>
                        <p><strong>Known For</strong><span>{person.known_for_department || 'Unknown'}</span></p>
                        <p><strong>Birthday</strong><span>{person.birthday || 'Unknown'}</span></p>
                        <p><strong>Place of Birth</strong><span>{person.place_of_birth || 'Unknown'}</span></p>
                    </div>
                </Col>
                <Col xs={24} md={17} offset={1} className="person_content">
                    <h1>{person.name}</h1>
                    <h2>Biography</h2>
                    <p className="person_biography">
                        {person.biography || `We don't have a biography for ${person.name}.`}
                    </p>

                    <h2>Known For</h2>
                    <Row className="person_movies">
                        {knownMovies.map((movie) => (
                            <Col key={movie.id} xs={12} sm={8} md={6} lg={4}>
                                <Link to={`/react_DbMovie/Detail/${slugify(movie.title)}~${movie.id}`}>
                                    <Card
                                        hoverable
                                        className="person_movie-card"
                                        cover={
                                            <img
                                                alt={movie.title}
                                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : ImgError}
                                            />
                                        }
                                    >
                                        <Card.Meta title={movie.title} description={movie.release_date || movie.character} />
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </LayoutComponent>
    );
};

export default React.memo(PersonPage);
