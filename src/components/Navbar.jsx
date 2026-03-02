import React from 'react';
import { NavLink } from 'react-router-dom';

// React Icons
import { FiMenu, FiHome, FiUsers, FiSun } from "react-icons/fi";
import { PiMedal, PiRocket, PiMoonStars, PiGooglePhotosLogo } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineRecycling } from "react-icons/md";
import { GiCoffeeBeans } from "react-icons/gi";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const linkStyle = ({ isActive }) => 
        isActive 
        ? "md:text-secondary-text font-semibold hover:text-secondary-text transition-transform duration-300"
        : "font-medium hover:text-secondary-text hover:font-semibold transition-transform duration-300";

    // TODO: handle click for mobile menu
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let menuActiveClass = isMenuOpen ? "-left-10" : "-left-full";

    // TODO: handle click for dropdown menu
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const dropDownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    let dropDownActive = isDropdownOpen ? "flex" : "hidden";

    return (
    <>
        <div className="navbar fixed flex w-full justify-center z-50 transition-all">
            <div className="container bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] max-w-[85%] my-4 p-2 rounded-[20px]">
                <div className="navbar-box flex items-center justify-between px-5 text-primary-text">
                    <div className="logo flex items-center gap-3">
                        <img src="public/assets/logo-pmbemunsri.webp" alt="Logo PM BEM 2025" className="w-16 h-16"/>
                        <h1 className="text-[18px] font-bold leading-5">PM BEM 2025 <br /> 
                            <span className="hidden lg:block font-normal">Universitas Sriwijaya</span>
                        </h1>
                    </div> 
                    <ul className={`
                        fixed md:static 
                        flex md:flex-row  flex-col
                        p-7 md:p-0
                        lg:gap-14 gap-6
                        ${menuActiveClass}
                        md:w-auto md:h-12
                        md:transision-none
                        translate-y-60 md:translate-y-0
                        rounded-r-[20px] 
                        bg-[#22C55E] md:bg-transparent
                        text-white md:text-primary-text
                        shadow-[1px_1px_15px_rgba(0,0,0,0.25)] md:shadow-none 
                        `}>
                        <li className="flex items-center gap-3">
                            <FiHome className="md:hidden block text-2xl"/>
                            <NavLink to="/"
                            // onClick={() => setActiveMenu("beranda")}
                            className={ linkStyle }>Home</NavLink>
                        </li>
                        <li className="flex items-center gap-3">
                            <PiMedal className="md:hidden block text-2xl"/>
                            <NavLink to="/about-us" className={ linkStyle }>About Us</NavLink>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiUsers className="md:hidden block text-2xl"/>
                            <NavLink to="/profile" className={ linkStyle }>Profile</NavLink>
                        </li>
                        <li className="relative flex flex-col md:flex-row items-center gap-3">
                            <div className="flex flex-row gap-3 w-full">
                            <PiRocket className="md:hidden block text-2xl"/>
                            <NavLink onClick={dropDownClick} className='flex items-center gap-1 font-medium hover:text-secondary-text hover:font-semibold transition-transform duration-300'>
                                Proker 
                                <IoIosArrowDown className={`
                                    transition-transform duration-300 
                                    ${isDropdownOpen ? "rotate-180" : ""}
                                    `} />
                            </NavLink>
                            </div>

                            {/* Dropdown Program Kerja Menu */}
                            <ul className={`
                                md:absolute flex flex-col
                                md:flex 
                                gap-3 pl-5 md:p-5 
                                ${dropDownActive}
                                left-3
                                md:mt-44 w-max 
                                rounded-xl
                                md:bg-[#22C55E] text-white
                                md:shadow-lg
                                transition-all duration-300 
                                ${
                                isDropdownOpen
                                    ? "opacity-100 scale-100 translate-y-0"
                                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                }
                            `}>
                                <li className="flex flex-row items-center gap-2 font-normal text-base">
                                    <GiCoffeeBeans />
                                    <NavLink to="/home-dry-coffee">Home Dry Coffee</NavLink>
                                </li>
                                <li className="flex flex-row gap-2 font-normal text-base">
                                    <MdOutlineRecycling className="mt-1"/>
                                    <NavLink to="/pengolahan-limbah">Pengolahan Limbah <br />Kopi</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="relative md:absolute flex items-center md:ml-140 gap-3">
                            <PiGooglePhotosLogo className="md:hidden block text-2xl"/>
                            <NavLink to="/gallery" className="md:px-6 md:py-3 rounded-[25px] md:bg-linear-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] text-white transition-all duration-500 hover:scale-105">Gallery</NavLink>
                        </li>
                    </ul>
                    
                    <div className="dark-mode flex justify-center items-center">
                        <button onClick={toggleDarkMode} className="flex mx-3 p-4 rounded-full bg-primary-text dark:bg-[#D4E94E] text-white dark:text-primary-text cursor-pointer transition-transform duration-500 hover:scale-105">
                                {isDarkMode ? <FiSun /> : <PiMoonStars />}
                        </button>
                    </div>
                    <div className="block md:hidden" onClick={handleClick}>
                        <FiMenu className="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;