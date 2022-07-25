import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

const ContentComponent = (props) => {
    return(
        <Content
            style={{
                padding: '0 50px',
            }}
            >
            <div className="site-layout-content">
                {props.children}
            </div>
        </Content>
    )
}

export default React.memo(ContentComponent)