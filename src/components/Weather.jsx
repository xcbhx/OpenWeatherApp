import { useState } from "react"; 

function Weather() {
  const [userInput, setUserInput] = useState("");
  const [unit, setUnit] = useState("")


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
      <p>Current Zip Code: {userInput}</p>
      <p>Selected Unit: {unit}</p>
    </div>
  )
};

export default Weather;