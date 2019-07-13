import React from 'react';
import style from './Meter.module.css';

const Meter = ({ min, max, value }) => {
  const translations = {
    1: 'bad',
    2: 'middle',
    3: 'good',
  };

  return (
    <div className={style.wrapper}>
      <meter min={min} max={max} value={value} className={style.meter} />
      <dl>
        <dt>Strength:</dt>
        <dd>{translations[value]}</dd>
      </dl>
    </div>
  );
};

export default Meter;
