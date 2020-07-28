import React from 'react';
import './App.css';
import GiveAlert from './components/layout/GiveAlert'
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Main from './Main';
import ShowText from './components/notes/ShowText'
const App = () => {
  return (
    <>
       <div>
        <Router history={history}>
          
          <GiveAlert />
          <div>
         
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route exact path='/show-note' component={ShowText} />
                </Switch>
          </div>
          
        </Router>
      </div>
    </>
  );
};



export default App;
