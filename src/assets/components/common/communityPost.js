import React from 'react';
import { Row, Col}  from 'antd';

import background from "../../img/background-community.jpg";

const ComunityComponent = (props) => {

    return (
        <Row className="class-comunity-row">
            <Col span={24} className="class-comunity-col"
            style={{backgroundImage: `url(${background})`}}
            >
                {props.children}
            </Col>
        </Row>
    )
}

export default React.memo(ComunityComponent);