import * as Types from '../actions/types';

const init = {
    location: {},
    weather: {}
}

const weatherReducer = (state=init, action) => {
    switch(action.type) {
        case Types.GET_CURRENT_WEATHER: {
            return {
                location: action.payload.location,
                weather: action.payload.weather
            }
        }

        default: return state
    }
}

export default weatherReducer;

