import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='navber'>
            <img src={logo} alt="" />
            <div>
                <a href="/food">Food</a>
                <a href="/orders">Orders</a>
                <a href="/service">Service</a>
                <a href="/about us">About Us</a>
            </div>
        </nav>
    );
};

export default Header;