import React from 'react'

const Focusgoals = () => {
  return (
    <div>
        {/* Focus & Goals Section */}
        <div className="focus-goals flex justify-center md:px-30 pt-0 md:pt-28 w-screen h-screen">
            <div className="box-focus-goals-1 relative flex flex-col items-center w-screen h-screen">
                    <div className="hidden md:block absolute -right-7 -top-7 w-fit">
                    <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="w-sm animate-spin [animation-duration:90s] origin-center" />
                </div>
                <div className="absolute bottom-60 left-0 md:-left-20 md:-bottom-20 w-fit">
                    <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="w-lg animate-spin [animation-duration:110s] [animation-direction:reverse] origin-center" />
                </div>
            </div>
            <div className="box-focus-goals-2 absolute flex flex-col items-center pt-10 md:pt-0 px-10 gap-7 md:w-7xl">
                <div data-aos="zoom-in" className="transition-transform duration-500 hover:scale-103">
                    <div className="flex justify-center gap-1">
                        <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div>
                        <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div> 
                    </div>
                    <h1 className="font-black text-secondary-text text-4xl md:text-5xl">FOCUS <span className="text-primary-text dark:text-white">& GOALS</span></h1>
                </div>
                <div data-aos="fade-right" className="w-full">
                    <div className="w-full h-70 md:h-fit p-7 bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl text-primary-text dark:text-white overflow-y-auto transition-transform duration-500 hover:scale-105">
                        <h1 className="mb-3 text-2xl md:text-3xl font-extrabold text-center">FOCUS</h1>
                        <p className="text-justify md:text-center text-sm md:text-lg">
                        PM-BEM 2025 memprioritaskan pilihan permasalahan yang diangkat pada pangan, energi, dan kesehatan (didasarkan pada 8 bidang fokus Rencana Induk Riset Nasional tahun 2017-2045) atau swasembada pangan,
                        ekonomi kreatif, ekonomi hijau, ekonomi biru, dan kesehatan</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="w-full">
                    <div className="w-full h-70 md:h-fit p-7 bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl text-primary-text dark:text-white overflow-y-auto transition-transform duration-500 hover:scale-105">
                        <h1 className="mb-3 text-2xl md:text-3xl font-extrabold text-center">GOALS  </h1>
                        <p className="text-justify md:text-center text-sm md:text-lg">
                            1. Bentuk nyata tanggung jawab sosial insan perguruan tinggi <br />
                            2. Mendorong dosen dan mahasiswa untuk menerapkan ilmu dan keahlian secara langsung <br />
                            3. Menumbuhkan jiwa kepemimpinan transformatif dan kepekaan sosial dalam diri mahasiswa <br />
                            4. Memfasilitasi organisasi mahasiswa dalam merancang dan melaksanakan inisiatif sosial <br />
                            5. Membangun kolaborasi strategis antara dosen, organisasi mahasiswa dengan masyarakat, dan institusi pendidikan <br />
                            6. Meningkatkan kepedulian mahasiswa terhadap masyarakat. <br />
                            7. Wahana pembelajaran lintas disiplin dan lintas budaya 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Focusgoals