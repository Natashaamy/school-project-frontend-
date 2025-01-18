import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-white py-16 px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">What Our Patients Say</h2>
            <div className="flex space-x-4 overflow-x-auto mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                    <p className="text-lg text-gray-600 italic">"Best dental experience I've ever had! Highly recommend."</p>
                    <p className="mt-4 font-semibold text-gray-800">John Doe</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                    <p className="text-lg text-gray-600 italic">"Professional staff and excellent results."</p>
                    <p className="mt-4 font-semibold text-gray-800">Jane Smith</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg w-80">
                    <p className="text-lg text-gray-600 italic">"A caring team that makes you feel comfortable."</p>
                    <p className="mt-4 font-semibold text-gray-800">Mike Johnson</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
