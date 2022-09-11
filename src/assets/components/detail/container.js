import React, {useState,useEffect} from 'react';
import {Row, Col, Card} from 'antd';
import { Link } from "react-router-dom";
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import {Api} from '../../services/api';
import './detail.css';
import avatar from '../../img/nullAvatar.png';
import avatarComment from '../../img/avatar-comment.png';
import ImgError from '../../img/image-not-available.png';
const ContainerComponent = ({id,language,dataCast, dataMovies}) => {

    const [dataReview, setDataReview] = useState([]);
    const [totalPageReviews, setTotalPageReviews] = useState(1);
    const [currentPageReviews, setCurrentPageReviews] = useState(1);
    const [reviews, setReviews] = useState(0);
    const [listProposalMuvies, setListProposalMuvies] = useState([]);
    const [totalResultProposalMuvies, setTotalResultProposalMuvies] = useState(1)
    const [currentPageProposalMuvies, setCurrentPageProposalMuvies] = useState(1);

    const { Meta } = Card;
    let overview;
    const slugify = require('slugify');
    console.log('data', listProposalMuvies,totalResultProposalMuvies)

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
            setCurrentPageReviews(1)
        }
        callDataReview()

        const callDataMovieProposal = async () => {
            const data = await Api.getProposalDetails(id, 1);
            if (data.hasOwnProperty('results')){
                setListProposalMuvies(data.results);
            }
            if (data.hasOwnProperty('total_pages')){
                setTotalResultProposalMuvies(data.total_pages);
            }
            setCurrentPageProposalMuvies(1)
        }   
        callDataMovieProposal();
    },[id, language])
    
    useEffect(() => {

    },[dataCast, dataMovies]);

    const clickMore = () => {
        if (currentPageReviews < totalPageReviews){
            const callDataReview = async () => {
                const data = await Api.getCommentsMovies(id, language,  currentPageReviews +1);
                if (data.hasOwnProperty('results')) {
                    setDataReview([...dataReview,...data.results])
                }
            }
            callDataReview()
        };
        setCurrentPageReviews(currentPageReviews => currentPageReviews+1)
    }

    const clickMoreMovie = () => {
        if (currentPageProposalMuvies < totalResultProposalMuvies){
            const callDataMovieProposal = async () => {
                const data = await Api.getProposalDetails(id, currentPageProposalMuvies + 1);
                if (data.hasOwnProperty('results')){
                    setListProposalMuvies([...listProposalMuvies.slice(0,19),...data.results]);
                }
            }   
            callDataMovieProposal();
        }
        setCurrentPageProposalMuvies(currentPageProposalMuvies => currentPageProposalMuvies+1)
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
                    <Col span={24} className="deteil_recommendations">
                        <Row>
                            {
                                listProposalMuvies.map(item =>
                                    <Col key={item.id} span={4} className="deteil_recommendations--item">
                                        <Link to={`/react_DbMovie/Detail/${slugify(item.title)}~${item.id}`}>
                                            <Card
                                                style={{margin : '10px'}} 
                                                hoverable
                                                cover={<img alt="example" src={item.poster_path === null? ImgError :`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                                            >
                                                <Meta title={item.title} description={item.release_date} />
                                                <div className={'circular-custom--list'}>
                                                    <CircularProgressbar 
                                                        background={true} 
                                                        value={Math.floor(item.vote_average*10)} 
                                                        text={`${Math.floor(item.vote_average*10)}%`}
                                                        styles={buildStyles({
                                                            // Rotation of path and trail, in number of turns (0-1)
                                                            rotation: 0,
                                                        
                                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                            strokeLinecap: 'butt',
                                                        
                                                            textSize: '26px',
                                                        
                                                            pathTransitionDuration: 1,
                                                        
                                                            // Colors
                                                            pathColor: `${Math.floor(item.vote_average*10) > 70?  '#20cf79' :'#cfd230'}`,
                                                            textColor: '#fff',
                                                            trailColor: `${Math.floor(item.vote_average*10) > 70?  '#204529' :'#413c0e'}`,
                                                            backgroundColor: '#081c22',
                                                        })}
                                                    />
                                                </div>
                                                <p className='vote-customize'>Vote: {item.vote_count}</p>
                                            </Card>
                                        </Link>
                                    </Col>
                                )
                            }
                            <Col span={4}>
                                {
                                    currentPageProposalMuvies < totalResultProposalMuvies ? <div className="detail_review--button detail_recommendations--button"><button onClick={() =>{clickMoreMovie()}}>MORE</button> </div> : null
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default React.memo(ContainerComponent);