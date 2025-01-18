import React from 'react';

const Home = () => {
    return (
        <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">Welcome to DentalCare</h1>
                <p className="mt-4 text-lg">Expert dental services tailored to your needs.</p>
                <a href="#book" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition mt-6 inline-block">Book Your Appointment</a>
            </div>
        </section>
    );
};

export default Home;
