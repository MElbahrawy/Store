import React from "react";

export default function Footer() {
    return (
        <div className="footer bg-slate-600 text-white text-center p-5">
            <p>
                All Rights Reserved &copy; {new Date().getFullYear()}{" "}
                <a href="/" className="text-blue-400">
                    Store
                </a>
            </p>
        </div>
    );
}
