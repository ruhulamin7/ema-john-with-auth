import userEvent from '@testing-library/user-event';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>

                {user.email ? <NavLink to="/login" onClick={logOut}>Logout</NavLink> :
                    <NavLink to="/login">Login</NavLink>
                }
                {user.email && <span style={{ color: "white" }}>Hello {user.displayName}</span>}
            </nav>
        </div>
    );
};

export default Header;