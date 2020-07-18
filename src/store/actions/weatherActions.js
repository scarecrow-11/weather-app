import * as Types from './types';
import axios from 'axios'

export const getCurrentWeather = location => dispatch => {

    // Get Current Weather Info From OpenWeatherMap API
    const API_KEY = "273621dc4fea8dbae65006264c8526eb"
    const units = "metric"
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+location.city+"&units="+units+"&appid="+API_KEY

    axios.get(apiURL)
        .then(result => {
            // Get Country Full Name from ISO CODES
            axios.get("https://restcountries.eu/rest/v2/alpha/"+result.data.sys.country)
                .then(res => {
                    let location = {
                        city: result.data.name,
                        country: res.data.name
                    }

                    let weather = {
                        currentTemp: result.data.main.temp,
                        iconId: result.data.weather[0].icon,
                        description: result.data.weather[0].main
                    }

                    // Dispatch Data to Redux Store
                    dispatch({
                        type: Types.GET_CURRENT_WEATHER,
                        payload: {
                            location,
                            weather
                        }
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        })
        .catch(err => {
            console.error(err)
        })
}