import React from "react";
import Container from "../utilities/Container";

export default function Newsletter() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };
    return (
        <div className="bg-blue-400 py-32">
            <Container>
                <div className="flex justify-between items-center gap-6 flex-wrap">
                    <div className="flex-1">
                        <h3 className="text-4xl font-bold text-white text-center mb-5">
                            Newsletter
                        </h3>
                        <p className="text-slate-200 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci, animi sunt sint ipsum minima iure
                            aliquid, qui officiis expedita earum, ad ut placeat.
                            Doloribus libero dolores obcaecati cumque,
                            necessitatibus quod?
                        </p>
                    </div>
                    <form
                        className="flex flex-1 justify-center md:justify-end me-2"
                        action="https://formspree.io/f/mldelrav"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            className="border-0 rounded rounded-e-none"
                        />
                        <button className="bg-slate-200 p-2 hover:bg-slate-300 rounded rounded-s-none">
                            Subscribe
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
}
