import React from 'react';


function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-2xl font-bold">Drip</h2>
            <p className="text-gray-400">Your one-stop for your shopping list.</p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/about" className="text-gray-400 hover:text-gray-200">About Us</a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-gray-200">Shop</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-gray-200">Contact</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-gray-200">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
            <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200>Facebook icons created by Freepik - Flaticon" >
         
                <img src="" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-700 pt-4 mt-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Drip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
