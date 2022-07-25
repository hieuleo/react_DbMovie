import React from 'react';
import {Row, Col, Pagination } from 'antd';

const Paginations = ({current,total, changePages}) =>{
    return (
        <Row style={{textAlign: 'center'}}>
            <Col span={20} offset = {2}>
                <Pagination current={current} total={total} pageSize={20} showSizeChanger={false} onChange={(key)=>{changePages(key)}}></Pagination>
            </Col>
        </Row>
    )
}

export default React.memo(Paginations)