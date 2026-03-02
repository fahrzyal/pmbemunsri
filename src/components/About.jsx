import React from 'react';
//React Icon
import { FiUsers } from "react-icons/fi";
import { PiMedal } from "react-icons/pi";
import { IoArrowDownCircle } from "react-icons/io5";

const About = () => {
    return (
        <div>
        <div>
            {/* Header Section */}
            <section className="relative w-full h-fit dark:bg-primary-dark pt-10 md:pt-32 px-10 md:px-30 transition-colors duration-300">
                <div data-aos="fade-down" className="flex flex-col justify-center items-center px-10 w-full h-fit">
                    <img src="/assets/about-us.svg" alt="" className="w-xs md:w-md" />
                    <div className="flex justify-center gap-1 transition-transform duration-500 hover:scale-103">
                        <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div>
                        <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div> 
                    </div>
                    <h1 className="mb-5 text-center font-black text-primary-text dark:text-white text-4xl md:text-5xl transition-transform duration-500 hover:scale-103">ABOUT <span className="text-secondary-text italic">US</span></h1>
                    <p className="mb-3 text-center text-sm md:text-xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-103">"Kenali lebih dekat siapa kami, fokus dan tujuan program kami, serta semangat yang mendorong <br /> setiap langkah dan kontribusi kami."</p>
                    <a target='' href="#about-us" className="text-[#D4E94E]"><IoArrowDownCircle className="mt-7 text-7xl animate-bounce" /></a>
                    <div className="h-1.5 w-3 mb-3 bg-[#D4E94E] mt-2 rounded-full"></div>
        
                    <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="hidden md:block absolute left-85 md:left-70 mt-35 md:-mt-130 w-10 md:w-15 animate-spin [animation-duration:30s] origin-center" />
                    <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="hidden md:block absolute left-0 md:left-240 -mt-50 md:mt-25 w-15 md:w-20 animate-spin [animation-duration:40s] origin-center" />
                </div>
            </section>

            {/* About Section*/}
            <section className="relative w-full min-h-screen dark:bg-primary-dark px-10 md:px-30 transition-colors duration-300">

                <div id='about-us' className="about-us flex flex-col md:flex-row items-center md:h-screen md:pt-30">
                    <div data-aos="fade-right" className="box-about-1 flex flex-col items-center w-screen md:w-1/2 h-fit md:h-full">
                        <div className="flex flex-col gap-5 pt-15 px-10 w-screen md:w-full text-primary-text dark:text-white">
                            <div className="flex flex-row gap-1">
                                <div className="h-2 w-3 mb-5 bg-green-500 mt-2 rounded-full"></div> 
                                <div className="h-2 w-12 mb-5 bg-green-500 mt-2 rounded-full"></div>
                            </div>
                            
                            <h2 className="font-semibold text-3xl md:text-4xl italic">About</h2>
                            <h1 className="font-bold text-4xl md:text-5xl"><span className="text-secondary-text">PM</span> BEM UNSRI?</h1>

                            <p className="text-justify font-medium text-sm">Pemberdayaan Masyarakat oleh “Badan Eksekutif Mahasiswa” (PM-BEM) merupakan program pendanaan untuk menjembatani kolaborasi dosen dalam pengembangan dan penerapan teknologi dan inovasi yang dihasilkan oleh perguruan tinggi dan inisiasi serta partisipasi 
                            mahasiswa untuk dapat memberikan manfaat bagi masyarakat. <br />
                            Kolaborasi dan sinergi antara dosen dan mahasiswa dalam melakukan pemberdayaan masyarakat dan peran partisipatif dari masyarakat diharapkan dapat memberikan dampak yang lebih terukur, nyata dan luas.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-10 w-screen md:w-full">
                            <div className="flex flex-row items-center mr-22 md:mr-0 py-2 pl-4 pr-15 gap-3 w-fit text-left border-2 border-secondary-text rounded-2xl transition-transform ease-in-out duration-500 hover:-rotate-5">
                                <FiUsers className='p-2 w-12 h-12 text-white bg-linear-to-r from-[#16A34A] to-[#22C55E] rounded-md' />
                                <h1 className="leading-6 font-bold italic text-2xl text-secondary-text">20+ <br /><span className="font-normal not-italic text-primary-text dark:text-white ">Members</span></h1>
                            </div>
                            <div className="flex flex-row items-center ml-22 md:ml-0 py-2 pr-4 pl-15 gap-3 w-fit text-right border-2 border-secondary-text rounded-2xl transition-transform ease-in-out duration-500 hover:rotate-5">
                                <h1 className="leading-6 font-bold italic text-2xl text-secondary-text">5 <br /><span className="font-normal not-italic text-primary-text dark:text-white">Outputs</span></h1>
                                <PiMedal className='p-2 w-12 h-12 text-white bg-linear-to-r from-[#16A34A] to-[#22C55E] rounded-md'/>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos="fade-left" className="box-about-2 relative flex items-center justify-center w-screen md:w-1/2 h-fit md:h-full">
                        <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="absolute top-1 right-14 w-40 animate-spin [animation-duration:40s] origin-center"/>
                        <img src="/assets/element-blurr.webp" alt="" loading="lazy" className=" absolute bottom-150 md:bottom-6 left-40 md:left-19 w-10 md:w-30 animate-spin [animation-duration:40s] [animation-direction:reverse] origin-center"/>
                        <img src="/assets/logo-pmbemunsri.webp" alt="" loading="lazy" title="Logo PM BEM Unsri" className="hidden md:block absolute py-6 w-70 md:w-sm bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl transition-transform ease-in-out duration-500 rotate-6 hover:rotate-0" />
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default About;