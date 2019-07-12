import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    event.preventDefault();

    const { value } = event.target;

    setName(value);
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
    <div className="App">
     <form action="#" method="#" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input value={name} onChange={handleNameChange} type="text" name="name" id="name"/>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={handleEmailChange} type="text" name="email" id="email"/>
        </fieldset>
        <fieldset>
          <meter min="0" max="3" value="2" title="Strength"></meter>
          <dl>
            <dt>Strength:</dt>
            <dd>Middle</dd>
          </dl>
        </fieldset>
        <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
