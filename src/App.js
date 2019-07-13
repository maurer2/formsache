import React, { useState } from 'react';
import styles from './App.module.scss';

import Meter from './Meter/Meter';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    event.preventDefault();

    const { value } = event.target;

    setPassword(value);
  }

  const handleEmailChange = (event) => {
    event.preventDefault();

    const { value } = event.target;

    setEmail(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} action="#" method="#">
      <fieldset className={styles.formRow}>
        <div className={styles.formEntry}>
          <label>Email</label>
          <input
            className={styles.formInput}
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
            className={styles.formInput}
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
          />
        </div>
      </fieldset>
      <div className={styles.formRow}>
        <Meter min={0} max={3} value={2}/>
      </div>
      <button className={styles.formButton} type="submit">
        Submit
        </button>
    </form>
  );
}

export default App;
