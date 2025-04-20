

function DisplayWeather({ weather, error }) {
  if (error) {
    return <p style={{ color:"red"}}>{error}</p>
  }
  
  if (!weather) return null;

  if (weather.cod !== 200) {
    return <p style={{ color:"red"}}>{weather.message || "Error fetching weather"}</p>
  }

  return (
    <div>
      <p>Location: {weather.name}</p>
      <p>Temperature: {weather.main.temp}°</p>
    </div>
  )
};

export default DisplayWeather;