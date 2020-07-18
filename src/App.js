import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentWeather } from './store/actions/weatherActions'

// Import Components
import SearchBox from './components/SearchBox';
import WeatherDetails from './components/WeatherDetails';

function App(props) {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [isWeather, setIsWeather] = useState(false);

  useEffect(() => {
    setLocation(props.weather.location);
    setWeather(props.weather.weather);
    if(Object.keys(location).length > 0 || Object.keys(weather).length > 0) {
      setIsWeather(true);
    }
  })

  return (
    <div className="App">
      <SearchBox getCurrentWeather={ props.getCurrentWeather } />
      { isWeather &&
        <WeatherDetails location={ location } weather={ weather } />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, { getCurrentWeather })(App);
