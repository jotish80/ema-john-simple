import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
const header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Overview</a>
                <a href="/manage">Manage inventory</a>
            </nav>
        </div>
    );
};

export default header;