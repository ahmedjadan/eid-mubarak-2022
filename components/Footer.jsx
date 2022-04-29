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
          <div className="relative flex w-full flex-col md:flex-row items-center justify-center md:justify-between">
            <p className="text-gray-400 text-xs  items-center flex">
              {' '}
              عيدالفطر المبارك {year} &copy;{' '}
            </p>
            <p className=" text-gray-500 text-base  items-center flex flex-row-reverse font-sans">
              By
              <a
                className="flex px-1"
                href="https://www.ahmedjadan.dev"
                target="_blank"
                name="credit"
                rel="noopener noreferrer"
                aria-label="instagram account"
              >
                AJ
              </a>
            </p>

            <p className=" text-gray-500 text-base   flex flex-row-reverse">
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
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
