import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./history.css";

export default function WeatherHistory() {
  const [loader, setLoader] = useState(false);
  let allWeather = [];
  let weather = localStorage.getItem("weather");
  if (weather !== null) {
    allWeather = JSON.parse(weather);
  }

  function clearHistory() {
    setLoader(true);
    localStorage.clear();

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }

  return (
    <div className="weather-history-container">
      <header>
        <div className="heading">
          <h1>Weather History</h1>
        </div>
      </header>

      <div className="clear-and-go-buttons">
  <div className="clear-history">
    <button onClick={clearHistory}>Clear History</button>
  </div>

  <div className="go-to-weather">
    <Link to="/weather-app">
      <button>Go to Weather</button>
    </Link>
  </div>
</div>

      {loader ? (
        <div className="loader">
          <img
            width={"100px"}
            src={
              "https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif"
            }
            alt=""
          />
        </div>
      ) : (
        <div>
          {allWeather == "" ? (
            <div className="no-history">
              <h1>No Weather History!</h1>
            </div>
          ) : (
            <div>
              <div className="history-data">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>City Name</th>
                      <th>Temperature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allWeather.map((v, i) => (
                      <tr key={i}>
                        <td>{v.date}</td>
                        <td>{v.time}</td>
                        <td>{v.city}</td>
                        <td>{v.temp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
