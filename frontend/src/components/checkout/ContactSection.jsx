import React from 'react';
import FloatingInput from './FloatingInput';

export default function ContactSection({ form, onChange, errors }) {
  return (
    <div className="checkout-section">
      <div className="checkout-section-title">
        <span>Contact</span>
        <button className="checkout-section-link">Sign in</button>
      </div>

      <FloatingInput
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={onChange}
        error={errors.email}
        required
        autoComplete="email"
      />

      <label className="checkout-checkbox-group">
        <input
          type="checkbox"
          name="newsletter"
          checked={form.newsletter}
          onChange={onChange}
          className="checkout-checkbox"
        />
        <span className="checkout-checkbox-label">
          Email me with news and offers
        </span>
      </label>
    </div>
  );
}
