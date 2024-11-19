import React from "react";

export default function AboutCard({ icon, title, description }) {
  return (
    <div className="w-full text-center  mx-auto max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
      <i className={`${icon} text-gray-200 mt-5 text-7xl`}></i>
      <h3 className="font-bold text-5xl mt-5 text-blue-500">{title}</h3>
      <p className="font-normal text-gray-500 dark:text-gray-400 my-16">
        {description}
      </p>
    </div>
  );
}
