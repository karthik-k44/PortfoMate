import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <FileText className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">PortfoMate</span>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/login" className="block mt-2 md:mt-0 md:ml-4 text-gray-800 hover:text-indigo-600">Login</Link>
        </div> 
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Build Your Stunning Portfolio Effortlessly</h1>
        <p className="text-gray-600 mb-6">Create, customize, and showcase your work with PortfoMate.</p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full">Get Started</button>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {['Templates', 'Drag & Drop', 'Real-Time Previews'].map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature}</h3>
              <p className="text-gray-600">Create your portfolio with ease and preview changes instantly.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
