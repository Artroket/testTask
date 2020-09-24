import React from 'react';
import RegistrationForm from './RegistrationForm';
import { connect } from 'react-redux';
import {addClientAC, newProgramAC }from '../../redux/clients-reducer'

let mapStateToProps =(state)=>{
  return{
    clients: state.clients
  }
}

let mapDispatchToProps =(dispatch)=>{
     return {
       addClient:(NewClient) => 
       { dispatch(addClientAC(NewClient));},
       changeLoyalty:(newProgram) => {
         dispatch(newProgramAC(newProgram))
       }
    }
}


const RegistrationFormContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)



export default RegistrationFormContainer;