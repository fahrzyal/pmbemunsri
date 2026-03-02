import React from 'react';
import OutputSection from '../components/OutputSection';
import Faq from '../components/Faq';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// React Icons
import { FiMenu, FiHome, FiUsers } from "react-icons/fi";
import { PiMedal } from "react-icons/pi";
import LocationServ from '../components/LocationServ';
import Shortstory from '../components/Shortstory';

const Homepage = () => {
    return (
        <div className="homepage flex items-center justify-center w-full dark:bg-primary-dark transition-colors duration-300">
            <div className="container flex flex-col items-center w-full pt-32 md:pt-0 overflow-hidden">
                {/* Hero Section */}
                <div data-aos="fade-down" id='beranda' className="hero md:relative flex flex-col items-center justify-center md:h-screen -mb-30 md:mb-0 mx-5 md:mx-0 overflow-hidden">
                    <div className="box-hero-1 md:relative lg:block hidden">
                        <Swiper
                            spaceBetween={0}
                            effect={'fade'}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                            delay: 2300,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation, EffectFade]}
                            className="mySwiper w-screen h-screen"
                        >
                        <SwiperSlide className="relative">
                            <img src="/assets/slider1-hero.webp" alt="" loading="lazy" className="md:absolute inset-0 w-screen h-screen" />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </SwiperSlide>
                        <SwiperSlide className="relative">
                            <img src="/assets/slider2-hero.webp" alt="" loading="lazy" className="md:absolute inset-0 w-screen h-screen object-cover" />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </SwiperSlide>
                        <SwiperSlide className="relative">
                            <img src="/assets/slider3-hero.webp" alt="" loading="lazy" className="w-screen h-screen object-cover" />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                    
                    <div className="box-hero-2 md:absolute flex flex-col items-center justify-center z-10 mb-10 w-fit">
                        <img src="/assets/logo-pmbemunsri.webp" alt="" loading="lazy" className="w-full md:w-32 transition-transform duration-500 hover:scale-105" />
                        <h1 className="text-center md:text-4xl text-2xl font-extrabold text-primary-text dark:text-white md:text-white leading-10 tracking-wide">
                            PROGRAM MAHASISWA BERDAMPAK <br />
                        <span className="md:text-3xl text-xl">
                            PEMBERDAYAAN MASYARAKAT OLEH <span className="italic">BADAN EKSEKUTIF MAHASISWA</span> <br />
                        </span>
                        <span className="md:text-3xl text-xl font-light italic">
                            UNIVERSITAS SRIWIJAYA 2025
                        </span>
                        </h1>
                    </div>

                    <div className="box-hero-3 md:absolute flex flex-col mb-5 gap-1 px-9 py-1 z-10 rounded-full items-center justify-center md:mt-96 w-fit bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(255,255,255,0.5)] transition-transform duration-500 hover:scale-105">
                        <div className="text-normal italic md:text-white text-primary-text">
                            <h2>Supported by :</h2>
                        </div>
                        
                        <div className="flex flex-row gap-2">
                            <img src="/assets/logo-kemendikti.webp" alt="" loading="lazy" className="w-10" />
                            <img src="/assets/logo-mahasiswa-berdampak-circle.webp" alt="" loading="lazy" className="w-10 " />
                            <img src="/assets/logo-mahasiswa-berdampak-box.webp" alt="" loading="lazy" className="w-32" />
                        </div>
                    </div>
                </div>

                {/* Lokasi Pengabdian */}
                <LocationServ />

                {/* Luaran */}
                <OutputSection />

                {/* FAQ */}
                <Faq />
            </div>
        </div>
    );
};

export default Homepage;