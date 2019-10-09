import React from 'react';
import './App.css';
import Header from '../components/Header';
import HeroInfo from '../components/HeroInfo';
import Listings from '../components/Listings';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import APP_CONSTANTS from '../constants/AppConstants';

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: APP_CONSTANTS.FLIGHTS.map((ele) => {
        return ele
      }),
      selectedFlight: APP_CONSTANTS.FLIGHTS[0],
      filterBY: null,
      sortBy: null
    }
  }

  onSelect = (selected, isFlexi) => {
    this.state.data.forEach((flight) => {
      if(flight.id === selected.id) {
        if(isFlexi) {
          selected.IS_FLEXI = true;
        }
        this.setState({
          selectedFlight: selected
        });
      }
    })
  }

  onFilter = (factor) => {
    factor === APP_CONSTANTS.FILTER_BY.NON_STOP
    ?
    this.setState({
      data: this.state.data.filter((ele) => {
        return ele.TYPE === APP_CONSTANTS.FILTER_BY.NON_STOP;
      })
    })
    :
    this.setState({
      data: APP_CONSTANTS.FLIGHTS.map((ele) => {
        return ele
      })
    })
  }

  onSort = (factor) => {
    if(factor && factor === APP_CONSTANTS.SORT_BY.DEPARTURE) {
      this.setState({
        data: this.state.data.sort((a,b) => {
          return a.D_TIME-b.D_TIME;
        })
      })
    } else if(factor && factor === APP_CONSTANTS.SORT_BY.DURATION) {
      this.setState({
        data: this.state.data.sort((a,b) => {
          return a.DURATION-b.DURATION;
        })
      })
    } else if(factor && factor === APP_CONSTANTS.SORT_BY.PRICE) {
      debugger;
      this.setState({
        data: this.state.data.sort((a,b) => {
          return a.COST-b.COST;
        })
      })
    }
  }


  render () {
    return (
      <div className="app">
        <Header></Header>
        <HeroInfo selectedFlight={this.state.selectedFlight}></HeroInfo>
        <Filter onSort={this.onSort} onFilter={this.onFilter}></Filter>
        <Listings allFlights={this.state.data} onSelect={this.onSelect}></Listings>
        <Footer selectedFlight={this.state.selectedFlight}></Footer>
      </div>
    );
  }
}

export default App;
