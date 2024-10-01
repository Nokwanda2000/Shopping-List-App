import React, { useState } from 'react';
import Layout from './layout';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom/dist';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '/src/redux/slices/authSlice'; 

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Dispatch register action
    dispatch(register(formData));
  };

  if (success) {
    navigate('/loginpage'); // Navigate to login after successful registration
  }

  return (
    <>
      <Layout />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-sm p-8 space-y-8">
          <h2 className="text-2xl font-bold text-center text-gray-900">Create an Account</h2>
          <p className="text-gray-600 text-center">Join us for the best shopping experience!</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="John Doe"
                onChange={handleChange}
                value={formData.name}
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="you@example.com"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="••••••••"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="••••••••"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          {/* Display Error Message */}
          {error && <p className="text-red-500 mt-4">{error}</p>}

          {/* Divider */}
          <div className="flex items-center justify-center">
            <span className="border-t border-gray-300 w-full"></span>
            <span className="px-2 text-sm text-gray-500">or</span>
            <span className="border-t border-gray-300 w-full"></span>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to='/loginpage' className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
