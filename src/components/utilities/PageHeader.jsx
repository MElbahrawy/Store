import React from "react";
import { Link } from "react-router-dom";

export default function PageHeader({ title = "page" }) {
    return (
        <div className="w-full h-40 bg-slate-400 mt-10">
            <div className="container mx-auto h-full flex  items-center">
                <h2 className="text-white text-4xl font-bold">
                    <Link className="text-blue-600" to="/">
                        Home
                    </Link>{" "}
                    / {title}
                </h2>
            </div>
        </div>
    );
}
