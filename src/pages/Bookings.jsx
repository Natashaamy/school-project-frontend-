import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [currentBooking, setCurrentBooking] = useState(null);
    const [updateFormData, setUpdateFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);

    // Fetch bookings from the API
    const fetchBookings = async () => {
        try {
            setLoading(true);
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

    useEffect(() => {
        fetchBookings();
    }, []);

    // Handle delete booking
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
            try {
                setIsDeleting(true);
                setDeleteId(id);
                const response = await fetch(`https://school-project-pg6q.onrender.com/api/bookings/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to delete booking');
                }

                // Remove the deleted booking from state
                setBookings(bookings.filter(booking => booking._id !== id));
            } catch (err) {
                setError('Error deleting booking. Please try again.');
            } finally {
                setIsDeleting(false);
                setDeleteId(null);
            }
        }
    };

    // Open update modal and set current booking
    const handleUpdateClick = (booking) => {
        setCurrentBooking(booking);

        // Format date for the date input (YYYY-MM-DD)
        const bookingDate = new Date(booking.date);
        const formattedDate = bookingDate.toISOString().split('T')[0];

        setUpdateFormData({
            name: booking.name || '',
            email: booking.email || '',
            phone: booking.phone || '',
            date: formattedDate || '',
            time: booking.time || '',
            message: booking.message || ''
        });

        setIsUpdateModalOpen(true);
    };

    // Handle update form input changes
    const handleUpdateInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Submit update form
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        if (!currentBooking) return;

        try {
            setIsUpdating(true);
            const response = await fetch(`https://school-project-pg6q.onrender.com/api/bookings/${currentBooking._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateFormData)
            });

            if (!response.ok) {
                throw new Error('Failed to update booking');
            }

            const updatedBooking = await response.json();

            // Update the bookings state with the updated booking
            setBookings(bookings.map(booking =>
                booking._id === currentBooking._id ? updatedBooking : booking
            ));

            // Close the modal
            setIsUpdateModalOpen(false);
            setCurrentBooking(null);
        } catch (err) {
            setError('Error updating booking. Please try again.');
        } finally {
            setIsUpdating(false);
        }
    };

    // Handling loading state
    if (loading && bookings.length === 0) {
        return (
            <div className="flex justify-center items-center py-16">
                <p>Loading bookings...</p>
            </div>
        );
    }

    // Handling error state
    if (error && bookings.length === 0) {
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

                    {/* Show any error messages */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
                            {error}
                        </div>
                    )}

                    {/* Table for larger screens */}
                    <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Email</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Phone</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Date</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Time</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Message</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
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
                                        <td className="px-4 py-2 text-sm text-gray-600">
                                            {booking.message && booking.message.length > 50
                                                ? `${booking.message.substring(0, 50)}...`
                                                : booking.message}
                                        </td>
                                        <td className="px-4 py-2 text-sm flex space-x-2">
                                            <button
                                                onClick={() => handleUpdateClick(booking)}
                                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(booking._id)}
                                                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                                                disabled={isDeleting && deleteId === booking._id}
                                            >
                                                {isDeleting && deleteId === booking._id ? 'Deleting...' : 'Delete'}
                                            </button>
                                        </td>
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
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleUpdateClick(booking)}
                                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(booking._id)}
                                                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                                                disabled={isDeleting && deleteId === booking._id}
                                            >
                                                {isDeleting && deleteId === booking._id ? 'Deleting...' : 'Delete'}
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Date:</span> {new Date(booking.date).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </p>
                                    <p className="text-gray-600"><span className="font-medium">Time:</span> {booking.time}</p>
                                    <p className="text-gray-600"><span className="font-medium">Email:</span> {booking.email}</p>
                                    <p className="text-gray-600"><span className="font-medium">Phone:</span> {booking.phone}</p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Message:</span> {booking.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No bookings message */}
                    {bookings.length === 0 && !loading && (
                        <div className="text-center py-6">
                            <p className="text-gray-500">No bookings found.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Update Modal */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Update Booking</h3>
                            <button
                                onClick={() => setIsUpdateModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleUpdateSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={updateFormData.name}
                                        onChange={handleUpdateInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={updateFormData.email}
                                        onChange={handleUpdateInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={updateFormData.phone}
                                        onChange={handleUpdateInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={updateFormData.date}
                                        onChange={handleUpdateInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={updateFormData.time}
                                        onChange={handleUpdateInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={updateFormData.message}
                                        onChange={handleUpdateInputChange}
                                        rows="3"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsUpdateModalOpen(false)}
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                        disabled={isUpdating}
                                    >
                                        {isUpdating ? 'Updating...' : 'Update'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default BookingsPage;