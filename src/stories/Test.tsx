import React from 'react';
import PropTypes from 'prop-types';

export const Test = ({ primary, label, ...props }) => {
  const mode = primary ? 'storybook-Test--primary' : 'storybook-Test--secondary';
  return (
    <>
      {label}
    </>
  );
};

Test.propTypes = {
  primary: PropTypes.bool,
};

Test.defaultProps = {
  primary: true,
};
