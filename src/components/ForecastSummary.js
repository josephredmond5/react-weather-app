import React from "react";
import PropTypes from "prop-types";

function ForecastSummary({ date, temperature, description, weatherCode }) {
  const degreeSymbol = "\u00B0";

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>

      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={getIconUrl(weatherCode)} alt={description} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature && temperature.max && `${temperature.max}${degreeSymbol}C`}
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weatherCode: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastSummary;
