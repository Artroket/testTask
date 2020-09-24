import React from 'react';
import s from './Clients.module.css';
import ClientItem from './ClientItem/ClientItem';


const Clients = (props) => {

    let state = props.clients;

    let ClientsElements = state.users.map(client => <ClientItem name={client.name} surname={client.surname} registrationDate={client.registrationDate} />);    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {ClientsElements}
            </div>
        </div>
    );
}


export default Clients;