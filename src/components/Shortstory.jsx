import React from 'react';

const Shortstory = () => {
  return (
    <div>
    <div>
        <secion className="container mx-auto relative z-10 flex flex-col items-center w-screen h-fit md:h-screen pt-10 px-10 md:px-30">
            <div data-aos="zoom-in" className="">
                <div className="flex justify-center gap-1 w-full transition-transform duration-500 hover:scale-103">
                    <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div>
                    <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div> 
                </div>
                <h1 className="mb-7 w-full text-center font-black text-primary-text dark:text-white text-4xl md:text-5xl transition-transform duration-500 hover:scale-103">SHORT <span className="text-secondary-text italic">STORY</span></h1>
            </div>

            <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="hidden md:block absolute left-60 md:left-300 mt-165 md:mt-7 w-40 animate-spin [animation-duration:70s] origin-center" />
            <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="hidden md:block absolute left-60 md:left-50 mt-165 md:mt-120 w-20 animate-spin [animation-direction:reverse] [animation-duration:30s] origin-center" />

            {/* 1. VIDEO PLAYER (Sekarang di Atas) */}
            <div data-aos="fade-up" className="w-full md:px-30">
                <div className="w-full md:h-105 mb-7 p-2 bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-3xl"> 
                    {/* Frame Video: Tinggi dibatasi agar header di bawah tetap terlihat */}
                    <div className="relative aspect-video w-full h-full mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-slate-100 dark:border-slate-800">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/axjN5jZHvSU?si=raLziUTYAg4VxPVk"
                            title="Short Story Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* 2. HEADER: Judul & Subjudul (Sekarang di Bawah) */}
            {/* Header Output */}
            <div data-aos="fade-up" className="flex flex-col justify-center w-full">
                <p className="w-full text-center text-sm md:text-xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-103">"Melihat lebih dekat bagaimana ide-ide kreatif bertransformasi menjadi solusi nyata <br />
                    yang menyentuh hati masyarakat."</p>
            </div>

            {/* 3. Social Integration / Tiny Footer */}
            <div className="mt-5 flex items-center gap-6">
                <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
                    <a href="#" className="text-[10px] font-black text-slate-400 hover:text-[#D4E94E] transition-colors uppercase tracking-[0.2em]">
                        Visit YouTube
                    </a>
                <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
            </div>
            
        </secion>
    </div>
    </div>
  );
};

export default Shortstory;