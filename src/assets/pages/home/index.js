import React, {useState,useEffect} from 'react';
import useWindowDimensions from '../../features/useWindowDimensions';
import { Row, Col, Button }  from 'antd';
import LayoutComponent from '../../components/layout';
import TitleComponent from '../../components/common/title';
import SliderHotMovies from '../../components/slider/slick-slider';
import LatestTrailers from './component/latest-trailers';
import CommunityComponent from '../../components/common/communityPost';
import './home.css';
import {Api} from '../../services/api';
const HomePage = () => {
    const { width } = useWindowDimensions();
    const [quantilyItem, setQuantityItem ] = useState(0);

    useEffect(() => {
        if ( width > 1300) {
            setQuantityItem(5)  
        }else if (width > 1158) {
            setQuantityItem(4)
        }else if (width > 880) {
            setQuantityItem(3)
        }else {
            setQuantityItem(2)
        }
    },[width])


    console.log(width)

    let config = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: quantilyItem,
        slidesToScroll: quantilyItem,
        accessibility : true,
        autoplay : true,
        autoplaySpeed : 5000,
        pauseOnHover : true, // true: sẽ dừng lại khi hover chuột vào phần tử
        draggable: true,
        swipeToSlide: true,
    }
    const [dataHotMovies, setDataHotMovies] = useState([]);
    const [dataNewMovies, setDataNewMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const callDataPopular = async () => {
            const data = await Api.getMoviesNowPlaying(1);
            if (data.hasOwnProperty('results')) {
                setDataHotMovies(data.results);
            }
            setLoading(false)
        }
        callDataPopular()

        const callDataNew = async () => {
            const data = await Api.getApiOfUpcoming(1,1);
            if (data.hasOwnProperty('results')) {
                setDataNewMovies(data.results);
            }
            setLoading(false)
        }
        callDataNew()
    },[])

    return(
        <LayoutComponent>
            <TitleComponent>
                <h2 className="header-content">Welcome</h2>
                <h3 className="header-content-sub">Millions of movies, TV shows and people to discover. Explore now.</h3>
            </TitleComponent>
            <Row>
                <Col span = {22} offset = {1}>
                    <h2 className="header-title-slider">What's Popular</h2>
                    <span className='header-title-slider-sub'>Online TV</span>
                </Col>
            </Row>
            <SliderHotMovies loading={loading} data={dataHotMovies} config={config}/>
            <LatestTrailers/>
            <Row>
                <Col span = {22} offset = {1}>
                    <h2 className="header-title-slider">Now Playing!</h2>
                </Col>
            </Row>
            <SliderHotMovies className='new-movie' loading={loading} data={dataNewMovies} config={config}/>
            <CommunityComponent>
                <Row>
                    <Col span={14}>
                        <h2 className="header-content-community">Join Today</h2>
                        <p>Get access to maintain your own <em>custom personal lists, track what you've seen</em> and search and filter for <em>what to watch next</em>—regardless if it's in theatres, on TV or available on popular streaming services like .</p>
                        <Button className="btn_community"type="primary">Sign Up</Button>
                    </Col>
                    <Col span={10}>
                        <ul>
                            <li>Enjoy TMDB ad free</li>
                            <li>Filter by your subscribed streaming services and find something to watch</li>
                            <li>Log the movies and TV shows you've seen</li>
                            <li>Build custom lists</li>
                            <li>Contribute to and improve our database</li>
                        </ul>
                    </Col>
                </Row>
            </CommunityComponent>
        </LayoutComponent>
    )
}

export default React.memo(HomePage);