import React, { useState } from 'react';
import ImageBLured from './Image';

import Modale from './Modale';
function Card({ data, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <div
        className="relative aspect-w-9 cursor-pointer font-Aref aspect-h-16 border-2 rounded-md border-gray-300/70  hover:shadow-2xl duration-200 "
        onClick={() => setOpen(!open)}
      >
        <ImageBLured
          src={data.src}
          layout="fill"
          objectFit="cover"
          styles="w-full cursor-pointer rounded "
        />
        <div className="absolute flex items-center h-full w-full justify-center opacity-0 hover:opacity-100 duration-300  ">
          <p className="bg-indigo-400/90 text-gray-50 p-2 rounded font-messiri">استخدم البطاقة</p>
        </div>
      </div>
      {open && <Modale setOpen={setOpen} data={data} />}
    </div>
  );
}

export default Card;
