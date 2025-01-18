import React from 'react';

const Services = () => {
    return (
        <section id="services" className="bg-white py-16 px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-800">Teeth Cleaning</h3>
                    <p className="text-gray-600 mt-2">Routine cleaning for healthy teeth and gums.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-800">Cosmetic Dentistry</h3>
                    <p className="text-gray-600 mt-2">Enhance your smile with cosmetic procedures.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-800">Implants</h3>
                    <p className="text-gray-600 mt-2">Permanent solutions for missing teeth.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
