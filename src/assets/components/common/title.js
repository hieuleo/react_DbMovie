import React, {useState, useEffect} from 'react';
import { Row, Col}  from 'antd';

import background from "../../img/img1.jpg";
import background1 from "../../img/img2.jpg";
import background2 from "../../img/img3.jpg";
import background3 from "../../img/img4.jpg";
import background4 from "../../img/img5.jpg";
import background5 from "../../img/img6.jpg";
import background6 from "../../img/img7.jpg";
import background7 from "../../img/img8.jpg";

const listBgr = [
    background,
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
]

const Title = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bgr, setBgr] = useState();

    useEffect(() => {
        let currentRandom = Math.floor(Math.random()*8);
        setCurrentIndex(currentRandom);
    },[])

    useEffect(() => {
        setBgr(listBgr[currentIndex])
    },[currentIndex])


    return (
        <Row className="class-title-row">
            <Col span={24} className="class-title-col"
            style={{backgroundImage : `linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url(${bgr})`}}
            >
                {props.children}
            </Col>
        </Row>
    )
}

export default React.memo(Title);