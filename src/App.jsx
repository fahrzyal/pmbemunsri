import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage"
import Galeripage from "./pages/Galeripage";
import Homedrypage from "./pages/Homedrypage";
import Pengolahanlimbah from "./pages/Pengolahanlimbahpage";
import Profilepage from "./pages/Profilepage";

// AOS
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
	AOS.init({
		duration: 1000,
		once: false,
	});
	}, []);

	//TODO: Darkmode state
	const [isDarkMode, setIsDarkMode] = React.useState(false);
	
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return <>
	<div className={isDarkMode ? "dark" : ""}>
		{/* Scroll to Top */}
		<ScrollToTop />

		{/* Navbar */}
		<Navbar 
			toggleDarkMode={toggleDarkMode} 
			isDarkMode={isDarkMode} 
		/>	
		
		{/* Content */}
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about-us" element={<Aboutpage />} />
			<Route path="/profile" element={<Profilepage />} />
			<Route path="/home-dry-coffee" element={<Homedrypage />} />
			<Route path="/pengolahan-limbah" element={<Pengolahanlimbah />} />
			<Route path="/gallery" element={<Galeripage />} />
		</Routes>

		{/* Footer */}
		<Footer />	
	</div>
	</>
}

AOS.init();

export default App;
