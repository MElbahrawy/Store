import React from "react";
export default function ColorBtn({ color, currentColor, getFilter }) {
  if (color === "all") {
    return (
      <button
        name="color"
        data-value={color}
        className={`me-2 capitalize transition text-sm  mb-1 border-b-2 ${
          color === currentColor
            ? "border-black text-black"
            : "text-slate-400 border-white"
        }`}
        onClick={(e) => getFilter(e)}
      >
        {color}
      </button>
    );
  } else {
    return (
      <button
        name="color"
        data-value={color}
        className={`w-5 h-5 rounded-full border  mr-2 mb-1 transition flex justify-center items-center text-white text-sm ${
          color === currentColor
            ? "opacity-100 border-black"
            : "border-gray-500  opacity-50"
        }`}
        style={{
          backgroundColor: color,
        }}
        onClick={(e) => getFilter(e)}
      >
        {color === currentColor && <i className="fa-solid fa-check"></i>}
      </button>
    );
  }
}
