import React from 'react';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="absolute  top-0 h-2  bg-gradient-to-l from-green-600 to-rose-600 via-sky-600 w-full"></div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
