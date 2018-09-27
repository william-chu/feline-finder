import React, { Component } from 'react';
import '../assets/vendor/fontawesome-pro-5.3.1-web/css/all.css';
import '../styles/App.css';
import Header from './Header';
import Filter from './Filter';
import Legend from './Legend';
import CatList from './CatList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coatFilter: '' ,
      patternFilter: '' ,
      catResults: [],
    };
  }

  handleCoatFilter = (searchFilter) => {
    let newCoatFilter = searchFilter;
    this.setState({coatFilter: newCoatFilter}, function() {console.log(this.state.coatFilter)})
  }

  handlePatternFilter = (searchFilter) => {
    let newPatternFilter = searchFilter;
    this.setState({patternFilter: newPatternFilter}, function() {console.log(this.state.patternFilter)})
  }

  catData = () => {
    import('../cats.json')
    .then(data => {
      let newCatResults = [];
      data.map((cat) => {
       return newCatResults.push(cat);
      });
      this.setState({catResults: newCatResults}, function() {console.log(this.state.catResults)});
    })
  }

  componentDidMount() {
    this.catData();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filter onCoatFilter={this.handleCoatFilter} onPatternFilter={this.handlePatternFilter} />
        <Legend />
        <CatList catResults={this.state.catResults} />
      </div>
    );
  }
}

export default App;
