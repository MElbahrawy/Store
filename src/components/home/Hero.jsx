import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import heroVector from "../../assets/vectors/Animation - 1731553794691.json";
export default function Hero() {
    return (
        <div className="container mx-auto min-h-screen flex justify-center items-center content-center p-10 flex-wrap-reverse">
            <div className="md:w-1/3">
                <h1 className="font-bold text-6xl mb-5">
                    Welcome to Our <span className="text-blue-400">Store</span>
                </h1>
                <p className="text-2xl text-slate-400">
                    You can find everything you need here
                </p>
            </div>
            <DotLottieReact
                data={heroVector}
                loop
                autoplay
                className="md:w-2/3"
            />
        </div>
    );
}
