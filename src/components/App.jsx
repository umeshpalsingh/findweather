import React, { useState } from 'react';
import Axios from "axios";
import Appbar from './Appbar';
import FindWeather from './FindWeather';
import ShowWeather from './ShowWeather';
import Instruction from './Instruction';
import '../styles/App.scss';

function App() {

  // Here We are storing the fetched data into weatherData state.
  const [weatherData, setWeatherData] = useState([]);

  // This showCard state is created because we want to render the weather card only when we get the data.
  const [showCard, setShowCard] = useState(false);

  // Here we are exporting the API_KEY from .env.local file and we don't need to install the dotenv package.
  const API_KEY = process.env.REACT_APP_API_KEY;

  // In this function we are fetching the weather data through axios.
  // We are receiving these city and setCity from the FindWeather component.
  // Actually we are passing this fetchData function to findWeather component and there we are using onClick to call this function and also passing city, setCity states in the fetchData function.
  // Here we receive the city to fetch the data and setCity to clear the Input field.
  const fetchData = async (city, setCity) => {

    const baseURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`

    const response = await Axios.get(baseURL);

    setWeatherData(response.data);

    setShowCard(true);

    setCity("");
  }

  return (
    <>
      <Appbar />
      <FindWeather getData={fetchData} />
      {showCard ? <ShowWeather data={weatherData} /> : <Instruction />}
    </>
  );
}

export default App;
