import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
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
