import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

export default Title;

Title.propTypes = { // "is missing in props validation"
  headline: PropTypes.string.isRequired,
};
