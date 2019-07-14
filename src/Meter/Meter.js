import React from 'react';
import PropTypes from 'prop-types';
import style from './Meter.module.scss';

const Meter = ({ min, max, value }) => {
  const translations = {
    0: 'invalid',
    1: 'weak',
    2: 'average',
    3: 'strong',
    4: 'strong',
  };

  const showDescription = Object.prototype.hasOwnProperty.call(translations, value);

  return (
    <>
      <meter className={style.meter} min={min} max={max} value={value} />
      { showDescription && (
        <dl className={style.description}>
          <dt className={style.key}>Strength:</dt>
          <dd className={style.value}>{translations[value]}</dd>
        </dl>
      )}
    </>
  );
};

export default Meter;

Meter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
