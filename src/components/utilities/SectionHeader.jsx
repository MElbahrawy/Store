import React from "react";

export default function SectionHeader({ children }) {
    return (
        <h2 className="text-5xl text-blue-400 font-bold mb-14 pb-4 mx-auto border-b-8 border-slate-200 w-fit">
            {children}
        </h2>
    );
}
