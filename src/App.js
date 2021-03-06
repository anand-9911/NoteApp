import React, { useEffect } from 'react';
import './App.css';
import GiveAlert from './components/layout/GiveAlert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Main from './Main';
import Navigation from './components/layout/Navigation';
import Register from './components/Register';
import Login from './components/Login';
import Friends from './components/Friends';
import Home from './components/Home';
import PrivateRoute from './routing/PrivateRoute';
import About from './components/About';
import store from './store';
import setToken from './utils/setToken';
import { loadUser } from './actions/auth';
import { checkHeader } from './utils/utilityFunctions';
import ViewNote from './components/notes/ViewNote';
import DeleteNote from './components/notes/DeleteNote';
import EditNote from './components/notes/EditNote';

if (localStorage.token) {
  setToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    checkHeader();
  }, []);

  return (
    <>
      <Router history={history}>
        <Navigation />
        <GiveAlert />

        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Home} />
          <section className='container-fluid' style={{ paddingTop: 10 }}>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/create-note' component={Main} />
            <PrivateRoute exact path='/friends' component={Friends} />
            <PrivateRoute exact path='/view-note' component={ViewNote} />
            <PrivateRoute exact path='/delete-note' component={DeleteNote} />
            <PrivateRoute exact path='/edit-note' component={EditNote} />
            <PrivateRoute exact path='/about' component={About} />
          </section>
        </Switch>
      </Router>
    </>
  );
};

export default App;
