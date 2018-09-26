import React, { Component } from 'react';
import '../assets/vendor/fontawesome-pro-5.3.1-web/css/all.css';
import '../styles/App.css';
import Header from './Header';
import Filter from './Filter';
import Legend from './Legend';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coatSearchFilter: '' ,
      patternSearchFilter: '' ,
    };
  }

  handleCoatFilter = (searchFilter) => {
    console.log(searchFilter);
  }

  handlePatternFilter = (searchFilter) => {
    console.log(searchFilter);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filter onCoatFilter={this.handleCoatFilter} onPatternFilter={this.handlePatternFilter} />
        <Legend />
      </div>
    );
  }
}

export default App;
