import React from 'react';
import loadable from '@loadable/component';
import { Link } from "react-router-dom";
import { Button, Result } from 'antd';
const LayoutComponent = loadable(() => import('../../components/layout'));

const ErrorPage = () => {
    return (
        <LayoutComponent>
            <Result
                status="404"
                title="OPPS! PAGE NOT FOUND"
                subTitle="Sorry, the page you're looking for doesn't exist."
                extra={
                    <Link to={"/react_DbMovie"}>  
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </LayoutComponent>
    )
};

export default React.memo(ErrorPage);