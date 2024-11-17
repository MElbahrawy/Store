import React from "react";
import SectionHeader from "../utilities/SectionHeader";
import ProductCard from "../utilities/ProductCard";
import Container from "../utilities/Container";

export default function FeaturedProducts() {
    return (
        <section className="bg-slate-200 py-5">
            <Container>
                <SectionHeader>Featured Products</SectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <button className="block bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition mt-5 mx-auto">
                    All Products
                </button>
            </Container>
        </section>
    );
}
