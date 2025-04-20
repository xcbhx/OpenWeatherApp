import { useState } from "react"; 

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
    <div>
      <form>
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

          <label htmlFor="metric">
            <input 
            id="metric"
            type="radio" 
            value="Metric"
            checked={unit === "Metric"}
            onChange={(e) => setUnit(e.target.value)}
            />
            Metric
          </label>

          <label htmlFor="imperial">
            <input 
            id="imperial"
            type="radio" 
            value="Imperial"
            checked={unit === "Imperial"}
            onChange={(e) => setUnit(e.target.value)}
            />
            Imperial
          </label>

          <label htmlFor="standard">
            <input 
            id="standard"
            type="radio" 
            value="Standard"
            checked={unit === "Standard"}
            onChange={(e) => setUnit(e.target.value)}
            />
            Standard
          </label>

        </fieldset>
      </form>
      <button type="button" onClick={handleFetch}>
        Get Weather
      </button>
      <p>Current Zip Code: {userInput}</p>
      <p>Selected Unit: {unit}</p>

      {weather && (
        <div>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp}°</p>
        </div>
      )}

      {error && <p style={{ color:"red"}}>{error}</p>}
    </div>
  )
};

export default Weather;