import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import axios from "axios";
import ArticlePage from "./pages/ArticlePage";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Business from "./pages/Business";
import Entertainment from "./pages/EntertainmentPage";

function App() {
  const categories = [
    "top stories",
    "sports",
    "technology",
    "business",
    "entertainment",
  ];
  const [weatherNumbers, setWeatherNumbers] = useState({});
  const [temp, setTemp] = useState();
  const [weatherDescriptions, setWeatherDescriptions] = useState({});
  const [townName, setTownName] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_WEATHER_KEY);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);

      let temperature;
      let longitude = position.coords.longitude.toFixed(2);
      let latitude = position.coords.latitude.toFixed(2);
      console.log(longitude);
      console.log(latitude);
      const getWeather = async () => {
        let response;

        try {
          response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
              latitude +
              "&lon=" +
              longitude +
              "&appid=" +
              process.env.REACT_APP_WEATHER_KEY
          );
          console.log(response);
          return response;
        } catch (e) {
          throw new Error(e.message);
        }
      };
      getWeather().then((res) => {
        console.log(res);
        temperature = res.data.main.temp;
        let fahrenheit = (((temperature - 273.15) * 9) / 5 + 32).toFixed(1);
        console.log(fahrenheit);
        setTemp(fahrenheit);

        setWeatherNumbers(res.data.main);
        setWeatherDescriptions(res.data.weather);
        setTownName(res.data.name);
      });
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav
          weatherNumbers={weatherNumbers}
          temp={temp}
          weatherDescriptions={weatherDescriptions}
          townName={townName}
        />
        <Routes>
          <Route
            path="/"
            element={<Home topHeadlines category={categories[0]} />}
          />
          <Route path="/sports" element={<Sports category={categories[1]} />} />
          <Route
            path="/technology"
            element={<Technology category={categories[2]} />}
          />
          <Route
            path="/business"
            element={<Business category={categories[3]} />}
          />
          <Route
            path="/entertainment"
            element={<Entertainment category={categories[4]} />}
          />

          <Route
            path="/:category/articles/:id"
            element={<ArticlePage categories={categories} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
