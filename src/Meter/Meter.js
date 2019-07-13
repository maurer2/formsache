import React from 'react';
import style from './Meter.module.scss';

const Meter = ({ min, max, value }) => {
  const translations = {
    1: 'bad',
    2: 'middle',
    3: 'good',
  };

  const showDescription = Object.prototype.hasOwnProperty.call(translations, value);

  return (
    <div className={style.wrapper}>
      <meter className={style.meter} min={min} max={max} value={value} />
      { showDescription && (
        <dl className={style.description}>
          <dt className={style.key}>Strength: </dt>
          <dd className={style.value}>{translations[value]}</dd>
        </dl>
      )}
    </div>
  );
};

export default Meter;
