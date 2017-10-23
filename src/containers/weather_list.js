import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const CITY_NAME = cityData.city.name;
        const TEMPS = cityData.list.map(weather => weather.main.temp);
        const PRESSURE = cityData.list.map(weather => weather.main.pressure);
        const HUMIDITY = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={CITY_NAME}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={TEMPS} colour={'blue'} units={'K'} /></td>
                <td><Chart data={PRESSURE} colour={'red'} units={'hPa'} /></td>
                <td><Chart data={HUMIDITY} colour={'green'} units={'%'} /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)