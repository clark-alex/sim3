import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Link to='/private'><span>home</span></Link>
                    <h1>Dashboard</h1>
                    <a href='http://localhost:3131/auth/logout'>Log out</a>

            </div>
        );
    }
}

export default Header;