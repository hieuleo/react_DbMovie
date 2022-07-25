import React from 'react';
import { Layout } from 'antd';
import loadable from '@loadable/component'

const FooterComponent = loadable(()=> import('./common/footer'));
const ContentComponent = loadable(()=> import('./common/content'));
const HeaderComponent = loadable(()=> import('./common/header'));
const LayoutComponent = (props) => {
    return (
        <Layout className="layout">
            <HeaderComponent/>
            <ContentComponent>
                {props.children}
            </ContentComponent>
            <FooterComponent/>
        </Layout>
    )
};

export default React.memo(LayoutComponent);