import React from "react";
import PropTypes from "prop-types";

function ForecastSummaries(props) {
  const { forecasts } = props;

  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <div key={forecast.date} className="forecast-summary">
          <div className="forecast-summary__date">{forecast.date}</div>
          <div className="forecast-summary__temperature">
            {forecast.temperature.max}&deg;C
          </div>
          <div className="forecast-summary__description">
            {forecast.description}
          </div>
        </div>
      ))}
    </div>
  );
}

ForecastSummaries.propTypes = {
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

export default ForecastSummaries;
