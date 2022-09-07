import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Nguyen Hieu ©2022 Created by Hieu Pro
        </Footer>
    )
}

export default React.memo(FooterComponent);