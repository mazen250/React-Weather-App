import React, { useState } from "react";
import axios from "axios";
function WeatherBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [show, setShow] = useState(false);
  const fetchwWeather = async () => {
    // replace your own api key with the one in the end of the url below
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=29793a695253066981df4f80d5b3293c`
    ).then((res) => {
      setWeather(res.data);
    });
  };

  return (
    <div className="weahterBox">
      <div className="boxHeader">
        <h2>search for weather</h2>
        <input
          type="text"
          placeholder="search city here"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="button"
        />

        <button
          onClick={() => {
            if (city === "") {
              alert("please enter a city");
            } else {
              fetchwWeather();
              setShow(true);
            }
          }}
          className="search"
        >
          search
        </button>
      </div>

      {/* the result will be rendered only of show is true */}
      {show &&
        (typeof weather.main != "undefined" ? (
          <div className="result">
            <h4>
              {weather.name}, {weather.sys.country}
            </h4>

            <h4>temp : {Math.round(weather.main.temp)}°c</h4>

            <p>status: {weather.weather[0].main}</p>
          </div>
        ) : (
          ""
        ))}
    </div>
  );
}

export default WeatherBox;
