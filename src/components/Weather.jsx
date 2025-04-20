import { useState } from "react"; 
import DisplayWeather from "./DisplayWeather";


function Weather() {
  const [userInput, setUserInput] = useState("");
  const [unit, setUnit] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);


  const handleFetch = async () => {
    try {
      setError(null);
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userInput}&units=${unit.toLowerCase()}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);

      if (!res.ok) throw new Error("Network error or invalid zip");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="navbar">
      <form className="weather-container">
        <label htmlFor="zip">Zip Code</label>
          <input 
          id="zip"
          type="number" 
          placeholder="12345"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          />

        {/* Temperatue Units */}
        <fieldset>
          <legend>Select Temperature Units:</legend>
          {["Metric", "Imperial", "Standard"].map((unitOption) => (
            <label key={unitOption}>
              <input 
                type="radio"
                value={unitOption}
                checked={unit === unitOption}
                onChange={(e) => setUnit(e.target.value)}
              />
              {unitOption}
            </label>
          ))}
        </fieldset>
      </form>
      <button className="fetch-button" type="button" onClick={handleFetch}>
        Get Weather
      </button>
      <p>Current Zip Code: {userInput}</p>
      <p>Selected Unit: {unit}</p>

      <DisplayWeather weather={weather} error={error}/>
    </div>
  )
};

export default Weather;