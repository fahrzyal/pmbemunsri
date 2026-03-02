import React from 'react';

// React Icon
import { FiInstagram } from "react-icons/fi";
import { BiLogoTiktok } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer data-aos="fade-up" className="w-full h-fit shadow-[1px_1px_15px_rgba(0,0,0,0.25)] border border-white dark:border-slate-800 dark:bg-primary-dark">
            <div className="box-footer-1 flex flex-col px-10 md:px-30 md:py-5 w-full">
                <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
                    <div className="hidden md:flex flex-col md:flex-row justify-center items-center w-full md:w-fit h-fit">
                        <img src="public/assets/logo-pmbemunsri.webp" loading="lazy" alt="Logo PM BEM 2025" className="w-40"/>
                        <h1 className="font-extrabold text-center md:text-left text-2xl text-primary-text dark:text-white"><span className="text-secondary-text">PM BEM </span>UNSRI <br /><span className="italic">2025</span></h1>
                    </div>
                    <div className="hidden md:flex flex-col items-center text-primary-text dark:text-white">
                        <h1 className="mb-3 text-left font-extrabold text-xl">Social Media :</h1>
                        <div className="flex items-center gap-1 font-semibold">
                            <FiInstagram className="text-xl"/>
                            <a href="" className="text-lg">@pmbemunsri</a>
                        </div>
                        <div className="flex items-center gap-1 font-semibold">
                            <BiLogoTiktok className="text-xl"/>
                            <a href="" className="text-lg">@pm_bemunsri</a>
                        </div>
                        <div className="flex items-center gap-1 font-semibold">
                            <MdOutlineMail className="text-xl"/>
                            <a href="" className="text-lg">pmbemunsri@gmail.com</a>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <h1 className="mb-3 mt-5 md:mt-0 font-extrabold text-md md:text-xl text-primary-text dark:text-white">Supported by :</h1>
                        <div className="flex items-center gap-2 justify-center md:justify-end">
                            <img src="public/assets/logo-kemendikti.webp" loading="lazy" alt="" className="w-10 md:w-15"/>
                            <img src="public/assets/logo-mahasiswa-berdampak-circle.webp" loading="lazy" alt="" className="w-10 md:w-15"/>
                            <img src="public/assets/logo-mahasiswa-berdampak-box.webp" loading="lazy" alt="" className="w-35 md:w-40" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-footer-2 flex justify-center items-center p-3 border-t border-gray-200 dark:border-white/3">
                <p className="text-xs md:text-sm text-primary-text dark:text-white">&copy; 2026 PM BEM UNSRI. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;