import React from 'react';

const AppointmentBooking = () => {
    return (
        <section id="book" className="bg-gray-100 py-16 px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">Book an Appointment</h2>
            <form className="mt-8 max-w-2xl mx-auto space-y-6">
                <input type="text" placeholder="Your Name" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Your Email" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Your Phone" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition w-full">Confirm Appointment</button>
            </form>
        </section>
    );
};

export default AppointmentBooking;
