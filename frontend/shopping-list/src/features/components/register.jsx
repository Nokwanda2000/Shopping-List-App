import React from 'react';
import Layout from './layout';
import Footer from './footer';
import { Link } from 'react-router-dom/dist';
function Register() {
  return (
    <>
    <Layout/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-sm p-8 space-y-8">
        <h2 className="text-2xl font-bold text-center text-gray-900">Create an Account</h2>
        <p className="text-gray-600 text-center">Join us for the best shopping experience!</p>
        
        <form className="space-y-6">
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
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center">
          <span className="border-t border-gray-300 w-full"></span>
          <span className="px-2 text-sm text-gray-500">or</span>
          <span className="border-t border-gray-300 w-full"></span>
        </div>

        {/* Social Login */}
        {/* <div className="flex justify-center space-x-4">
          <button
            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition duration-300"
          >
            <img src="/icons/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button
            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition duration-300"
          >
            <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
            Facebook
          </button>
        </div> */}

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}

          <Link to='/loginpage'>
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
          </Link>
        
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Register;
