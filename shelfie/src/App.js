import React, { Component } from 'react';
import './App.css';
import Header from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
