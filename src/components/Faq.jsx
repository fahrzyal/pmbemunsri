import React, { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";

const Faq = () => {
  // State untuk menyimpan index FAQ yang sedang terbuka
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const faqData = [
        {
        question: "Apa tujuan utama dari program pemberdayaan masyarakat ini?",
        answer: "Program ini bertujuan untuk meningkatkan kualitas hidup dan kemandirian masyarakat melalui partisipasi aktif dalam pembangunan, guna mengatasi ketertinggalan serta memperkuat potensi lokal secara berkelanjutan."
        },
        {
        question: "Siapa saja yang terlibat dalam pelaksanaan program ini?",
        answer: "Program ini merupakan kolaborasi sinergis antara Mahasiswa, Masyarakat, Universitas Sriwijaya, dan Pemerintah setempat sebagai fasilitator pendukung."
        },
        {
        question: "Berapa lama durasi program dari awal hinggal selesai?",
        answer: "Program dilaksanakan selama 5 bulan, terhitung mulai dari bulan Agustus hingga Desember, mencakup tahap perencanaan, eksekusi lapangan, hingga evaluasi akhir."
        },
        {
        question: "Apakah masyarakat umum dapat berkontribusi atau menduplikasi program ini?",
        answer: "Ya, program kami dirancang sebagai model percontohan agar masyarakat luas dapat mengadaptasi, mengembangkan, dan memanfaatkannya kembali secara mandiri di wilayah lain."
        }
    ];

  return (
    <section className="relative w-full h-fit dark:bg-primary-dark pb-18 md:py-18 px-10 md:px-30">
      
        {/* Header FAQ */}
        <div data-aos="zoom-in" className="flex flex-col justify-center items-center mb-5 w-full h-fit">
            <div className="flex justify-center gap-1 transition-transform duration-500 hover:scale-105">
                <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div>
                <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div>
            </div>
            <h1 className="mb-5 text-center font-black text-secondary-text text-4xl md:text-5xl uppercase transition-transform duration-500 hover:scale-105">
            FREQUENTLY <span className="text-primary-text dark:text-white">ASKED QUESTIONS</span>
            </h1>
            <p className="mb-3 text-center text-sm md:text-xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-103">
            "Temukan jawaban atas pertanyaan umum mengenai program pemberdayaan <br className="hidden md:block" />masyarakat oleh BEM UNSRI 2025."
            </p>
            <div className="h-1.5 w-3 mb-3 bg-[#D4E94E] mt-2 rounded-full"></div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:px-5">
            {/* Accordion Container */}
            <div data-aos="fade-right" className="max-w-4xl mx-auto space-y-4">
                {faqData.map((item, index) => (
                <div 
                    key={index}
                    className="group bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.10)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.3)] rounded-2xl transition-all duration-300 overflow-hidden"
                >
                    {/* Question Header */}
                    <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-all cursor-pointer"
                    >
                    <span className={`text-sm md:text-md font-extrabold tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-secondary-text dark:text-[#D4E94E]' : 'text-primary-text dark:text-white'}`}>
                        {item.question}
                    </span>
                    <div className={`p-2 rounded-full transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-[#D4E94E] text-slate-900' : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white'}`}>
                        <IoChevronDown size={20} />
                    </div>
                    </button>

                    {/* Answer Content */}
                    <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                    <div className="p-6 pt-2 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-100 dark:border-white/5">
                        {item.answer}
                    </div>
                    </div>
                </div>
                ))}
            </div>
            
            
            <img data-aos="fade-left" src="/assets/faq.svg" alt="" className="w-lg mb-3" />
        </div>
        </section>
  );
};

export default Faq;