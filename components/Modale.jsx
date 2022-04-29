import React, { useState, useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import ImageBLured from './Image';
import Input from './Input';
import { useRouter } from 'next/router';

export default function Modale({ setOpen, data }) {


  const [name, setName] = useState('');
  const ref = useRef(null);
  const router = useRouter();

  const downloadImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = Math.random() * 1 + 'card.png';
        link.href = dataUrl;
        link.click();
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref, router]);

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-gray-800/90"
          onClick={() => setOpen(false)}
        ></div>
        <div className="flex items-center min-h-screen p-2">
          <div className="relative w-full max-w-3xl mx-auto   bg-white  rounded-md shadow-lg  overflow-hidden">
            <div className="grid md:grid-cols-2 grid-cols-1  bg-gray-100/90">
              <div className="md:col-span-1 relative mb-10">
                <button
                  onClick={() => setOpen(false)}
                  className=" absolute top-0 left-0 flex items-center text-center font-messiri px-4 py-2 rounded text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="flex relative flex-col items-center justify-center h-full space-y-4 px-4 mt-10">
                  <div className="md:hidden bg-indigo-500/70 text-gray-200 p-1 rounded ">
                    لتجربة ممتازة استخدم المتصفح على جهاز الكمبيوتر
                  </div>
                  <Input name={name} setName={setName} />
                  <button
                    onClick={() => downloadImage()}
                    className="w-full flex items-center text-center justify-between bg-rose-700 hover:bg-rose-600 duration-100 font-messiri px-4 py-2 rounded text-white"
                  >
                    حمّل الصورة
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="relative md:col-span-1 rounded-md shadow-2xl p-2  md:mt-0 "
                id="eid-card"
                ref={ref}
              >
                <ImageBLured
                  src={data?.src}
                  layout="responsive"
                  width={365}
                  height={620}
                  objectFit="cover"
                  styles="w-full  rounded "
                />
                <div
                  className={`absolute ${
                    data.active === true ? 'bottom-[6.4rem] ' : 'bottom-10 '
                  } flex items-center justify-center w-1/2 left-0`}
                >
                  {name && (
                    <p
                      className={` ${
                        data.active === true
                          ? 'bg-transparent'
                          : 'bg-gray-50/80 border'
                      } ${
                        data.text === true ? 'text-white' : ''
                      } rounded-md shadow-2xl text-xl  p-1 font-Aref text-center w-full translate-x-1/2`}
                    >
                      {name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
