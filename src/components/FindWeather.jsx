import React, { useState } from "react";
import { Zoom } from "@mui/material";

function FindWeather({ getData }) {

    const [city, setCity] = useState("");

    function handleChange(event) {
        const cityName = event.target.value;

        setCity(cityName);
    }

    return (
        <Zoom in>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <input onChange={handleChange} className="input" type="text" placeholder="Enter the city name" value={city} />
                <button onClick={() => getData(city, setCity)} className="search-btn">
                    Search
                </button>
            </form>
        </Zoom>
    );
}

export default FindWeather;