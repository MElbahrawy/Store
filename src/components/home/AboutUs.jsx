import React from "react";
import SectionHeader from "../utilities/SectionHeader";
import Container from "../utilities/Container";
import AboutCard from "../utilities/AboutCard";

export default function AboutUs() {
    let desc =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Cum sociis natoque penatibus et justo. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.";
    return (
        <section className="py-5">
            <Container>
                <SectionHeader>About Us</SectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mb-14">
                    <AboutCard icon="icon" title="mission" description={desc} />
                    <AboutCard icon="icon" title="vision" description={desc} />
                    <AboutCard icon="icon" title="history" description={desc} />
                </div>
            </Container>
        </section>
    );
}
