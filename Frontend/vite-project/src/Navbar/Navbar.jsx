import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, FileText, Info, Bell, User, Settings, LogOut, User2Icon } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo and Desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <div className="flex items-center text-white font-bold text-xl">
                <svg className="h-8 w-8 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span>PortFomate</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/"  className="flex items-center text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                   Home </Link>
                <Link to="/createResume"  className="flex items-center text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                   Create Resume </Link>
                <Link to="/about"  className="flex items-center text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                   About </Link>
              </div>
            </div>
          </div>

          {/* Notification and Profile */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notification bell */}
            <button className="rounded-full p-1 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200">
              <span className="sr-only">View notifications</span>
              <Bell size={20} />
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={toggleProfile}
                  className="flex rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded={isProfileOpen}
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <User size={30} />
                </button>
              </div>

              {/* Profile dropdown menu */}
              {isProfileOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User size={16} className="mr-2" />
                    <span>Your Profile</span>
                  </a>
                  <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings size={16} className="mr-2" />
                    <span>Settings</span>
                  </a>
                  <a href="/logout" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut size={16} className="mr-2" />
                    <span>Sign out</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="/" className="flex items-center text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              <Home size={18} className="mr-2" />
              <span>Home</span>
            </a>
            <a href="/createResume" className="flex items-center text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              <FileText size={18} className="mr-2" />
              <span>Create Resume</span>
            </a>
            <a href="/about" className="flex items-center text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              <Info size={18} className="mr-2" />
              <span>About</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;