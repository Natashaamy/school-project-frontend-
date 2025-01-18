import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4 px-8 sticky top-0 z-10">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">DentalCare</h1>
                <div className="lg:flex space-x-8 hidden">
                    <a href="#home" className="hover:text-blue-500">Home</a>
                    <a href="#services" className="hover:text-blue-500">Services</a>
                    <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                    <a href="#book" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">Book Appointment</a>
                </div>
                <div className="lg:hidden">
                    <button className="text-white">☰</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
