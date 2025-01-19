import React from 'react';
import { FaSmileBeam } from 'react-icons/fa';

const Services = () => {
    return (
        <section id="services" className="bg-white py-16 px-6 sm:px-8 max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
                Our Premium Dental Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {/* Teeth Cleaning Service */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                    <div className="text-center mb-6">
                        <img
                            src="https://img.icons8.com/ios/452/tooth.png"
                            alt="Teeth Cleaning Icon"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Teeth Cleaning</h3>
                    </div>
                    <p className="text-gray-600">Routine cleaning for healthy teeth and gums. We use state-of-the-art equipment for the best results.</p>
                </div>

                {/* Cosmetic Dentistry Service */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                    <div className="text-center mb-6">
                        <FaSmileBeam className="w-16 h-16 mx-auto mb-4 text-gray-800" /> {/* FontAwesome Icon */}
                        <h3 className="text-xl font-semibold text-gray-800">Cosmetic Dentistry</h3>
                    </div>
                    <p className="text-gray-600">Enhance your smile with procedures like teeth whitening, veneers, and more for a confident, radiant appearance.</p>
                </div>

                {/* Implants Service */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                    <div className="text-center mb-6">
                        <img
                            src="https://img.icons8.com/ios/452/dental-implant.png"
                            alt="Implants Icon"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Implants</h3>
                    </div>
                    <p className="text-gray-600">Permanent solutions for missing teeth that look and function like natural teeth. Restoring your smile and confidence.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
