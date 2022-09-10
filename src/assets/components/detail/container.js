import React, {useState,useEffect} from 'react';
import {Row, Col} from 'antd';
import {Api} from '../../services/api';
import './detail.css';
import avatar from '../../img/nullAvatar.png';
import avatarComment from '../../img/avatar-comment.png';

const ContainerComponent = ({id,language,dataCast, dataMovies}) => {
    const [dataReview, setDataReview] = useState([]);
    const [totalPageReviews, setTotalPageReviews] = useState(1);
    const [currentPageReviews, setCurrentPageReviews] = useState(1);
    const [reviews, setReviews] = useState(0);
    let overview;
    console.log('data', dataReview)

    useEffect(() => {
        const callDataReview = async () => {
            const data = await Api.getCommentsMovies(id, language,  currentPageReviews);
            if (data.hasOwnProperty('results')) {
                setDataReview(data.results)
            }
            if (data.hasOwnProperty('total_pages')){
                setTotalPageReviews(data.total_pages)
            }
            if (data.hasOwnProperty('total_results')){
                setReviews(data.total_results)
            }
        }
        callDataReview()
    },[id, language])
    
    useEffect(() => {
        if (currentPageReviews <= totalPageReviews){
            const callDataReview = async () => {
                const data = await Api.getCommentsMovies(id, language,  currentPageReviews);
                if (data.hasOwnProperty('results')) {
                    setDataReview([...dataReview,...data.results])
                }
            }
            callDataReview()
        };
    },[currentPageReviews]);

    useEffect(() => {

    },[dataCast, dataMovies]);

    const clickMore = () => {
        setCurrentPageReviews(currentPageReviews => currentPageReviews+1)
    }

    if (dataMovies){
        if (dataMovies.hasOwnProperty('overview')){
            overview = dataMovies.overview
        }
    }

    return (
        <Row className="container_row">
            <Col className="container_col">
                <Row>
                    <Col span={24} className="detail_overview">
                        <Row>
                            <Col span={7} className="detail_overview--block">
                            </Col>
                            <Col span={17}>
                                <h2 className="detail_overview--header"> Overview </h2>
                                <p className="detail_overview--content">{overview}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="detail_cast">
                        <h2 className="detail_cast--header">Series Cast:</h2>
                    </Col>
                    <Col span={23} offset={1}>
                        <div className="detail_cast--list">
                            {
                                dataCast ? dataCast.map(item => ( 
                                    item.character ?
                                    <div key={item.name} className="detail_cast--item">
                                        { item.profile_path?
                                            <img alt={item.name} src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}></img>
                                            : <img src={`${avatar}`}></img>
                                        }
                                        <h2>{item.name}</h2>
                                        <p>{item.character}</p>
                                        <p className="detail_cast--item-job"> {item.known_for_department} </p>
                                    </div> : null
                                )): 
                                    <div  className="detail_cast--item">
                                        <img src={`${avatar}`}></img>
                                        <h2>unknown</h2>
                                        <p>unknown</p>
                                        <p className="detail_cast--item-job"> unknown</p>
                                    </div>
                            }
                        </div>
                    </Col>
                    <Col span={24} offset={0} className="detail_review">
                            <h2 className="detail_review--header">Reviews:  {reviews}</h2>
                            <div className="detail_review--list">
                                {
                                    dataReview.length > 0? dataReview.map(item => (
                                        <div key={item.id} className="detail_review--item">
                                            <div>
                                                {
                                                    item.author_details.avatar_path ? 
                                                    <img className="detail_review--avatar" src={item.author_details.avatar_path.includes('/https://www.gravatar.com/avatar/')?`${item.author_details.avatar_path}`.replace('/',''): `https://www.gravatar.com/avatar${item.author_details.avatar_path}`} alt="Gravatar"></img>:
                                                    <img className="detail_review--avatar" src={avatarComment} alt="Gravatar"></img>
                                                }
                                            </div>
                                            <div>
                                                <h2 className="detail_review--name">{item.author_details.username}</h2>
                                                <span className="detail_review--updated">{item.created_at}</span>
                                                <p className="detail_review--content">{item.content}</p>
                                            </div>
                                        </div>
                                    )): <p>We don't have any reviews for {dataMovies.title} </p>
                                }
                                {
                                    totalPageReviews > currentPageReviews ?<div className="detail_review--button"><button onClick={() =>{clickMore()}}>MORE</button> </div> : null
                                }
                            </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default React.memo(ContainerComponent);