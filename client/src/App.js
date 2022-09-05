import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Dashboard from './View/Dashboard';
import Details from './View/Details';
import AddForm from './View/AddForm';
import Auth from './View/Auth';
import user from './context/user';

function App() {
  const [name, setName] = useState("");

  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/Pirates">
          <user.Provider value = {{ name, setName }}/>
            <Dashboard />
          </Route>
          <Route exact path="/Pirates/new">
            <AddForm />
          </Route>
          <Route exact path="/Pirates/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <user.Provider value = {{ name, setName }}/>
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
