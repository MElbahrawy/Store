import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import notFoundVector from "../assets/vectors/notFound.json";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center text-blue-600">
                Sorry this Page does not Exist !
            </h2>
            <DotLottieReact
                data={notFoundVector}
                loop
                autoplay
                className="w-1/2 my-10"
            />
            <Link
                to="/"
                className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
                Back Home
            </Link>
        </section>
    );
}
