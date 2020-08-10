import React from 'react';
import './App.css';
import GiveAlert from './components/layout/GiveAlert';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Main from './Main';
import ShowText from './components/notes/ShowText';
import Navigation from './components/layout/Navigation';
import Register from './components/Register';
import Login from './components/Login';
import Friends from './components/Friends';
import Home from './components/Home';
const App = () => {
  return (
    <>
      <div>
        <Router history={history}>
          <Navigation />
          <GiveAlert />
          <div className='container-fluid' style={{ paddingTop: 10 }}>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/create-note' component={Main} />
              <Route exact path='/friends' component={Friends} />
              <Route exact path='/show-note' component={ShowText} />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
