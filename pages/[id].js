import React, { useState } from 'react';
import ImageBLured from '../components/Image';

import { useRouter } from 'next/router';
import { images } from '../data/images';
import Input from '../components/Input';

export default function ImageId({ image }) {
  const router = useRouter();
  const { query } = router;
  const imageSrc = images?.find((img) => img?.index === query.id);
  console.log('ImageId ~ imageSrc', imageSrc);
  const [name, setName] = useState('أحمد جعدان');
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 mt-20 bg-gray-100/90 p-1">
        <div className="relative md:col-span-2 h-[38rem] w-[340px] rounded-md  ">
          <ImageBLured
            src={imageSrc?.src}
            layout="fill"
            objectFit="cover"
            styles="w-full  rounded "
          />
          <div className="absolute bottom-12  flex items-center justify-center w-1/2 ">
            <p className="bg-indigo-600 p-2  text-center w-full translate-x-1/2">
              {' '}
              {name}{' '}
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          <Input name={name} setName={setName} />
        </div>
      </div>
    </div>
  );
}
