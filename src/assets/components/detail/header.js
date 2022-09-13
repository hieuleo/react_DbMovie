import React, {useState,useEffect} from 'react';
import ModalVideo from 'react-modal-video';
import {Row, Col, Image, Rate, Skeleton} from 'antd';
import Logo from '../../img/image-not-available.png';
import './detail.css';
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';

const HeaderDetail = ({dataMovies, loading}) => {
    const [isOpen,setIsOpen] = useState(false);
    const [key, setKey] = useState('');
    const [runtime,setRuntime] = useState('0')
    const [defaultValue, setDefaultValue] = useState(10);
    useEffect(() => {
        //setKey: // checker nếu có results thì mới sử lý tiếp.
        if (dataMovies.videos) {
            if('results' in dataMovies.videos){
                if (dataMovies.videos.results.length > 0) {
                    setKey(dataMovies.videos.results[0].key)
                }
            }
        }else {
            setKey('')
        }

        //setRuntime.
        if (dataMovies.runtime){
            let d = Number(dataMovies.runtime)*60;
            let h = Math.floor(d / 3600);
            let m = Math.floor(d % 3600 / 60);
            setRuntime(`${h}h ${m}m`)
        }

        if (dataMovies.vote_average){
            setDefaultValue(Number(dataMovies.vote_average))
        }
    },[dataMovies])

    if (loading) {
        return(

            <Row className={'header_detail-row'}>
                <Col span={6} className={'header_detail-col-1'} >
                    <Skeleton active/>
                </Col>
                <Col span={17} offset={1} className={'header_detail-col-2'}>
                    <Skeleton active/>
                </Col>
            </Row>
        )
    }

    return (
        <Row style={{backgroundImage : `linear-gradient(to right, rgba(10.5, 31.5, 31.5, 1) 0%, rgba(10.5, 31.5, 31.5, 0.65) 5%), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${dataMovies.backdrop_path})`}} className={'header_detail-row'}>
            <Col span={6} className={'header_detail-col-1'} >
                <Image
                    src={dataMovies.poster_path? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${dataMovies.poster_path}` : Logo}
                />
                <button type="primary"  className={'header_detail--trailer'} onClick={()=> setIsOpen(true)}>
                    <span>Trailer</span>
                </button>
                <ModalVideo channel='youtube' autoplay controls isOpen={isOpen} videoId={key} onClose={() => setIsOpen(false)} />
            </Col>
            <Col span={17} offset={1} className={'header_detail-col-2'}>
                <div className={'div-custom'}>
                    <h2 className={'header_detail-col-2--title'}>
                        {dataMovies.title} ({dataMovies.release_date? dataMovies.release_date.slice(0,4): ''})
                    </h2>
                </div>
                <div>
                    <h2 className={'header_detail-col-2--genres'}>
                        <span className={'header_detail-col-2--genres--title'}>GENRES : </span>
                        {dataMovies.genres? dataMovies.genres.map((item) => {
                            return (
                                <a key={item.id} href={`https://www.themoviedb.org/genre/${item.id}-${item.name}/movie`} target="_blank" rel="noopener noreferrer">
                                    {item.name},
                                </a>
                            )
                        }): ''}
                        <span className={'header_detail-col-2--genres--runtime'}>
                            - {runtime}
                        </span>
                    </h2>
                </div>
                <div className={'header_detail__vote'}>
                    <div className={'circular_detail'}>
                        <CircularProgressbar 
                            background={true} 
                            value={Math.round(dataMovies.vote_average*10)} 
                            text={`${Math.round(dataMovies.vote_average*10)}%`}
                            styles={buildStyles({
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0,
                            
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                            
                                textSize: '28px',
                            
                                pathTransitionDuration: 0.5,
                            
                                // Colors
                                pathColor: `${dataMovies.vote_average*10 > 70?  '#20cf79' :'#cfd230'}`,
                                textColor: '#fff',
                                trailColor: `${dataMovies.vote_average*10 > 70?  '#204529' :'#413c0e'}`,
                                backgroundColor: '#081c22',
                            })}
                        />
                    </div>
                    <div style={{display: 'inline-block'}}>
                        <h3 className="user-score" style={{display: 'inline-block'}}>
                        User Score
                        </h3>
                    </div>
                </div>
                <Rate className="header_detail__rate" allowClear allowHalf defaultValue={defaultValue}  count={10}/>
                <span style={{color: '#fff', fontSize: '16px', fontWeight: '600', marginLeft: '10px', opacity: '0.8'}}> Vote: {dataMovies.vote_count? dataMovies.vote_count: '0'}</span>
            </Col>
        </Row>
    )
}

export default React.memo(HeaderDetail);