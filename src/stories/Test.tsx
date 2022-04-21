import React from 'react';
import PropTypes from 'prop-types';

import ColorCards from 'color-cards';

export const Test = ({ primary, label, ...props }) => {
  const mode = primary ? 'storybook-Test--primary' : 'storybook-Test--secondary';
  return (
    <>
      {label}
      <ColorCards />
      <div className='color-cards'>test this</div>
    </>
  );
};

Test.propTypes = {
  primary: PropTypes.bool,
};

Test.defaultProps = {
  primary: true,
};
