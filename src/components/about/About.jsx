import React from "react";
import aboutPic from "../../assets/imgs/about.webp";
import PageHeader from "../utilities/PageHeader";
export default function About() {
    return (
        <section className="py-20 container mx-auto min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
                <img src={aboutPic} alt="" className="mx-auto h-96" />
                <div className="flex-1">
                    <h2 className="text-5xl font-bold text-blue-600 mt-12 md:mt-0 mb-5 border-b-8 pb-6 border-blue-400 w-fit">
                        Our Story
                    </h2>
                    <p className="text-2xl text-slate-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio temporibus eveniet officiis quisquam praesentium
                        ipsa doloremque, adipisci architecto explicabo facilis
                        vero aut aspernatur ex exercitationem eaque dolorum?
                        Rem, aliquam in!
                    </p>
                </div>
            </div>
        </section>
    );
}
