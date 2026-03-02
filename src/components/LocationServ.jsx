import React from 'react';

const LocationServ = () => {
    return (
    <div>
        <div>
            {/* Lokasi Pengabdian */}
            <div className="lokasi-pengabdian w-screen h-fit md:h-screen md:pt-28 px-10 md:px-30">
                <div data-aos="zoom-in" className="box-1-lokasi flex flex-col justify-center items-center w-full h-fit">
                    <div className="flex justify-center gap-1 transition-transform duration-500 hover:scale-103">
                        <div className="h-1.5 w-2 mb-3 bg-green-500 mt-2 rounded-full"></div>
                        <div className="h-1.5 w-7 mb-3 bg-green-500 mt-2 rounded-full"></div> 
                    </div>
                    <h1 className="mb-5 text-center font-black text-primary-text dark:text-white text-4xl md:text-5xl transition-transform duration-500 hover:scale-103">LOCATION <span className="text-secondary-text">SERVICE</span></h1>
                    <p className="mb-3 text-center text-sm md:text-xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-103">Informasi mengenai lokasi pelaksanaan kegiatan pemberdayaan masyarakat sebagai <br /> bentuk kontribusi nyata kami di wilayah sasaran.</p>
                <div className="h-1.5 w-3 mb-3 bg-[#D4E94E] mt-2 rounded-full"></div>
                </div>
                <div className="box-2-lokasi flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 md:px-10 w-full h-fit">
                    <div data-aos="fade-right" className="w-full md:w-1/2">
                        <div className="md:w-full w-full h-full transition-transform duration-500 hover:scale-105">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31841.324681628743!2d103.29399835076613!3d-3.9863356431876764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e37684c922195c3%3A0x4304aef944373e32!2sPadjarbulan%2C%20Talang%20Padang%20Tinggi%2C%20Kec.%20Pajar%20Bulan%2C%20Kabupaten%20Lahat%2C%20Sumatera%20Selatan!5e0!3m2!1sid!2sid!4v1772085649173!5m2!1sid!2sid" 
                        
                            style={{ border: 0 }} 
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-50 md:h-90 rounded-2xl dark:invert-[0.9] shadow-[1px_1px_15px_rgba(0,0,0,0.25)] transition-all duration-300">
                            </iframe>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="w-full md:w-1/2">
                        <div className="md:p-4 md:w-full h-full bg-white/45 backdrop-blur-[15px] border border-white shadow-[1px_1px_15px_rgba(0,0,0,0.25)] dark:shadow-[1px_1px_15px_rgba(255,255,255,0.5)] rounded-2xl text-primary-text dark:text-white transition-transform duration-500 hover:scale-105">
                                <table className="w-full border border-gray-200 dark:border-gray-700">
                                    <tbody>
                                    <tr>
                                        <td className="p-4 font-extrabold text-md md:text-lg border-hidden dark:text-white">
                                            Batas Wilayah :
                                        </td>
                                        <td className="px-4 py-2 border-hidden dark:text-white">

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-8 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            UTARA <br />
                                            Kecamatan Jarai
                                            </td>
                                        <td className="px-4 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            SELATAN <br />
                                            Kota Pagaralam
                                            </td>
                                    </tr>

                                    <tr>
                                        <td className="px-8 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            TIMUR <br />
                                            Kecamatan Sukamerindu
                                        </td>
                                        <td className="px-4 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            BARAT <br />
                                            Kecamatan Jarai
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-extrabold text-md md:text-lg border-hidden dark:text-white">
                                            Luas Desa :
                                        </td>
                                        <td className="px-4 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            3,37 km²
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-extrabold text-md md:text-lg border-hidden dark:text-white">
                                            Jumlah Penduduk :
                                        </td>
                                        <td className="px-4 py-2 text-sm md:text-lg border-hidden dark:text-white">
                                            816 Jiwa(Th. 2023)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <img src="/assets/element-blurr.webp" alt="" loading="lazy" className="absolute left-60 md:left-15 mt-165 md:mt-100 w-20 animate-spin [animation-duration:30s] origin-center" />
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default LocationServ;