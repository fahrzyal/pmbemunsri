import React from 'react';
import About from '../components/About';
import Focusgoals from '../components/Focusgoals';
import LocationServ from '../components/LocationServ';
import OutputSection from '../components/OutputSection';
import Shortstory from '../components/Shortstory'; 

const Aboutpage = () => {
    return (
        <>
            <div className="homepage flex items-center justify-center w-full dark:bg-primary-dark transition-colors duration-300">
            <div className="container flex flex-col items-center w-full pt-20 md:pt-0 md:pb-10 overflow-hidden">
            <About />
            <Shortstory />
            <Focusgoals />
            <LocationServ />
            <OutputSection />
            </div>
            </div>
        </>
    )
}

export default Aboutpage;