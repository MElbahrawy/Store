import React, { useState } from "react";
import img from "../../assets/imgs/product-6.jpeg";
import img1 from "../../assets/imgs/extra-product-1.jpeg";
import img2 from "../../assets/imgs/extra-product-2.jpeg";
export default function ProductImages() {
  const [mainImg, setMainImg] = useState(img);
  const thumbnail = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img,
    },
    {
      id: 4,
      img: img2,
    },
  ];
  return (
    <div className="mx-auto w-96">
      <img src={mainImg} alt="" className="w-96 h-96 rounded" />
      <div className={`grid grid-cols-4 gap-2 my-2`}>
        {thumbnail.map((thumbnail) => (
          <img
            src={thumbnail.img}
            key={thumbnail.id}
            className="object-cover cursor-pointer"
            onClick={() => setMainImg(thumbnail.img)}
          />
        ))}
      </div>
    </div>
  );
}
