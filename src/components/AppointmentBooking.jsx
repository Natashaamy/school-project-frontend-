import React, { useState } from 'react';

const AppointmentBooking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });

    const [loading, setLoading] = useState(false); // Loading state
    const [confirmationMessage, setConfirmationMessage] = useState(''); // Confirmation message

    // handleChange function to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // handleSubmit function to submit form data
    const handleSubmit = async (e) => {
        // prevent realoding the page
        e.preventDefault();

        setLoading(true); // Set loading to true when submitting
        setConfirmationMessage(''); // Reset confirmation message on new submission

        // API request (POST) to submit form data
        const response = await fetch('https://school-project-pg6q.onrender.com/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setLoading(false); // Set loading to false after submission

        // Check if the request was successful
        if (response.ok) {
            setConfirmationMessage('Appointment successfully booked!');
            // Reset form data after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                message: ''
            });
        } else {
            setConfirmationMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="book" className="bg-white py-16 px-8">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between space-x-8">
                {/* Form Section (Left Side) */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Book an Appointment</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message (optional)"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition w-full"
                                disabled={loading} // Disable the button while loading
                            >
                                {loading ? 'Booking...' : 'Confirm Appointment'}
                            </button>
                        </div>
                    </form>

                    {/* Show confirmation message after submission */}
                    {confirmationMessage && (
                        <div className="mt-6 text-center text-lg font-semibold text-gray-800">
                            {confirmationMessage}
                        </div>
                    )}
                </div>

                {/* Image Section (Right Side) */}
                <div className="hidden lg:block w-full lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGFsfGVufDB8fDB8fHww"
                        alt="Dental Appointment"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AppointmentBooking;
