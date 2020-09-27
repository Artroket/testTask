import React, { useState, useEffect } from 'react';
import s from './Clients.module.css';
import ClientItem from './ClientItem/ClientItem';
import { useSelector, useDispatch } from 'react-redux';
import { changePath } from '../../redux/path-reducer';


const Clients = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePath(props.path));
    }, [])
    
    const clients = useSelector(state => state.clients.users)
    const ClientsElements = clients.map(client => <ClientItem name={client.name} surname={client.surname} registrationDate={client.registrationDate} />);    
    console.log(clients);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {ClientsElements}
            </div>
        </div>
    );
}


export default Clients;