import { WeatherWrapper,CityInfo, Temperature, WeatherInfo } from "./styles";
import { useState } from "react";
import { Button } from "antd";
import humidity from "../../../assets/images/Humidity.png"
import wind from "../../../assets/images/wind.png"
import vision from "../../../assets/images/vision.png"
import pressure from "../../../assets/images/pressure.png"

const WeatherApp = ({data}) => {
    return (
        <WeatherWrapper>
            <CityInfo>
                <h1>{data.location.name}</h1>
                <h2>{data.location.country}</h2>
            </CityInfo> 
            <Temperature>
                <img src={data.current.condition.icon}/>
                <h1>{data.current.temp_c}&deg;C</h1>
                <h3>{data.current.condition.text}</h3>
            </Temperature>
            <WeatherInfo>
                <div>
                    <img src={wind}/>
                    <h2>Wind</h2>
                    <h1>{data.current.wind_kph}<span>kph</span></h1>
                </div>
                <div>
                    <img src={humidity}/>
                    <h2>Humidity</h2>
                    <h1>{data.current.humidity}</h1>
                </div>
                <div>
                    <img src={vision}/>
                    <h2>Vision</h2>
                    <h1>{data.current.vis_km}<span>km</span></h1>
                </div>
                <div>
                    <img src={pressure}/>
                    <h2>Pressure</h2>
                    <h1>{data.current.pressure_in}</h1>
                </div>
            </WeatherInfo>
        </WeatherWrapper>
    );
}

export default WeatherApp;