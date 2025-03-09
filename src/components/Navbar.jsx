import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6 sm:px-8">
                <h1 className="text-2xl font-bold text-gray-800">DentalCare</h1>

                <div className="lg:flex space-x-8 hidden items-center">
                    <a href="/" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Home</a>
                    <a href="#services" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Services</a>
                    <a href="#testimonials" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Testimonials</a>
                    <a href="#contact" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Contact</a>
                    <a href="#book" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200">Book Appointment</a>

                    {user?.role === "admin" && (
                        <a href="/bookings" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Appointments</a>
                    )}

                    {!user ? (
                        <a href="/login" className="text-gray-800 hover:text-blue-500 transition-colors duration-200">Login</a>
                    ) : (
                        <button onClick={handleLogout} className="text-red-500 hover:text-red-700 transition-colors duration-200">
                            Logout
                        </button>
                    )}
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden bg-white shadow-lg py-4 px-6 space-y-4">
                    <a href="/" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Home</a>
                    <a href="#services" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Services</a>
                    <a href="#testimonials" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Testimonials</a>
                    <a href="#contact" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Contact</a>
                    <a href="#book" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200 block text-center">Book Appointment</a>

                    {user?.role === "admin" && (
                        <a href="/appointments" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Appointments</a>
                    )}

                    {!user ? (
                        <a href="/login" className="text-gray-800 hover:text-blue-500 transition-colors duration-200 block">Login</a>
                    ) : (
                        <button onClick={handleLogout} className="text-red-500 hover:text-red-700 transition-colors duration-200 block">
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
