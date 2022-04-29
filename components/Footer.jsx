import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';

export default function Footer({ navigation }) {
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    const showScroll = () => {
      if (window.scrollY > 400) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    window.addEventListener('scroll', showScroll);
    return () => {
      window.removeEventListener('scroll', showScroll);
    };
  }, [scrollToTop]);
  const year = useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);
  return (
    <footer className="relative text-gray-500  px-4  bg-gray-800 dark:bg-[#24273167]">
      <div className=" max-w-4xl mx-auto flex flex-col justify-center p-4">
        <div className=" items-center justify-between sm:flex">
          <div className="relative w-full flex items-center justify-between">
            <span className=" text-gray-500 text-base text-center items-center flex flex-row-reverse font-sans">
              Made with{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                className="flex px-1"
                href="https://www.ahmedjadan.dev"
                target="_blank"
                name="credit"
                rel="noopener noreferrer"
                aria-label="instagram account"
              >
                by AJ
              </a>
            </span>
            <p className="text-gray-400 text-xs text-center">
              {' '}
              عيدالفطر المبارك {year} &copy;{' '}
            </p>
            <span className=" text-gray-500 text-base text-center flex flex-row-reverse">
              Arts By
              <a
                className="flex px-1"
                href="https://www.facebook.com/Crepixa"
                target="_blank"
                name="credit"
                rel="noopener noreferrer"
                aria-label="instagram account"
              >
                Crepixa
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
