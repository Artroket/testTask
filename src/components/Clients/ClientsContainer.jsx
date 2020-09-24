import React from 'react';
import Clients from './Clients';
import { connect } from 'react-redux';

let mapStateToProps =(state)=>{
    return{
        clients: state.clients
    }
}

let mapDispatchToProps =(dispatch)=>{
     return {
        
    }
}


const ClientsContainer = connect(mapStateToProps, mapDispatchToProps)(Clients)



export default ClientsContainer;