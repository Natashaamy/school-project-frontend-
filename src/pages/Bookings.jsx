import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch bookings from the API
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('https://school-project-pg6q.onrender.com/api/bookings');
                if (!response.ok) {
                    throw new Error('Failed to fetch bookings');
                }
                const data = await response.json();
                setBookings(data);
            } catch (err) {
                setError('Error fetching bookings. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    // Handling loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center py-16">
                <p>Loading bookings...</p>
            </div>
        );
    }

    // Handling error state
    if (error) {
        return (
            <div className="flex justify-center items-center py-16">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <section className="bg-white py-16 px-8">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Upcoming Appointments</h2>

                    {/* Table for larger screens */}
                    <div className="hidden sm:block">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Email</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Phone</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Date</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Time</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map(booking => (
                                    <tr key={booking._id} className="border-b">
                                        <td className="px-4 py-2 text-sm text-gray-800">{booking.name}</td>
                                        <td className="px-4 py-2 text-sm text-gray-600">{booking.email}</td>
                                        <td className="px-4 py-2 text-sm text-gray-600">{booking.phone}</td>
                                        <td className="px-4 py-2 text-sm text-gray-800">
                                            {new Date(booking.date).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-800">{booking.time}</td>
                                        <td className="px-4 py-2 text-sm text-gray-600">{booking.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Card View for smaller screens */}
                    <div className="sm:hidden grid grid-cols-1 gap-6">
                        {bookings.map(booking => (
                            <div key={booking._id} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-semibold text-gray-800">{booking.name}</h3>
                                        <p className="text-sm text-gray-500">{booking.date} at {booking.time}</p>
                                    </div>
                                    <p className="text-gray-600">Email: {booking.email}</p>
                                    <p className="text-gray-600">Phone: {booking.phone}</p>
                                    <p className="text-gray-600">Message: {booking.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BookingsPage;
