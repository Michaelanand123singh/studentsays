import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Coffee, Heart, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section with Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand and About */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Student Says</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping students make informed decisions about their education through authentic reviews and insights.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/saysstudent/" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/SaysStuden88081" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/student-says/" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/studentsays-times" className="hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white">Student Says Times</span>
                </Link>
              </li>
              <li>
                <Link to="/internship-opportunities" className="hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white">Internships</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="flex flex-col space-y-2 text-gray-400">
              <li>
                <Link to="/reward" className="hover:text-white transition-colors duration-300">
                  <span className="border-b border-transparent hover:border-white">Rewards</span>
                </Link>
              </li>
              <li>
                <Link to="/teektask" className="hover:text-white transition-colors duration-300">
                  <span className="border-b border-transparent hover:border-white">Teek Task</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">
                  <span className="border-b border-transparent hover:border-white">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms-and-condition" className="hover:text-white transition-colors duration-300">
                  <span className="border-b border-transparent hover:border-white">Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="flex flex-col space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-300" />
                <span>contact@studentsays.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-300" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-300" />
                <span>Bengaluru, India</span>
              </li>
            </ul>

            <a href="https://buymeacoffee.com/Studentsays.ayush" target="_blank" rel="noopener noreferrer" 
              className="flex items-center justify-center space-x-2 mt-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 py-2 px-4 rounded-md hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 shadow-lg font-medium">
              <Coffee size={18} />
              <span>Buy Me a Coffee</span>
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section with Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Student Says. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0 space-x-1">
            <p>Made with</p>
            <Heart size={14} className="text-red-500 mx-1 fill-current" />
            <p>by <span className="font-medium text-white">Roy-Wiz Tech</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}