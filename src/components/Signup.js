import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, for example, send data to backend
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset the form after submission
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex w-screen flex-col justify-center items-center sm:mt-10 md:mt-20 ">
            <div className="w-full sm:w-3/5 lg:w-2/3 xl:w-3/5 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-bold mb-2">Signup</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="px-6 pt-2">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full mb-2 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="px-6 pt-2">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full mb-2 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <p className='mx-6 text-gray-400 py-2'>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>

                    <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold mb-4 py-2 mt-2 px-3 mx-6 border border-gray-400 rounded shadow">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
