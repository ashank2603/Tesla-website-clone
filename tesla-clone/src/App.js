import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Tesla Clone</h1>
      <Header/>
    </div>
    </Router>
  );
}

export default App;
