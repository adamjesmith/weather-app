import React, { useState } from "react";
import Results from "./Results";

const SearchParams = () => {
  const [location, updateLocation] = useState("London");
  const [weather, setWeather] = useState({});

  async function requestWeather() {

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e467a2ecb3eda7a625cf7cf4299b8a4a`
    );
    const json = await res.json();

    console.log(json);
    setWeather(json);
  };

  return (
    <div className="search-params">
      <h2>Search Params</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestWeather();
        }}
      >

        <label htmlFor="location">
          City Name
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>

      <Results data={weather} />
    </div>
  );
}

export default SearchParams;