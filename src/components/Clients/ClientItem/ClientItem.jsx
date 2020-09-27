import React from 'react';
import s from './ClientItem.module.css';

const ClientItem = (props) => {
    return (
        <div className={s.clientItem} > 
        <div className={s.name}> {props.name} {props.surname} 
        </div>
        <div className={s.mobileRow}>
        <div className={s.lbl}> Registration date: </div>
        <div className={s.data}> {props.registrationDate} </div>
        </div>
        </div>
    );
}

export default ClientItem;