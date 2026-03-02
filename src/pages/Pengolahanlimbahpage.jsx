import React, { useEffect } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";

const Pengolahanlimbah = () => {
useEffect(() => {
    window.scrollTo(0, 0);
}, []);

const data = {
    title: "Pengolahan Limbah: Inovasi yang Janjikan Peluang Ekonomi Bagi Warga",
    category: "Program Kerja",
    date: "30 Oktober 2025",
    author: "PM BEM UNSRI",
    mainImage: "/assets/Proker/4.webp",
    content: [
    {
        id: 1,
        image: "/assets/Proker/5.webp",
        text: 
        "Pada 30 Oktober 2025, program pembangunan tempat pengolahan limbah resmi dimulai sebagai upaya meningkatkan kebersihan lingkungan dan pengelolaan limbah. Selama ini, masyarakat menghadapi persoalan penumpukan sampah dan limbah rumah tangga yang belum tertangani secara sistematis. Program yang berlangsung hingga 10 Desember 2025 ini diharapkan dapat menjadi solusi jangka panjang bagi permasalahan lingkungan lokal. Dalam sepuluh hari pelaksanaan, tim teknis dan masyarakat bersama-sama membangun fasilitas tempat pengolahan limbah organik menjadi pupuk cair. Konsultasi dengan aparat desa dan tokoh masyarakat dilakukan untuk memastikan lokasi, desain, serta mekanisme operasional sesuai kebutuhan warga. Proses edukasi mengenai pemilahan sampah juga disisipkan selama kegiatan berlangsung."
    },
    {
        id: 2,
        image: "/assets/Proker/6.webp",
        text: "Kehadiran tempat pengolahan limbah ini diharapkan dapat mengurangi pencemaran lingkungan, meningkatkan kesadaran masyarakat dalam pengelolaan sampah, serta menumbuhkan budaya hidup bersih dan berkelanjutan. Pengolahan limbah organik menjadi pupuk juga memberi peluang ekonomi baru bagi warga, terutama bagi kelompok tani yang membutuhkan pupuk tambahan. Dengan adanya fasilitas ini, kampung diharapkan dapat menjadi contoh pengelolaan lingkungan yang mandiri. Setelah pembangunan selesai, evaluasi awal menunjukkan bahwa fasilitas telah berdiri sesuai rencana, meski masih perlu penyempurnaan pada sistem drainase dan papan informasi bagi pengguna. Tingkat antusiasme warga cukup tinggi, namun keberhasilan jangka panjang sangat bergantung pada kedisiplinan pemanfaatan fasilitas ini."
    }
    ]
};

return (
    <article className="w-full min-h-screen dark:bg-primary-dark transition-colors duration-500 pb-20 px-10 md:px-35">

        {/* Header Artikel (Center) */}
        <header data-aos="fade-down" className="relative w-full mx-auto px-4 pt-32 md:pt-40 text-center">
            <span className="px-4 py-1.5 bg-[#D4E94E] text-primary-text text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6 inline-block">
            {data.category}
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-primary-text dark:text-white leading-[1.1] uppercase mb-8">
            {data.title}
            </h1>

            <div className="absolute bottom-70 left-0 md:left-20 md:bottom-0 w-fit">
                <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="w-10 md:w-30 animate-spin [animation-duration:110s] [animation-direction:reverse] origin-center" />
            </div>
            <div className="absolute bottom-10 left-60 md:left-285 md:top-30 w-fit">
                <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="w-20 animate-spin [animation-duration:90s] [animation-direction] origin-center" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-6 border-y border-gray-100 dark:border-slate-800 text-xs font-bold uppercase tracking-widest text-gray-500">
                <p>By <span className="text-primary-text dark:text-white">{data.author}</span></p>
                <p className="hidden md:block">•</p>
                <p>{data.date}</p>
            </div>
        </header>

        {/* Main Feature Image */}
        <div data-aos="fade-up" className="w-full mx-auto px-4 md:mt-12 mb-10 md:mb-20 transition-all duration-500 hover:scale-103">
            <div className="w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden shadow-2xl border border-white dark:border-slate-800">
                <img src={data.mainImage} alt="Main" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Konten Berita (Grid 60/40) */}
        <main data-aos="fade-up" className="w-full mx-auto px-4 space-y-10 md:space-y-24">
            {data.content.map((item, index) => (
            <div 
                key={item.id} 
                className={`flex flex-col gap-10 md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
                {/* Bagian Penjelasan (60%) */}
                <div className="w-full md:w-[60%]">
                    <p className="text-lg md:text-xl text-justify leading-relaxed text-slate-700 dark:text-slate-300 first-letter:text-5xl first-letter:font-black first-letter:text-[#D4E94E] first-letter:mr-3 first-letter:float-left">
                        {item.text}
                    </p>
                </div>

                {/* Bagian Gambar (40%) */}
                <div className="w-full md:w-[40%] transition-all duration-500 hover:scale-103">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative overflow-hidden rounded-xl border border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 aspect-square md:aspect-auto">
                        <img 
                            src={item.image} 
                            alt={`Update ${index + 1}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        </div>
                    </div>
                </div>
            </div>
            ))}

            {/* Closing Paragraph (Opsional) */}
            <div data-aos="zoom-in" className="md:p-12 text-center bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-white dark:border-slate-800 ">
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase italic">OUR WISH</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic max-w-2xl mx-auto">
                    " Ke depan, perlu adanya jadwal pengawasan rutin serta pembentukan tim pengelola agar tempat pengolahan limbah ini dapat berfungsi secara optimal.  "
                </p>
            </div>

            {/* Footer Navigation */}
            <div data-aos="fade-left" className="flex justify-center ">
                <button 
                    onClick={() => window.history.back()}
                    className="group flex items-center gap-3 p-5 font-medium text-sm rounded-full bg-linear-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] text-white transition-all duration-500 hover:scale-105 uppercase cursor-pointer"
                >
                    <span className="group-hover:-translate-x-2 transition-transform duration-300"><IoArrowBackCircle className="text-2xl"/></span> 
                    Back to Prev
                </button>
            </div>
        </main>
    </article>
);
};

export default Pengolahanlimbah;