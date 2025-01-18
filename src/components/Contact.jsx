import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 py-16 px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">Contact Us</h2>
            <div className="mt-8 flex justify-center space-x-8">
                <div className="space-y-4">
                    <p className="text-xl text-gray-800">Address: 123 Dental St, City, Country</p>
                    <p className="text-xl text-gray-800">Phone: (123) 456-7890</p>
                    <p className="text-xl text-gray-800">Email: info@dentalcare.com</p>
                </div>
                <div className="w-1/2">
                    <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300" className="rounded-lg"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
