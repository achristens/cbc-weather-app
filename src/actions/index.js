const API_KEY = "7ed88b137358bdb2e938f5af6e70671d";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(latitude, longitude) {
  const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}&mode=xml&units=metric`;
  const request = fetch(url).then(data => console.log(data));

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
