import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-gradient-to-r from-blue-50 to-teal-50 py-20 px-8">
            <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">What Our Patients Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-80 hover:scale-105 transition-all duration-300 ease-in-out">
                    <p className="text-lg text-gray-600 italic">"Best dental experience I've ever had! Highly recommend."</p>
                    <div className="mt-4 flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Placeholder for avatar */}
                        <p className="font-semibold text-gray-800">John Doe</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-80 hover:scale-105 transition-all duration-300 ease-in-out">
                    <p className="text-lg text-gray-600 italic">"Professional staff and excellent results."</p>
                    <div className="mt-4 flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Placeholder for avatar */}
                        <p className="font-semibold text-gray-800">Jane Smith</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-80 hover:scale-105 transition-all duration-300 ease-in-out">
                    <p className="text-lg text-gray-600 italic">"A caring team that makes you feel comfortable."</p>
                    <div className="mt-4 flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Placeholder for avatar */}
                        <p className="font-semibold text-gray-800">Mike Johnson</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
