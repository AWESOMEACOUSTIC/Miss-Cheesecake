import React from 'react';
import FloatingInput from './FloatingInput';

export default function ContactSection({ form, onChange, errors }) {
  return (
    <div className="mb-9">
      <div className="font-[satoshi-bold] text-[1.15rem] text-[#2D1810] mb-[18px] flex items-center justify-between">
        <span>Contact</span>
        <button className="font-[satoshi] text-[0.85rem] text-[#C8654E] underline underline-offset-[3px] cursor-pointer bg-none border-none hover:text-[#B0745A]">Sign in</button>
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

      <label className="flex items-center gap-2.5 mb-4 cursor-pointer">
        <input
          type="checkbox"
          name="newsletter"
          checked={form.newsletter}
          onChange={onChange}
          className="w-[18px] h-[18px] rounded-[5px] border-[1.5px] border-[#C47F6E] accent-[#C8654E] cursor-pointer"
        />
        <span className="font-[satoshi] text-[0.88rem] text-[#5A3A2E] select-none">
          Email me with news and offers
        </span>
      </label>
    </div>
  );
}
