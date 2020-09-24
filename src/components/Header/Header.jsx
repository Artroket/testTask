import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/registrationForm">Add Client</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/clients">Clients</NavLink>
            </div>
        </header>
    );
}


export default Header;