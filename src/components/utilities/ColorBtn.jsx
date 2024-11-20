import React from "react";
export default function ColorBtn({ color, mainColor, setMainColor }) {
  return (
    <span
      key={color}
      className={`w-5 h-5 rounded-full border border-gray-500 mr-2 opacity-50 text-white flex justify-center items-center cursor-pointer text-sm ${
        color === mainColor && "opacity-100 border-black"
      }`}
      style={{
        backgroundColor: color,
      }}
      onClick={() => setMainColor(color)}
    >
      {color === mainColor && <i className="fa-solid fa-check"></i>}
    </span>
  );
}
