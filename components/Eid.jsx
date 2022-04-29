import React from 'react';
import { images } from '../data/images';
import Card from './Card';

export default function Eid() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-4 md:px-0 ">
      {images.map((img, idx) => (
        <Card data={img} key={idx} index={idx} />
      ))}
    </div>
  );
}
