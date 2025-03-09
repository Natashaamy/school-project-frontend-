import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiLogOut, FiUser, FiCalendar } from "react-icons/fi"; // Icons for better UX

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
        <nav className="bg-gradient-to-r from-blue-50 to-white shadow-sm sticky top-0 z-10">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6 sm:px-8">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-800">DentalCare</h1>

                {/* Desktop Menu */}
                <div className="lg:flex space-x-8 hidden items-center">
                    <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
                    <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
                    <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Testimonials</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>

                    {/* Book Appointment Button */}
                    <a
                        href="#book"
                        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2"
                    >
                        <FiCalendar className="inline-block" />
                        <span>Book Appointment</span>
                    </a>

                    {/* Admin Link */}
                    {user?.role === "admin" && (
                        <a href="/bookings" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Appointments</a>
                    )}

                    {/* Login/Logout */}
                    {!user ? (
                        <a
                            href="/login"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
                        >
                            <FiUser className="inline-block" />
                            <span>Login</span>
                        </a>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200 flex items-center space-x-2"
                        >
                            <FiLogOut className="inline-block" />
                            <span>Logout</span>
                        </button>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white shadow-lg py-4 px-6 space-y-4">
                    <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 block">Home</a>
                    <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 block">Services</a>
                    <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 block">Testimonials</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 block">Contact</a>

                    {/* Book Appointment Button */}
                    <a
                        href="#book"
                        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <FiCalendar className="inline-block" />
                        <span>Book Appointment</span>
                    </a>

                    {/* Admin Link */}
                    {user?.role === "admin" && (
                        <a href="/appointments" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 block">Appointments</a>
                    )}

                    {/* Login/Logout */}
                    {!user ? (
                        <a
                            href="/login"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            <FiUser className="inline-block" />
                            <span>Login</span>
                        </a>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200 flex items-center justify-center space-x-2 w-full"
                        >
                            <FiLogOut className="inline-block" />
                            <span>Logout</span>
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;