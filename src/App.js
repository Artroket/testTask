import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Clients from './components/Clients/Clients';



const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header /> 
      <div className='app-wrapper-content'>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
                return (
                  <Redirect to="/profile" /> 
                )
            }}
          />
          <Route exact path='/profile' render={(props) => <Profile path={props.location.pathname} store={props.store}/>}/>
          <Route exact path='/registrationForm' render={(props) => <RegistrationForm path={props.location.pathname} store={props.store}/>}/>
          <Route exact path='/clients' render={(props) => <Clients path={props.location.pathname} store={props.store}/> }  /> 
        </Switch>
      </div>
    </div>

  );
}

export default App;