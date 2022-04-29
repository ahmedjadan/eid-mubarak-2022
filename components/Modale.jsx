import React, { useState, useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import ImageBLured from './Image';
import Input from './Input';
import { useRouter } from 'next/router';


export default function Modale({ setOpen, data }) {
  const [name, setName] = useState('عيدكم مبارك...');
  const ref = useRef(null);
  const router = useRouter();

  const onButtonClick = useCallback(() => {
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
        <div className="flex items-center min-h-screen">
          <div className="relative w-full max-w-3xl mx-auto p-2  bg-white  rounded-md shadow-lg  overflow-hidden">
            <div className="grid md:grid-cols-2 grid-cols-1  bg-gray-100/90">
              <div className="md:col-span-1">
                <div className="flex flex-col items-center justify-center h-full space-y-4 px-4">
                  <Input name={name} setName={setName} />
                  <button
                    onClick={onButtonClick}
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
                className="relative md:col-span-1 rounded-md shadow-2xl p-2 "
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
                    data.active === true ? 'bottom-[6.5rem] ' : 'bottom-10 '
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
