import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import "../styles/App.css";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />

      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        max: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default App;
