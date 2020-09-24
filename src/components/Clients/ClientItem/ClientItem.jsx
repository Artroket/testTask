import React from 'react';


const ClientItem = (props) => {
    return (
        <div > {props.name} {props.surname} {props.registrationDate} </div>
    );
}

export default ClientItem;