import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function FloatingInput({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  required = false,
  icon,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  const inputClasses = [
    'floating-input',
    error ? 'has-error' : '',
    !error && value && value.length > 0 ? 'is-valid' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div
      className="floating-input-group"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={inputClasses}
        placeholder=" "
        required={required}
        id={`input-${name}`}
        autoComplete={props.autoComplete || 'off'}
        {...props}
      />
      <label htmlFor={`input-${name}`} className="floating-label">
        {label}
        {required && ' *'}
      </label>
      {icon && (
        <span
          style={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#C47F6E',
            pointerEvents: 'none',
          }}
        >
          {icon}
        </span>
      )}
      {error && <p className="floating-error">{error}</p>}
    </motion.div>
  );
}
