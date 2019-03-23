import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_FAILURE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    case FETCH_WEATHER_SUCCESS:
      return [ action.payload, ...state ];
    case FETCH_FAILURE:
      console.log("in fetch")
      console.log(action)
      return [ action.payload, ...state ];
    default:
      return state;
  }
}
