import React, { useEffect, useState } from "react";
import img from "../../assets/imgs/product-6.jpeg";
import img1 from "../../assets/imgs/extra-product-1.jpeg";
import img2 from "../../assets/imgs/extra-product-2.jpeg";
export default function ProductImages({ images = [] }) {
  const [mainImg, setMainImg] = useState(images[0]?.url);

  useEffect(() => {
    setMainImg(images[0]?.url);
  }, [images]);
  return (
    <div className="mx-auto w-96">
      <img
        src={mainImg}
        alt=""
        className="w-96 h-96 rounded transition"
        loading="lazy"
      />
      <div className={`grid grid-cols-5 gap-2 my-2`}>
        {images?.length > 0 &&
          images?.map((thumbnail) => (
            <img
              src={thumbnail.url}
              key={thumbnail.id}
              alt={thumbnail.filename}
              className="object-cover cursor-pointer transition h-16 active:border-2 border-blue-500"
              onClick={() => setMainImg(thumbnail.url)}
            />
          ))}
      </div>
    </div>
  );
}
