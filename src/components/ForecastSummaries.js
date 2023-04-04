import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts }) {
  return (
    <div>
      {forecasts.map((forecast) => (
        <ForecastSummary key={forecast.date} {...forecast} />
      ))}
    </div>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }).isRequired,
    })
  ).isRequired,
};

export default ForecastSummaries;
