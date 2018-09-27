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
    this.setState({coatFilter: newCoatFilter}, function() {this.catDataFilter()})
  }

  handlePatternFilter = (searchFilter) => {
    let newPatternFilter = searchFilter;
    this.setState({patternFilter: newPatternFilter}, function() {this.catDataFilter()})
  }

  catDataFilter = () => {
    import('../cats.json')
    .then(data => {
      let newCatResults = [];
      data.map((cat) => {
        // Show all cats if nothing is filtered
        if (this.state.coatFilter === '' && this.state.patternFilter === '' ){
          return newCatResults.push(cat);
        // Eliminate colorpoint when pattern is [All but colorpoint]
        } else if (this.state.patternFilter === 'colorpoint' && cat.pattern.toLowerCase().indexOf('all but colorpoint') !== -1) {
          return null;
        // Filter results based on set coat and pattern filter
        } else if (this.state.coatFilter !== '' && cat.coat.toLowerCase().indexOf(this.state.coatFilter) !== -1) {
          return newCatResults.push(cat);
        } else if (this.state.patternFilter !== '' && cat.pattern.toLowerCase().indexOf(this.state.patternFilter) !== -1) {
          return newCatResults.push(cat);
        // Filter in cats that have [All] listed for coat and pattern when a filter is set
        } else if (this.state.coatFilter !== '' && cat.coat.toLowerCase() === 'all' ) {
          return newCatResults.push(cat);
        } else if (this.state.patternFilter !== '' && cat.pattern.toLowerCase() === 'all' ) {
          return newCatResults.push(cat);
        } else {
          return null;
        }
      });
      this.setState({catResults: newCatResults}, function() {console.log(this.state.catResults)});
    })
  }

  componentDidMount() {
    this.catDataFilter();
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
