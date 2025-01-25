import React, { useState } from 'react';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        usertype: '',
        joinDate: '',
        status: 'Pending',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="w-[30vw] mx-auto mt-10 p-6 bg-blue-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">User Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="usertype" className="text-sm font-medium text-gray-700">User Type:</label>
                    <select
                        id="usertype"
                        name="usertype"
                        value={formData.usertype}
                        onChange={handleChange}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select User Type</option>
                        <option value="admin">Admin</option>
                        <option value="member">Member</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="joinDate" className="text-sm font-medium text-gray-700">Join Date:</label>
                    <input
                        type="date"
                        id="joinDate"
                        name="joinDate"
                        value={formData.joinDate}
                        onChange={handleChange}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Status:</span>
                    <span className="text-sm font-semibold text-blue-600">{formData.status}</span>
                </div>

                <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;
