import React from 'react';
import {Row, Col, Input} from 'antd';

const {Search} = Input;

const SearchComponent = ({loading,onSearch}) => {
return(
    <Row style={{marginTop : '20px'}}>
        <Col span={24} offset = {0} >
            <Search 
                loading={loading} 
                placeholder="Search for a movie, Tv shows, person......" 
                onSearch={(keyWords) => {onSearch(keyWords)}}
                enterButton={true}
                allowClear={true}
                className={"search_input"}
            />
        </Col>
    </Row>
)}

export default React.memo(SearchComponent);