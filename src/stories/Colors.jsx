import React from 'react';
import PropTypes from 'prop-types';

import './stories.scss';
export const Colors = ({ primary, Name, Color, label, ...props }) => {
  const mode = primary ? 'storybook-Colors--primary' : 'storybook-Colors--secondary';
  return (
    <>
      {/* <div className='cards'> */}
      <section className="pantone"
        style={{backgroundColor: '#' + Color }}
      >
        <div className="pantone-card">
          <div className="pantone-card__color"
          style={{backgroundColor: '#' + Color }}
          ></div>
          <div className="pantone-card__text">
            <h1>{Name}</h1>
            <h2>#{Color}</h2>
            <p>
              <a href={`https://api.color.pizza/v1/${Color}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{color: '#' + Color }}
              >Naming API</a><br />
            </p>
          </div>
        </div >
      </section >
      {/* </div> */}
    </>
  );
};

Colors.propTypes = {
  primary: PropTypes.bool,
  Name: PropTypes.string,
  Color: PropTypes.string
};

Colors.defaultProps = {
  primary: true,
  Name: 'Solar Fusion',
  Color: '#323232',
};
