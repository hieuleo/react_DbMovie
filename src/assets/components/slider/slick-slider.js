import React from "react";
import Slider from "react-slick";
import ImgError from '../../img/image-not-available.png';
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col, Skeleton} from 'antd';
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';

function SlickComponent({loading, data, config, className}) {
    const { Meta } = Card;
    const slugify = require('slugify')
    let settings = config;

    if (loading) {
        return (
            <Slider {...settings}>
                <Col span={5}>
                    <Skeleton active/>
                </Col>
                <Col span={5}>
                    <Skeleton active/>
                </Col>
                <Col span={5}>
                    <Skeleton active/>
                </Col>  
                <Col span={5}>
                    <Skeleton active/>
                </Col>
                <Col span={5}>
                    <Skeleton active/>
                </Col>
            </Slider>

        )
    }
    return (
        <Slider className={className} {...settings}>
            {/* <Row> */}
            {data.map(item => (item.backdrop_path !==null && (
                <Col className={'Col-Slider-Item'} key={item.id}>
                    <Link to={`/react_DbMovie/Detail/${slugify(item.title)}~${item.id}`}>
                        <Card 
                            hoverable
                            style={{
                            width: 240,
                            }}
                            cover={<img alt={`${item.title}`} src={item.poster_path === null? ImgError :`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                        >
                            <Meta title={`${item.title}`} description={`${item.release_date}`} />
                            <div className={'circular-custom--list'}>
                                <CircularProgressbar 
                                    background={true} 
                                    value={item.vote_average*10} 
                                    text={`${item.vote_average*10}%`}
                                    styles={buildStyles({
                                        // Rotation of path and trail, in number of turns (0-1)
                                        rotation: 0,
                                    
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',
                                    
                                        textSize: '26px',
                                    
                                        pathTransitionDuration: 0.5,
                                    
                                        // Colors
                                        pathColor: `${item.vote_average*10 > 70?  '#20cf79' :'#cfd230'}`,
                                        textColor: '#fff',
                                        trailColor: `${item.vote_average*10 > 70?  '#204529' :'#413c0e'}`,
                                        backgroundColor: '#081c22',
                                    })}
                                />
                            </div>
                            <p className='vote-customize'>Vote: {item.vote_count}</p>
                        </Card>
                    </Link>
                </Col>))
            )}
            {/* </Row> */}
        </Slider>
    );
}


export default React.memo(SlickComponent)