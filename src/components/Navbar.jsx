import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6 sm:px-8">
                <h1 className="text-2xl font-bold text-gray-800">DentalCare</h1>

                {/* Desktop Navigation Links */}
                <div className="lg:flex space-x-8 hidden items-center">
                    <a href="#home" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Home</a>
                    <a href="#services" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Services</a>
                    <a href="#testimonials" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Testimonials</a>
                    <a href="#contact" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Contact</a>
                    <a href="#book" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200">Book Appointment</a>
                </div>

                {/* Mobile Navigation Button */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Only visible when menuOpen state is true */}
            {menuOpen && (
                <div className="lg:hidden bg-white shadow-lg py-4 px-6 space-y-4">
                    <a href="#home" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Home</a>
                    <a href="#services" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Services</a>
                    <a href="#testimonials" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Testimonials</a>
                    <a href="#contact" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Contact</a>
                    <a href="#book" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200 block text-center">Book Appointment</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
