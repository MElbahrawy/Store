import { react } from "react"; //-
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts"; // Import FeaturedProducts component//+
import AboutUs from "../components/home/AboutUs";
import Newsletter from "../components/home/Newsletter";
export default function HomePage() {
    return (
        <div>
            <Hero />
            <FeaturedProducts />
            <AboutUs />
            <Newsletter />
        </div>
    );
}
