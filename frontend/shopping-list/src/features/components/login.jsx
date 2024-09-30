import React from 'react';
import { Link , useNavigate } from 'react-router-dom/dist';
import { useState } from 'react';

function Login() {  
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);
    
        try {
          const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setMessage(data.message);
            setFormData({ email: '', password: '' });
            // Optionally navigate to another page after successful login
            navigate('/listspage'); 
            alert('Successfully login')
          } else {
            setError(data.message || 'Login failed.');
          }
        } catch (err) {
          console.error('Error:', err);
          setError('An error occurred. Please try again.');
        }
      };
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-sm p-8 space-y-8">
        <h2 className="text-2xl font-bold text-center text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 text-center">Log in to your account</p>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
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
          
          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Log In
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

        {/* Display success or error message */}
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to='/registerpage'>
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
          </Link>
        
        </p>
      </div>
    </div>
  );
}

export default Login;
