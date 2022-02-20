import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="container">
        <div data-testid="mission-card" className="section">
          <p data-testid="mission-name">{`Nome: ${name}`}</p>
          <p data-testid="mission-year">{`Ano: ${year}`}</p>
          <p data-testid="mission-country">{`País: ${country}`}</p>
          <p data-testid="mission-destination">{`Destino: ${destination}`}</p>
        </div>
      </div>
    );
  }
}
export default MissionCard;

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};
