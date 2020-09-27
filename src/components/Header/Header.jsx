import React, { useState } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const currentPath = useSelector(state => state.path.path);
    return (
        <header className={s.header}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
                {currentPath === '/profile' && <div className={s.active} />}
            </div>
            <div className={s.item}>
                <NavLink to="/registrationForm">Add Client</NavLink>
                {currentPath === '/registrationForm' && <div className={s.active} />}
            </div>
            <div className={s.item}>
                <NavLink to="/clients">Clients</NavLink>
                {currentPath === '/clients' && <div className={s.active} />}
            </div>
            <div />
        </header>
    );
}


export default Header;