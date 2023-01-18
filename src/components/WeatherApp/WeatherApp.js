import "./WeatherApp.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherApp() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [weatherdata, setWeatherData] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=`;

  useEffect(() => tosetImage(), [weatherdata]);

  const searchLocation = (event) => {
    setImage("");
    axios.get(url).then((response) => {
      setData(response.data);
      setWeatherData(response.data.weather[0].main);

      tosetImage();
    });
  };

  const tosetImage = () => {
    switch (weatherdata) {
      case "Clouds":
        setImage(require("../../assets/cloudy.png"));
        break;
      case "Rain":
        setImage(require("../../assets/rain.png"));
        break;
      case "Thunderstorm":
        setImage(require("../../assets/thunderstorm.png"));
        break;
      case "Drizzle":
        setImage(require("../../assets/drizzle.png"));
        break;
      case "Snow":
        setImage(require("../../assets/snow.png"));
        break;
      case "Haze":
        setImage(require("../../assets/haze.png"));
        break;
      case "Clear":
        setImage(require("../../assets/sun.png"));
        break;
      default:
        console.log("nothing");
    }
  };

  return (
    <>
      <div className="search">
        <div className="searchtitle">
          <h1 id="weather-anchor">Weather information</h1>
          <p>
            To get weather information, please enter a location name below:{" "}
          </p>
        </div>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          type="text"
        />
      </div>
      <button className="getbtn" onClick={searchLocation}>
        Get info
      </button>
      <div className="top">
        <div className="location">
          <p className="cityname">{data.name}</p>
        </div>
        <div className="temp">
          {data.name ? <h2>{Math.round(data.main.temp - 273.15)} °C</h2> : null}
        </div>
        <div>
          <img className="weatherimg" alt="" src={image}></img>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
