import React, { useState, useEffect } from 'react';
import { default as passwortStrengthChecker } from 'zxcvbn';

import Meter from './Meter/Meter';
import FormEntry from './FormEntry/FormEntry';
import Overlay from './Overlay/Overlay';

import styles from './App.module.scss';

function App() {
  // field values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // validity flags
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState(0);
  // submit flag
  const [formIsSubmittable, setFormIsSubmittable] = useState(false);
  // overlay flag
  const [showOverlay, setShowOverlay] = useState(false);

  // watch submittability of form
  useEffect(() => {
    const emailIsFilled = email.length > 0;
    const passwordIsFilled = password.length > 0;

    const formIsReady = emailIsFilled && emailIsValid && passwordIsValid && passwordIsFilled;

    setFormIsSubmittable(formIsReady);
  }, [ email, password ]);

  const handleEmailChange = (event) => {
    event.preventDefault();

    const { value } = event.target;
    setEmail(value);

    const emailIsNotEmpty = email.length > 0;
    // https://emailregex.com/
    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const isValidEmail = emailRegex.test(value);

    setEmailIsValid(isValidEmail && emailIsNotEmpty);
  }

  const handlePasswordChange = (event) => {
    event.preventDefault();

    const { value } = event.target;
    setPassword(value);

    const passwordIsNotEmpty = password.length > 0;
    const { score } = passwortStrengthChecker(value);
    // contains a number
    const passwordRegex = new RegExp(/\d/);
    const isValidPasword = passwordRegex.test(value) && score >= 2;

    setPasswordStrength(score);
    setPasswordIsValid(isValidPasword && passwordIsNotEmpty);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsSubmittable) {
      return;
    }
    setShowOverlay(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} action="#" autoComplete="off">
      <fieldset className={styles.formRow}>
        <FormEntry
          label="E-Mail"
          name="email"
          type="text"
          placeholder="test@test.de"
          value={email}
          handleChange={handleEmailChange}
          isValid={emailIsValid}
        />
        <FormEntry
          label="Password"
          name="password"
          type="password"
          placeholder="Must contain a number"
          value={password}
          handleChange={handlePasswordChange}
          isValid={passwordIsValid}
        />
      </fieldset>
      <div className={styles.formRow}>
        <Meter value={passwordStrength} min={0} max={3}/>
      </div>
      <button
        className={`${styles.formButton} ${!formIsSubmittable ? styles.formButtonIsDisabled : ''}`}
        disabled={!formIsSubmittable}
        type="submit"
      >
        Submit
      </button>
      { showOverlay && <Overlay message="Login successful!" /> }
    </form>
  );
}

export default App;
