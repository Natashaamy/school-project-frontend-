import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../axiosInstance";

export default function SignUp() {
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/register", formData);
            toast.success("Account created successfully! Please login.");
            navigate("/login");
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-500 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}
