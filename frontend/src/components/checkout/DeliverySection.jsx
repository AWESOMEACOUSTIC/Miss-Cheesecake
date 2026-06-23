import React from 'react';
import FloatingInput from './FloatingInput';
import { Search } from 'lucide-react';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu & Kashmir', 'Ladakh',
];

export default function DeliverySection({ form, onChange, errors }) {
  return (
    <div className="checkout-section">
      <div className="checkout-section-title">
        <span>Delivery</span>
      </div>

      {/* Country */}
      <div className="floating-input-group">
        <div className="select-wrapper">
          <select
            name="country"
            value={form.country}
            onChange={onChange}
            className="floating-select"
          >
            <option value="India">India</option>
          </select>
        </div>
        <label className="floating-label" style={{ top: 10, transform: 'translateY(0)', fontSize: '0.72rem', color: '#C8654E' }}>
          Country/Region
        </label>
      </div>

      {/* Name Row */}
      <div className="input-row-2">
        <FloatingInput
          label="First name"
          name="firstName"
          value={form.firstName}
          onChange={onChange}
          error={errors.firstName}
          autoComplete="given-name"
        />
        <FloatingInput
          label="Last name"
          name="lastName"
          value={form.lastName}
          onChange={onChange}
          error={errors.lastName}
          required
          autoComplete="family-name"
        />
      </div>

      {/* Address */}
      <FloatingInput
        label="Address"
        name="address"
        value={form.address}
        onChange={onChange}
        error={errors.address}
        required
        autoComplete="street-address"
        icon={<Search size={16} />}
      />

      <FloatingInput
        label="Apartment, suite, etc. (optional)"
        name="apartment"
        value={form.apartment}
        onChange={onChange}
        autoComplete="address-line2"
      />

      {/* City / State / ZIP */}
      <div className="input-row-3">
        <FloatingInput
          label="City"
          name="city"
          value={form.city}
          onChange={onChange}
          error={errors.city}
          required
          autoComplete="address-level2"
        />

        <div className="floating-input-group">
          <div className="select-wrapper">
            <select
              name="state"
              value={form.state}
              onChange={onChange}
              className="floating-select"
            >
              <option value="">Select state</option>
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <label
            className="floating-label"
            style={{
              top: form.state ? 10 : '50%',
              transform: form.state ? 'translateY(0)' : 'translateY(-50%)',
              fontSize: form.state ? '0.72rem' : '0.95rem',
              color: form.state ? '#C8654E' : '#C47F6E',
            }}
          >
            State
          </label>
        </div>

        <FloatingInput
          label="PIN code"
          name="zip"
          value={form.zip}
          onChange={onChange}
          error={errors.zip}
          required
          autoComplete="postal-code"
        />
      </div>

      {/* Phone */}
      <FloatingInput
        label="Phone"
        type="tel"
        name="phone"
        value={form.phone}
        onChange={onChange}
        error={errors.phone}
        autoComplete="tel"
      />
    </div>
  );
}
