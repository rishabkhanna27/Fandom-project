import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import HomeContent from  "./Components/HomeContent";
import HeaderComponent from './Components/HeaderComponent';
import SideBar from './Components/SideBar'
import LocationComponent from './Components/LocationComponent'
import LocationDetails from './Components/LocationDetails'
import CharacterComponent from  './Components/CharacterComponent'
import Character from './Components/Character'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component
{
  render()
  {
    return (
      <Router>
        <HeaderComponent/>
        <SideBar/>
        <Switch>
          <Route exact path="/" component={HomeContent}></Route>
          <Route exact path="/location" component={LocationComponent}></Route>
          <Route exact path="/character" component={CharacterComponent} />
          <Route path="/character/:id" component={Character} />
          <Route  path="/location/:id" component={LocationDetails}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
