import React, { useState } from 'react';

export default function Input({ name, setName }) {
  return (
    <input
      styles={{ direction: 'rtl' }}
      type="text"
      className="p-4 w-full font-messiri text-gray-400 rounded bg-indigo-200/40 text-right text-xl dir:rtl "
      value={name}
      placeholder="الاسم"
      onChange={(e) => setName(e.target.value)}
    />
  );
}
