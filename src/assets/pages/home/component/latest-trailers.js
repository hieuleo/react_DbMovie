import React from 'react';
import { Row, Col }  from 'antd';
import loadable from '@loadable/component';
const ToggleSwitchComponent = loadable(() => import('../../../components/common/toggle'));

const LatestTrailers = () => {
    return (
        <Row>
            <Col span={24} className='latest_trailers'>
                <h2 className='latest_trailers--header'>Latest Trailers</h2>
                <ToggleSwitchComponent left="On TV" right="In Theaters"/>
                <p>This panel didn't return any results. Try refreshing it.</p>
            </Col>
        </Row>
    )
}
export default React.memo(LatestTrailers)
