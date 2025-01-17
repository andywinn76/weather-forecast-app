import React, { useState } from 'react';

function Form() {
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    console.log('Entered ZIP code:', zipcode); // Replace this with your API call later
  };

  return (
    <div className="weather-form">
      <form onSubmit={handleSubmit}>
        <span>Please enter your ZIP code:</span>
        <br />
        <br />
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)} // Updates state on input change
          placeholder="Enter ZIP code"
          maxLength="5" // Optional: Enforce maximum length for ZIP codes
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

