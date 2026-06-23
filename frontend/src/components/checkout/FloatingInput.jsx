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
    'peer w-full pt-[18px] pr-4 pb-2 pl-4 border-[1.5px] border-[rgba(196,127,110,0.25)] rounded-[14px] bg-white font-[satoshi] text-[0.95rem] text-[#2D1810] outline-none transition-all duration-300 ease-in-out box-border checkout-input',
    error ? 'has-error' : '',
    !error && value && value.length > 0 ? 'is-valid' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div
      className="relative mb-4"
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
      <label
        htmlFor={`input-${name}`}
        className="absolute left-4 top-1/2 -translate-y-1/2 font-[satoshi] text-[0.95rem] text-[#C47F6E] pointer-events-none bg-transparent floating-label-base"
      >
        {label}
        {required && ' *'}
      </label>
      {icon && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C47F6E] pointer-events-none">
          {icon}
        </span>
      )}
      {error && <p className="font-[satoshi] text-[0.76rem] text-[#E74C3C] mt-1 pl-1">{error}</p>}
    </motion.div>
  );
}
