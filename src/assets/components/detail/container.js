import React, {useEffect} from 'react';
import {Row, Col} from 'antd';
import './detail.css';
import avatar from '../../img/nullAvatar.png';

const ContainerComponent = ({dataCast, dataMovies}) => {
    let overview;
    useEffect(() => {

    },[dataCast, dataMovies])
    
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
                                    <div className="detail_cast--item">
                                        { item.profile_path?
                                            <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}></img>
                                            : <img src={`${avatar}`}></img>
                                        }
                                        <h2>{item.name}</h2>
                                        <p>{item.character}</p>
                                        <p class="detail_cast--item-job"> {item.known_for_department} </p>
                                    </div> : null
                                )): <></>
                            }
                        </div>
                    </Col>
                    <Col span={23} offset={1}>
                        <>Reviews</>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default React.memo(ContainerComponent);