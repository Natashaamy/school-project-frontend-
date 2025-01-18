import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-12 px-8">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">

                {/* Left Section (Copyright) */}
                <p className="text-center sm:text-left text-lg font-medium">
                    &copy; 2025 DentalCare. All rights reserved.
                </p>

                {/* Right Section (Social Media Links) */}
                <div className="flex space-x-6 justify-center sm:justify-end items-center">
                    <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out flex items-center space-x-2">
                        <FaFacebookF className="text-2xl" />
                        <span className="hidden sm:inline-block">Facebook</span>
                    </a>
                    <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out flex items-center space-x-2">
                        <FaTwitter className="text-2xl" />
                        <span className="hidden sm:inline-block">Twitter</span>
                    </a>
                    <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700 transition duration-300 ease-in-out flex items-center space-x-2">
                        <FaInstagram className="text-2xl" />
                        <span className="hidden sm:inline-block">Instagram</span>
                    </a>
                </div>
            </div>

            {/* Bottom Section (Quick Links) */}
            <div className="mt-8 border-t pt-6 text-center">
                <p className="text-sm text-gray-500">
                    <a href="#privacy-policy" className="hover:text-blue-500 transition duration-300 ease-in-out">Privacy Policy</a> |
                    <a href="#terms-of-service" className="hover:text-blue-500 transition duration-300 ease-in-out"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
