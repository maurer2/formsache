import React, { useState } from 'react';
import styles from './App.module.scss';

import Meter from './Meter/Meter';
import {default as passwortStrengthChecker} from 'zxcvbn';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true);

  const handlePasswordChange = (event) => {
    event.preventDefault();

    const { value } = event.target;
    const { score } = passwortStrengthChecker(value);

    setPassword(value);
    setPasswordStrength(score);
  }

  const handleEmailChange = (event) => {
    event.preventDefault();

    const { value } = event.target;

    setEmail(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('submit');
  };

  const handleFormChange = (event) => {
    event.preventDefault();

    setSubmitIsDisabled(() => {
      const passwordIsStrong = passwordStrength > 1;

      return !passwordIsStrong;
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} onChange={handleFormChange} action="#">
      <fieldset className={styles.formRow}>
        <div className={styles.formEntry}>
          <label>Email</label>
          <input
            className={styles.formField}
            value={email}
            onChange={handleEmailChange}
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className={styles.formEntry}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.formField}
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
          />
        </div>
      </fieldset>
      <div className={styles.formRow}>
        <Meter value={passwordStrength} min={0} max={3}/>
      </div>
      <button
        className={`${styles.formButton} ${submitIsDisabled ? styles.formButtonIsDisabled : ''}`}
        disabled={submitIsDisabled}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default App;
