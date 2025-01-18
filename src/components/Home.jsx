import React from 'react';

const Home = () => {
    return (
        <div className="bg-white">
            <section id="home" className="relative max-w-screen-xl mx-auto px-[5%] bg-white h-fit py-12 flex items-center justify-between sm:px-8">
                <div className="w-full lg:w-1/2 text-left text-gray-800">
                    <p className="text-[32px] sm:text-5xl md:text-[32px] font-semibold mb-4">
                        Welcome to DentalCare – Your Trusted Partner for a Beautiful Smile
                    </p>
                    <p className="text-[14px] sm:text-[14px] mb-4">
                        At DentalCare, we provide expert dental services tailored to your unique needs. Whether you're coming for a routine cleaning or more advanced treatments, we ensure that your smile shines brightly and your experience is stress-free.
                    </p>
                    <p className="text-lg sm:text-[14px] mb-6">
                        Our highly skilled team of dental professionals offers a full range of services, from preventive care to cosmetic dentistry, all in a comfortable and welcoming environment.
                    </p>
                    <a
                        href="#book"
                        className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Book Your Appointment
                    </a>
                </div>

                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGFsfGVufDB8fDB8fHww"
                        alt="Dental Care"
                        className="w-full h-full object-cover rounded-md shadow-lg"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
