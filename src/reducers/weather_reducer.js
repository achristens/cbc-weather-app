import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_STARTED
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_WEATHER_STARTED:
      return { ...state, loading: true };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, response: action.payload, err: null };
    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
}
