import React from 'react';
import './NewsletterSignUp.css';

function NewsletterSignUp() {
  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    // TODO: Submit email to server
  }

  return (
    <div className="newsletter-sign-up">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Sign up for send Newsletter</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </div>
      </form>
      <button className="google-sign-in">
        <div className="google-icon-wrapper">
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
        </div>
      </button>
    </div>
  );
}

export default NewsletterSignUp;