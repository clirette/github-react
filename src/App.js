import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <Search />
        </div>
      </div>      
    );
  }
}

export default App;
