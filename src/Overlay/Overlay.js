import React from 'react';
import PropTypes from 'prop-types';
import style from './Overlay.module.scss';

const Overlay = ({ message }) => (
  <div className={style.overlay}>
    { message }
  </div>
);

export default Overlay;

Overlay.propTypes = {
  message: PropTypes.string.isRequired,
};
