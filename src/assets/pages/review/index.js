import React, { useEffect, useState } from 'react';
import { Col, Row, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import LayoutComponent from '../../components/layout';
import ErrorPage from '../error';
import { Api } from '../../services/api';
import avatarComment from '../../img/avatar-comment.png';
import './review.css';

const getAvatarUrl = (avatarPath) => {
    if (!avatarPath) {
        return avatarComment;
    }

    if (avatarPath.includes('/https://www.gravatar.com/avatar/')) {
        return `${avatarPath}`.replace('/', '');
    }

    if (avatarPath.startsWith('/')) {
        return `https://www.gravatar.com/avatar${avatarPath}`;
    }

    return avatarPath;
};

const ReviewPage = () => {
    const { reviewId } = useParams();
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadReview = async () => {
            setLoading(true);

            try {
                const data = await Api.getReviewDetails(reviewId);

                if (isMounted) {
                    setReview(data);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        loadReview();

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

        return () => {
            isMounted = false;
        };
    }, [reviewId]);

    if (loading) {
        return (
            <LayoutComponent>
                <Row className="review_page">
                    <Col span={22} offset={1}>
                        <Skeleton active avatar paragraph={{ rows: 6 }} />
                    </Col>
                </Row>
            </LayoutComponent>
        );
    }

    if (!review || review.status_code) {
        return <ErrorPage />;
    }

    const username = review.author_details?.username || review.author || 'Unknown user';
    const avatarUrl = getAvatarUrl(review.author_details?.avatar_path);

    return (
        <LayoutComponent>
            <Row className="review_page">
                <Col span={22} offset={1}>
                    <article className="review_card">
                        <div className="review_avatar-wrap">
                            <img className="review_avatar" src={avatarUrl} alt={username} />
                        </div>
                        <div className="review_body">
                            <h1>{username}</h1>
                            <time>{review.created_at}</time>
                            <p>{review.content}</p>
                        </div>
                    </article>
                </Col>
            </Row>
        </LayoutComponent>
    );
};

export default React.memo(ReviewPage);
