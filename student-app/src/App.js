import React from 'react';
import './App.css';
import Login from './Login';
import StudentCards from './StudentCards';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/" component ={Login} />
    <Route path="/studentcards" component ={StudentCards} />
    
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
