import Banner from "../sections/home/Banner";
import About from "../sections/home/About";
import Services from "../sections/home/Services";
import Products from "../sections/home/Products";
import Specialties from "../sections/home/Specialties";
import Resume from "../sections/home/Resume";
import Projects from "../sections/home/Projects";

export default function Home() {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Products />
            <Specialties />
            <Resume />
            <Projects />
        </>
    );
}
