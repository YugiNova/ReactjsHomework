import { useState } from "react";
import { Button } from "antd";
import { Background,Title,Wrapper } from "./style";
import WeatherApp from "./WeatherApp";
import SearhBox from "./SearchBox";
import { useEffect } from "react";
import axios from "axios";
import { useMemo } from "react";


const Bai8 = () => {
    const [city,setCity] = useState();
    const [searchData, setSearchData] = useState();
    const [weather,setWeather] = useState();

    useEffect(()=> {
        getWeather(city);
        // console.log(weather);
        // console.log(city);
    },[city])

    const showWeather = useMemo(() => {
        if(weather){
            return <WeatherApp data = {weather}/>
        }
        else{
            return <div></div>
        }
    },[weather])

    const getWeather = (cityName) => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6fd6b82aed1c4485b0d133039232403&q=${cityName}&aqi=no`)
        .then((res)=>{
            console.log(res.data);
            setWeather(res.data);
        })
    }

    const onSearch = (searchResult) => {
        setCity(searchResult);
    }
    
    return (
        <Background>
            <Title>
                Weather App
            </Title>
            <Wrapper>
                <SearhBox getWeather={getWeather} onSearch={onSearch} setSearchData={setSearchData} searchData={searchData}/>
                {showWeather}
            </Wrapper>
        </Background>
    );
}

export default Bai8;