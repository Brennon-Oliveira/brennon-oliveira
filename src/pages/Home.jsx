import React from 'react';
import Banner from '../components/Home/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Specialties from '../components/Home/Specialties';
import Contact from '../components/Home/Contact';

export default function Home(){


    return(
        <>
            <Banner />
            <About />
            <Services />
            <Specialties />
            <Contact />
        </>
    )
}