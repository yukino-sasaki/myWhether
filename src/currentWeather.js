import React,{useContext} from 'react'
import {Store} from './App'
import Style from './currentWeather.module.css'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Icon from './icon'


const CurrentWeather =()=>{
    const{weatherData} =useContext(Store)
   
    //console.log(weatherData?.currentData)
 
    return weatherData && weatherData.currentData.coord ? (
        <div>
            <div className={Style.weather_parent}>
                <div className={Style.weatherBox}>
                    <p className={Style.current_title}>Current Weather Information</p>
                    <p className={Style.location}>
                    <RoomOutlinedIcon />
                    <span >{weatherData.currentData.name}   latitude: {weatherData.currentData.coord.lat},    longitude: {weatherData.currentData.coord.lon}</span>
                    </p>
                    <div className={Style.box_layout}>
                        <div className={Style.box_weather}> 
                            <div className={Style.weather_icon}>
                                <Icon props={weatherData.currentData.weather[0].main} size="200"/>
                            </div>
                            <div className={Style.weather_font_style}>
                                Weather: <span className={Style.font_style}>{weatherData.currentData.weather[0].main} </span>               
                            </div>
                        </div>
                        <div className={Style.box_information}>
                            <div>
                            temperature: <span className={Style.font_style}>{weatherData.currentData.main.temp} ℃</span>
                            </div>
                            <div>
                            Max temperature: <span className={Style.font_style}>{weatherData.currentData.main.temp_max} ℃</span>
                            </div>
                            <div>
                            Min temperature: <span className={Style.font_style}>{weatherData.currentData.main.temp_min} ℃</span>
                            </div>
                            <div>
                            Wind speed: <span className={Style.font_style}>{weatherData.currentData.wind.speed}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    ): (<span>no data</span>)
}

export default CurrentWeather