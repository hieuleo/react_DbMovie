import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col, Card ,Skeleton, Result} from 'antd';
import PropTypes from 'prop-types';
import ImgError from '../img/image-not-available.png';
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';

const List = ({lists,loading}) => {
    
    const { Meta } = Card;
    const slugify = require('slugify')
    
    if (loading) {
        return(
            <Row style={{margin : '20px 0'}}>
                <Col style ={{height: '450px'}} span ={5} offset={1}>
                    <Skeleton active/>
                </Col>  
                <Col style ={{height: '450px'}} span ={5} offset={1}>
                    <Skeleton active/>
                </Col>  
                <Col style ={{height: '450px'}} span ={5} offset={1}>
                    <Skeleton active/>
                </Col>  
                <Col style ={{height: '450px'}} span ={5} offset={1}>
                    <Skeleton active/>
                </Col>  
            </Row>
            
        )
    }

    if (lists.length === 0 && !loading) {
        return(
            <Row style={{margin : '20px 0'}}>
                <Col span ={20} offset = {2}>
                    <Result
                    status="404"
                    title="OPPS! NOT DATA"
                    subTitle="Sorry, there are no movies that matched your query. PLEASE RETRY!"
                    />
                </Col>
            </Row>
        )
    }

    return(
        <Row style={{margin : '20px 0'}}>
            {lists.map((item)=>{
                return(
                    <Col key={item.id} span ={6}>
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
            })}
        </Row>
    )
}

List.propTypes = {
    lists: PropTypes.array.isRequired
};
   

export default React.memo(List)