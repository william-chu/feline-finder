import React, { Component } from 'react';
import '../assets/vendor/fontawesome-pro-5.3.1-web/css/all.css';
import '../styles/App.css';
import Header from './Header';
import Legend from './Legend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Legend />
      </div>
    );
  }
}

export default App;
