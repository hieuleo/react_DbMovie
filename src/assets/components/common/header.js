import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, useLocation } from "react-router-dom";
import { scroll } from '../../features/scrollDown';
import Logo from '../../img/logo.svg';
import { useAuth } from '../../hooks/useAuth';

const HeaderComponent = () => {
    const { Header } = Layout;
    const {pathname} = useLocation();
    const { logout, user } = useAuth();
    //scroll:
    let className = scroll.ScrollDown();
    let items = []
    if (user === null) {
        items=[
            {key: '/', label:  <Link className='link-custom' to={"/"}>Home</Link>},
            {key: "/Search", label: <Link className='link-custom' to={"/Search"}>Search</Link>},
            {key: '/Popular', label:  <Link className='link-custom' to={"/Popular"}>Popular</Link>},
            {key: "/Upcoming", label: <Link className='link-custom' to={"/Upcoming"}>Up coming</Link>},
            {key: "/login", label: <Link className='link-custom' to={"/login"}>Login</Link>},
        ]
    }else {
        items=[
            {key: '/', label:  <Link className='link-custom' to={"/"}>Home</Link>},
            {key: "/Search", label: <Link className='link-custom' to={"/Search"}>Search</Link>},
            {key: '/Popular', label:  <Link className='link-custom' to={"/Popular"}>Popular</Link>},
            {key: "/Upcoming", label: <Link className='link-custom' to={"/Upcoming"}>Up coming</Link>},
            {key: "/logout", label: <Button onClick={() => logout()}>Logout</Button>},
        ]
    }

    return (
        <Header className={className === "down" ? "hidden" : "visible"} style={{
            position: 'fixed',
            zIndex: 10,
            width: '100%',
          }}
        >
            <Link to={"/"}>                
                <div className="logo" >
                        <img alt="logo" src={Logo}></img>
                </div>
            </Link>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[pathname]}
                items={items}
            />
        </Header>
    )
}

export default React.memo(HeaderComponent);