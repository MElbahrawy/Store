import React from "react";

export default function Btn({ children }) {
  return (
    <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
      {children}
    </button>
  );
}
