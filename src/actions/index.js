import axios from 'axios';

const OPEN_WEATHER_MAP_API_KEY = '01015017983529627a02c26e8706924a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},GBR`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}