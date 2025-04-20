

function DisplayWeather({ weather, error }) {
  if (error) {
    return <p style={{ color:"red"}}>❌ Error: {error}</p>
  }

  if (!weather) {
    return <p>🔍 Enter a Zip code and select a unit to see the weather.</p>
  }

  if (weather.cod !== 200) {
    return <p style={{ color:"red"}}>⚠️ {weather.message || "Something went wrong."}</p>
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="display-weather">
      <p>📍Location: {weather.name}</p>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>🌡️ Temperature: {weather.main.temp}°</p>
      <p>☁️ Conditions: {weather.weather[0].description}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬️ Wind: {weather.wind.speed} m/s</p>
    </div>
  )
};

export default DisplayWeather;