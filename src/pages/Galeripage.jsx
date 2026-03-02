import React, { useState } from 'react';
// 1. TAMBAHKAN IMPORT ICON YANG KURANG
import { IoCloseCircle, IoArrowDownCircle, IoArrowUpCircle } from "react-icons/io5";

const Galeripage = () => {
    const categories = ["Daily", "Serah Terima", "Monev Internal", "Monev Kementrian", "Rumah Pengeringan"];

    const galleryData = [
        { id: 1, category: "Daily", src: "/assets/Galeripage/Daily/1.webp" },
        { id: 2, category: "Daily", src: "/assets/Galeripage/Daily/2.webp" },
        { id: 3, category: "Daily", src: "/assets/Galeripage/Daily/3.webp" },
        { id: 4, category: "Daily", src: "/assets/Galeripage/Daily/4.webp" },
        { id: 5, category: "Daily", src: "/assets/Galeripage/Daily/5.webp" },
        { id: 6, category: "Daily", src: "/assets/Galeripage/Daily/6.webp" },
        { id: 7, category: "Daily", src: "/assets/Galeripage/Daily/7.webp" },
        { id: 8, category: "Daily", src: "/assets/Galeripage/Daily/8.webp" },
        { id: 9, category: "Daily", src: "/assets/Galeripage/Daily/9.webp" },
        { id: 10, category: "Daily", src: "/assets/Galeripage/Daily/10.webp" },
        { id: 11, category: "Daily", src: "/assets/Galeripage/Daily/11.webp" },
        { id: 12, category: "Daily", src: "/assets/Galeripage/Daily/12.webp" },
        { id: 13, category: "Daily", src: "/assets/Galeripage/Daily/13.webp" },
        { id: 14, category: "Daily", src: "/assets/Galeripage/Daily/14.webp" },
        { id: 15, category: "Daily", src: "/assets/Galeripage/Daily/15.webp" },
        { id: 16, category: "Serah Terima", src: "/assets/Galeripage/Serah Terima/1.webp" },
        { id: 17, category: "Serah Terima", src: "/assets/Galeripage/Serah Terima/2.webp" },
        { id: 18, category: "Serah Terima", src: "/assets/Galeripage/Serah Terima/3.webp" },
        { id: 19, category: "Monev Internal", src: "/assets/Galeripage/Monev Internal/1.webp" },
        { id: 20, category: "Monev Internal", src: "/assets/Galeripage/Monev Internal/2.webp" },    
        { id: 21, category: "Monev Internal", src: "/assets/Galeripage/Monev Internal/3.webp" },
        { id: 22, category: "Monev Kementrian", src: "/assets/Galeripage/Monev Kementrian/1.webp" },
        { id: 22, category: "Monev Kementrian", src: "/assets/Galeripage/Monev Kementrian/2.webp" },
        { id: 22, category: "Rumah Pengeringan", src: "/assets/Galeripage/Rumah Pengeringan/1.webp" },
        { id: 22, category: "Rumah Pengeringan", src: "/assets/Galeripage/Rumah Pengeringan/2.webp" },
        { id: 22, category: "Rumah Pengeringan", src: "/assets/Galeripage/Rumah Pengeringan/3.webp" },
    ];

    const [activeCategory, setActiveCategory] = useState("Daily");
    const [selectedImg, setSelectedImg] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const filteredImages = galleryData.filter(img => img.category === activeCategory);
    const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 6);

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setShowAll(false); 
    };

    return (
        <div>
        <section data-aos="fade-down" className="relative w-full h-fit dark:bg-primary-dark pt-32 px-10 md:px-30 transition-colors duration-300">
            {/* Header Galeri */}
            <div className="flex flex-col justify-center items-center mb-5 w-full h-fit text-center">
                <img src="/assets/galeri.svg" alt="" className="w-xs md:w-md" />
                <div className="flex justify-center gap-1 transition-transform duration-500 hover:scale-105">
                    <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div>
                    <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div> 
                </div>
                <h1 className="mb-5 font-black text-primary-text dark:text-white text-4xl md:text-5xl uppercase">
                    ACTIVITY <span className="text-secondary-text italic">GALLERY</span>
                </h1>
                <p className="mb-3 text-sm md:text-xl text-primary-text dark:text-white ">
                    "Mari lihat, Dokumentasi visual kegiatan pengabdian masyarakat sebagai wujud nyata kontribusi <br className="hidden md:block" /> dan keterlibatan kami di wilayah sasaran"
                </p>
                <a target='' href="#content-galeri" className="text-[#D4E94E]"><IoArrowDownCircle className="mt-7 text-7xl animate-bounce" /></a>
                <div className="h-1.5 w-3 mb-3 bg-[#D4E94E] mt-2 rounded-full"></div>

                <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="hidden md:block absolute left-85 md:left-100 mt-35 md:-mt-130 w-10 md:w-15 animate-spin [animation-duration:30s] origin-center" />
                <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="hidden md:block absolute left-0 md:left-270 -mt-50 md:mt-25 w-15 md:w-20 animate-spin [animation-duration:40s] origin-center" />
            </div>
        </section>
        <section className="relative w-full min-h-screen dark:bg-primary-dark pb-20 px-6 md:px-30 transition-colors duration-300">
            <div id='content-galeri' className="pt-10 md:pt-30">
            {/* Switch Kategori */}
            <div data-aos="fade-down" className="flex flex-wrap justify-center items-center gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`px-3 md:px-8 py-3 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-500 border-2 cursor-pointer
                        ${activeCategory === cat 
                            ? "bg-linear-to-r from-[#22C55E] to-[#4ADE80] border-white text-white shadow-xl shadow-secondary-text/20 scale-110" 
                            : "border-slate-100 dark:border-slate-800 text-slate-400 hover:border-secondary-text hover:text-secondary-text"}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* GRID 3 KOLOM */}
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto">
                {displayedImages.map((item) => (
                    <div 
                        key={item.id}
                        onClick={() => setSelectedImg(item)}
                        className="group relative p-3 aspect-4/3 w-full bg-white/45 backdrop-blur-[15px] border border-white dark:border-white/10 shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.3)] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
                    >
                        <img 
                            src={item.src} 
                            loading='lazy'
                            alt={item.title}
                            className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8"></div>
                    </div>
                ))}
            </div>

            {/* TOMBOL SHOW MORE */}
            {filteredImages.length > 6 && (
                <div data-aos="fade-left" className="flex justify-center mt-12">
                    <button 
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 px-5 py-4 text-sm bg-linear-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] text-white font-bold tracking-widest rounded-full transition-all duration-300 cursor-pointer"
                    >
                        {showAll ? (
                            <>Sembunyikan <IoArrowUpCircle className="text-xl" /></>
                        ) : (
                            <>Lihat Foto Lainnya ({filteredImages.length - 6}+) <IoArrowDownCircle className="text-xl" /></>
                        )}
                    </button>
                </div>
            )}

            {/* MODAL LIGHTBOX */}
            {selectedImg && (
                <div 
                    className="fixed inset-0 z-9999 bg-white/45 backdrop-blur-[5px] flex flex-col items-center justify-center p-6"
                    onClick={() => setSelectedImg(null)}
                >
                    <button className="absolute top-10 right-10 text-white text-5xl hover:rotate-90 hover:text-[#D4E94E] transition-all duration-300 cursor-pointer">
                        <IoCloseCircle />
                    </button>
                    <div className="relative w-full h-full max-w-5xl flex flex-col items-center justify-center gap-6">
                        <img 
                            src={selectedImg.src} 
                            alt="Zoomed" 
                            className="max-w-full max-h-[75vh] object-contain rounded-3xl border border-white/10 shadow-2xl"
                        />
                        <div className="text-center">
                            <span className="text-[#D4E94E] text-xs font-black uppercase tracking-[0.4em]">{selectedImg.category}</span>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </section>
        </div>
    );
};

export default Galeripage;