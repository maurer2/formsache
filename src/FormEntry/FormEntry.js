import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormEntry.module.scss';

const FormEntry = ({label, name, value, type, handleChange, isValid})=> (
  <div className={`${styles.formEntry} ${isValid ? '' : styles.formEntryIsInvalid} `}>
    <label className={styles.formLabel} htmlFor={name}>
      {label}
    </label>
    <input
      className={styles.formField}
      value={value}
      onChange={handleChange}
      type={type}
      name={name}
      id={name}
    />
  </div>
);

export default FormEntry;

FormEntry.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};
