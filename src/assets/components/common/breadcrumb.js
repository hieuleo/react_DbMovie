import React from 'react';
import {  Breadcrumb } from 'antd';
import { useLocation } from "react-router-dom";

const BreadcrumbComponent = () => {
    let {pathname} = useLocation();
    pathname = pathname.substring(1);
    pathname = pathname === '' ? 'Home' :pathname
    return(
        <Breadcrumb
            style={{
            margin: '16px 0',
            }}
        >
            <Breadcrumb.Item>Movies</Breadcrumb.Item>
            <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default React.memo(BreadcrumbComponent)