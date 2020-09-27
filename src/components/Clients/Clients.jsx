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

    const ClientsElements = clients.map(client => <ClientItem key={client.name+client.surname} name={client.name} surname={client.surname} registrationDate={client.registrationDate} />);    

    return (
        <div  className={s.clientContainer}>
            <div className={s.clientsItemsContainer}>
                {ClientsElements}
            </div>
        </div>
    );
}


export default Clients;