import React, { Profiler } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import ClientsContainer from './components/Clients/ClientsContainer';
import RegistrationFormContainer from "./components/RegistrationForm/RegistrationFormContainer";



const App = (props) => {
  console.log(props.store.getState());
  return (
    <div className='app-wrapper'>
      <Header /> 
      <div className='app-wrapper-content'>
        <Route path='/registrationForm' render={() => <RegistrationFormContainer store={props.store}/>}/>
        <Route path='/profile' render={() => <Profile store={props.store}/>}/>
        <Route path='/clients' render={() => <ClientsContainer store={props.store}/> }  />  
      </div>
    </div>

  );
}

export default App;