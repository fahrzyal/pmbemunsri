import React, { useState } from 'react';
import { IoCloseOutline, IoLogoInstagram, IoArrowDownCircle } from "react-icons/io5";

const Profilepage = () => {
  const divisions = ["Tim Dosen", "Inti", "Program", "Media", "Humas", "Logistik", "Riset"];

  const memberData = [
    { id: 1, div: "Tim Dosen", name: "Dr. Zulhidayat, S.H., M.H.", role: "Ketua Dosen", ig: "Instagram", quote: "Dosen Universitas Sriwijaya", src: "/assets/Profile/22.webp" },
    { id: 2, div: "Tim Dosen", name: "Prof. Dra. Dr. P L Hariani. M.Si", role: "Anggota Dosen", ig: "Instagram", quote: "Dosen Universitas Sriwijaya", src: "/assets/Profile/24.webp" },
    { id: 3, div: "Tim Dosen", name: "Aditya Putra S.Kom., M.T.", role: "Anggota Dosen", ig: "Instagram", quote: "Dosen Universitas Sriwijaya", src: "/assets/Profile/23.webp" },
    
    { id: 4, div: "Inti", name: "Bagus Satrio", role: "Ketua Tim", ig: "@bagus.satrio03", quote: "Program yang memberikan arti dari sebuah perjuangan, kebersamaan, dan kebermanfaatan untuk masyarakat.", src: "/assets/Profile/19.webp" },
    { id: 5, div: "Inti", name: "Abelia A", role: "Sekretaris", ig: "@abeliyagsn_", quote: "PM BEM bukan sekedar program untuk memberdayakan masyarakat mitra, tetapi juga ruang yang menguatkan kita sebagai anggota. Di sini, perbedaan yang kita bawa justru menjadi alasan kita bisa saling menerima, belajar, dan melengkapi satu sama lain. Bagi Saya PM BEM tidak sekedar membangun RUMAH tetapi kita lah RUMAH itu.", src: "/assets/Profile/17.webp" },
    { id: 6, div: "Inti", name: "Riri R. S", role: "Sekretaris", ig: "@ririzsn", quote: "Kecil dalam kata, besar dalam aksi nyata.", src: "/assets/Profile/18.webp" },
    { id: 7, div: "Inti", name: "Nahida Z", role: "Bendahara", ig: "@nahidaa_ziddah", quote: "PM BEM sangat berkesan terutama kekeluargaannya, senang menjadi bagian dari pm BEM UNSRI 2025", src: "/assets/Profile/21.webp" },
    
    { id: 8, div: "Program", name: "Arifin I.S.S", role: "Program", ig: "@arifin_ilham.95", quote: "Haiii aku ipin, partner pm kalian dari masa lalu, Jika aku harus mengulangi hidup sepuluh ribu kali, aku tidak akan menyesal mengulangi nya bersama kalian.", src: "/assets/Profile/7.webp" },
    { id: 9, div: "Program", name: "Trio S", role: "Program", ig: "@triosantana122", quote: "Dedikasi adalah kunci untuk membuka pintu perubahan.", src: "/assets/Profile/8.webp" },
    { id: 10, div: "Program", name: "A. Rizki A. S", role: "Program", ig: "@akbrb._", quote: "Awalnya saya coba coba tapi berakhir nyaman. baik dari segi team, warga dan lingkungan yang bener bener membuat saya belajar bahwa dunia itu tidak hanya di dalam ruangan sempit ditemani meja dan kursi tapi dunia itu adalah tempat tidak terbatas dengan milyaran ilmu yang hidup di sekitar kita.", src: "/assets/Profile/9.webp" },
    { id: 11, div: "Program", name: "Rahmat F. Z", role: "Program", ig: "@fauwaz.rahmat", quote: "Membangun masa depan mulai dari apa yang kita kerjakan hari ini.", src: "/assets/Profile/10.webp" },

    { id: 12, div: "Media", name: "Meilieza", role: "Media", ig: "@melizameimei21__", quote: "Sendirian kita bisa melakukan sedikit, bersama-sama kita bisa melakukan banyak hal.", src: "/assets/Profile/1.webp" },
    { id: 13, div: "Media", name: "Nazwa A. P", role: "Media", ig: "@nzwlprdta_", quote: "PM BEM bukan sekadar kegiatan, tapi tempat di mana yang asing menjadi keluarga dan kenangan indah tercipta untuk selamanya.", src: "/assets/Profile/2.webp" },
    { id: 14, div: "Media", name: "Ahmad D. S", role: "Media", ig: "@Adzaki.s", quote: "Sebaik-baiknya manusia adalah yang bermanfaat bagi orang lain.", src: "/assets/Profile/3.webp" },

    { id: 14, div: "Humas", name: "Cikal Z. J", role: "Humas", ig: "@czlfj", quote: "PM-BEM ini menjadi salah satu momen yang sangat berarti, karena melalui program ini saya memiliki kesempatan untuk menerapkan tri dharma perguruan tinggi yakni pengabdian kepada masyarakat. Pelaksanaan program ini juga meningkatkan banyak aspek dalam diri saya sebagai seorang manusia, Program ini bukan sekedar wadah untuk membangun inovasi bagi masyarakat namun juga menjadi wadah untuk membangun diri saya.", src: "/assets/Profile/4.webp" },
    { id: 15, div: "Humas", name: "Rahma Ayu Sakila", role: "Humas", ig: "@instagram", quote: "Bukan tentang siapa yang tercepat, tapi siapa yang paling bermanfaat.", src: "/assets/Profile/5.webp" },
    { id: 15, div: "Humas", name: "Sari R. N", role: "Humas", ig: "@sshhyydooll", quote: "kegiatan yang sangat berkesan bersama kalian, di kegiatan ini kita menjadi keluarga kecil dengan semangat juang, rasa cinta, dan kepedulian terhadap sesama.", src: "/assets/Profile/6.webp" },

    { id: 15, div: "Logistik", name: "Amoi S", role: "Logistik", ig: "@amoysulastri2806", quote: "Jadilah versi terbaik dari dirimu sendiri setiap harinya.", src: "/assets/Profile/11.webp" },
    { id: 16, div: "Logistik", name: "M. Rizky Taufik M. H", role: "Logistik", ig: "@instagram", quote: "Sederhana dalam sikap, kaya dalam karya.", src: "/assets/Profile/12.webp" },
    { id: 17, div: "Logistik", name: "Fizi N", role: "Logistik", ig: "@fizi_nopi_dinata", quote: "Hal baru, menyenangkan dan juga menambah pengalaman. Program yang mengajarkan banyak aksi bukan teori", src: "/assets/Profile/13.webp" },

    { id: 18, div: "Riset", name: "Samuel P. S", role: "Riset", ig: "@instagram", quote: "Hidup adalah tentang memberi warna pada setiap langkah.", src: "/assets/Profile/14.webp" },
    { id: 19, div: "Riset", name: "Winda A. P", role: "Riset", ig: "@hi_windaayu", quote: "Membangun kemandirian melalui solusi yang cerdas dan tepat guna.", src: "/assets/Profile/15.webp" },
    { id: 20, div: "Riset", name: "M. Fathir A", role: "Riset", ig: "@fathirarff_", quote: "Kegiatannya meninggalkan kesan mendalam karena mampu menyatukan orang-orang asing menjadi keluarga dalam waktu singkat, dan pesanku semoga kegiatan seperti ini terus dijalankan dengan semangat kebersamaan agar lebih banyak hati merasakan pulang di tempat yang sama.", src: "/assets/Profile/16.webp" },
  ];

  const [activeDiv, setActiveDiv] = useState("Inti");
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = memberData.filter(m => m.div === activeDiv);

  return (
    <div>
    <section data-aos="fade-down" className="relative w-full h-fit dark:bg-primary-dark pt-32 px-10 md:px-30 transition-colors duration-300">
        {/* Header */}
        <div className="box-1-lokasi flex flex-col justify-center items-center w-full h-fit">
            <img src="/assets/member.svg" alt="" className="w-xs md:w-lg" />
            <div className="flex justify-center gap-1 transition-transform duration-500 hover:scale-103">
                <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div>
                <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div> 
            </div>
            <h1 className="mb-5 text-center font-black text-primary-text dark:text-white text-4xl md:text-5xl transition-transform duration-500 hover:scale-103">OUR <span className="text-secondary-text italic">MEMBER</span></h1>
            <p className="mb-3 text-center text-sm md:text-xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-103">"Yuk, kenalan dengan wajah-wajah inspiratif di balik setiap kegiatan dan pencapaian, yang bersama-sama berkolaborasi, <br /> berbagi ide, dan berkontribusi untuk menghadirkan dampak positif bagi masyarakat."</p>
            <a target='' href="#content-profile" className="text-[#D4E94E]"><IoArrowDownCircle className="mt-7 text-7xl animate-bounce" /></a>
            <div className="h-1.5 w-3 mb-3 bg-[#D4E94E] mt-2 rounded-full"></div>

            <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="hidden md:block absolute left-85 md:left-100 mt-35 md:-mt-130 w-10 md:w-15 animate-spin [animation-duration:30s] origin-center" />
            <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="hidden md:block absolute left-0 md:left-270 -mt-50 md:mt-25 w-15 md:w-20 animate-spin [animation-duration:40s] origin-center" />
        </div>
    </section>

    <section className="relative w-full min-h-screen dark:bg-primary-dark pb-20 px-6 md:px-30 transition-colors duration-300">
        <div id='content-profile' className="pt-10 md:pt-30">
        {/* Division Switcher */}
            <div data-aos="fade-down" className="flex flex-wrap justify-center gap-3 mb-10">
                {divisions.map((div) => (
                <button
                    key={div}
                    onClick={() => setActiveDiv(div)}
                    className={`px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-500 border-2 cursor-pointer
                    ${activeDiv === div 
                        ? "bg-linear-to-r from-[#22C55E] to-[#4ADE80] border-white text-white shadow-xl shadow-secondary-text/20 scale-110" 
                        : "border-slate-100 dark:border-slate-800 text-slate-400 hover:border-secondary-text hover:text-secondary-text"}`}
                >
                    {div}
                </button>
                ))}
            </div>

            {/* GRID MEMBER (GANTI SWIPER KE GRID) */}
            <div data-aos="fade-up" className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredMembers.map((member) => (
                <div 
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="group relative cursor-pointer p-2 aspect-4/5 overflow-hidden rounded-3xl bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.20)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.3)] transition-all duration-700 hover:-translate-y-3"
                >
                    <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img 
                        src={member.src} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                    />
                    </div>

                    {/* Overlay Info Singkat */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                        <span className="text-[#D4E94E] text-[10px] font-black uppercase tracking-[0.3em] mb-1">{member.role}</span>
                        <h3 className="text-white text-xl font-black uppercase leading-none">{member.name}</h3>
                    </div>
                </div>
                ))}
            </div>

            {/* Modal Detail Member (Sama Seperti Sebelumnya) */}
            {selectedMember && (
                <div className="fixed inset-0 z-10000 flex items-center justify-center p-6 bg-white/45 backdrop-blur-[5px]">
                    <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                        
                        <button 
                        onClick={() => setSelectedMember(null)}
                        className="absolute top-8 right-8 z-10 p-2 bg-slate-100 dark:bg-white/10 rounded-full hover:rotate-90 transition-all duration-500 dark:text-white cursor-pointer"
                        >
                        <IoCloseOutline size={30} />
                        </button>

                        {/* Kiri: Foto */}
                        <div className="w-full md:w-1/2 h-96 md:h-auto">
                        <img src={selectedMember.src} alt={selectedMember.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Kanan: Info */}
                        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                        <span className="text-secondary-text font-black uppercase tracking-[0.4em] text-[10px] mb-3">
                            {selectedMember.div} Division
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-primary-text dark:text-white uppercase leading-none mb-2">
                            {selectedMember.name}
                        </h2>
                        <p className="text-slate-400 font-bold mb-10 uppercase tracking-[0.2em] text-xs">
                            {selectedMember.role}
                        </p>
                        
                        <div className="relative mb-10">
                            <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed border-l-4 border-[#D4E94E] pl-6">
                            "{selectedMember.quote}"
                            </p>
                        </div>

                        <a 
                            href={`https://instagram.com/${selectedMember.ig.replace('@', '')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-5 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white dark:bg-[#D4E94E] dark:text-slate-900 rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#D4E94E]/10"
                        >
                            <IoLogoInstagram size={22} />
                            Instagram
                        </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </section>
    </div>
  );
};

export default Profilepage;