import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CountryCards from './components/CountryCards';
import Contact from './components/Contact';
import FormsBinding from './components/FormsBinding';
import RegisterCard from './components/RegisterCard';
import ConditionalLoop from './components/ConditionalLoop';
import ComponentInt from './components/ComponentInt';
import MainComponent from './components/MainComponent';
import MapingExm from './components/MapingExm';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeApp from './components/EmployeeApp';
import {Provider} from 'react-redux';
import { store } from './components/Redux/store';
import { PizzaHut } from './components/PizzaHut';
import React from 'react';
import UserList from './components/UserList';
import Axiosparent from './components/Axiosparent';
import GithubProfileSerach from './components/Github/GithubProfileSearch';

function App() {
  return (
      <React.Fragment>
     {/* <CountryCards/> */}
     {/* <RegisterCard/> */}
     {/* <ConditionalLoop/> */}
     {/* <Contact/> */}
      {/* <FormsBinding/> */}
    {/* <ComponentInt/> */}
      {/* <MainComponent/> */}
      {/* <MapingExm/> */}
      
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component= {Home}/>
        <Route exact path="/MainComponent" component= {MainComponent}/>
        <Route exact path="/FormsBinding" component= {FormsBinding}/>
        <Route exact path="/RegisterCard" component= {RegisterCard}/>
        <Route exact path="/ConditionalLoop" component= {ConditionalLoop}/>
        <Route exact path="/Contact" component= {Contact}/>
        <Route exact path="/MapingExm" component= {MapingExm}/>
        <Route exact path="/CountryCards" component= {CountryCards}/>
        <Route exact path="/EmployeeApp" component= {EmployeeApp}/>
        <Route exact path="/Axiosparent" component={Axiosparent}/>
        <Route exact path="/GithubProfileSearch" component={GithubProfileSerach}/>

      </Switch>
      </Router>
     
          
    </React.Fragment>
  );
}

export default App;
