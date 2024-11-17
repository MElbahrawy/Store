import React from "react";
import About from "../components/about/About";
import PageHeader from "../components/utilities/PageHeader";

export default function AboutPage() {
    return (
        <>
            <PageHeader title="About" />
            <About />
        </>
    );
}
