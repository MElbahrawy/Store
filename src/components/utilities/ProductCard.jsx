import React from "react";
import img from "../../assets/imgs/apple-watch.png";
export default function Card() {
    return (
        <div className="w-full max-w-sm bg-white border shadow hover:shadow-xl border-gray-200 rounded-lg transition dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="p-8 rounded-t-lg"
                    src={img}
                    alt="product image"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight
                        Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-600 ms-3">
                        5.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        $599
                    </span>
                    <a
                        href="#"
                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
