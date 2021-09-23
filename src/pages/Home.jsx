import About from "../sections/home/About";
import Services from "../sections/home/Services";
import Products from "../sections/home/Products";
import Specialties from "../sections/home/Specialties";
import Resume from "../sections/home/Resume";
import Projects from "../sections/home/Projects";
import Contact from "../sections/home/Contact";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const favicon = document.getElementById("favicon");
        favicon.href = "/favicon.ico";
    }, []);

    return (
        <>
            <About />
            <Services />
            <Products />
            <Specialties />
            <Resume />
            <Projects />
            <Contact />
        </>
    );
}
