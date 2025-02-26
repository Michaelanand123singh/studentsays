import React, { useState, useEffect } from 'react';
import SubmitReview from '../SubmitReview/SubmitReview'; 
import CreateAccount from '../CreateAccount/CreateAccout';
import Login from '../Login/Login';

const LeftSection = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    
    // Show the popup after 5 seconds
    const popupTimer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000);

    return () => clearTimeout(popupTimer);
  }, []);

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <button 
            className="absolute top-3 right-3 text-orange-500 hover:text-black text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="text-center py-10 px-8 bg-gray-50 rounded-lg shadow-sm h-full flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo with improved spacing */}
        <div className="mb-8">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="w-28 mx-auto hover:scale-105 transition-transform duration-300" 
          />
        </div>
        
        {/* Spotlight Header with branding color consistency */}
        <p className="text-sm font-semibold tracking-widest text-orange-500 mb-3 uppercase">
          Student Says
        </p>

        {/* Main Heading with better spacing and size */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-5 leading-tight">
          Discover Schools<br />Unofficial G.C
        </h1>

        {/* Subheading with improved styling */}
        <p className="text-lg text-orange-500 mb-10 font-medium">
          Your voice, your opinions, your experience
        </p>

        {/* Call to Action Buttons with improved styling */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-3 sm:space-y-0 mb-8">
          {isAuthenticated ? (
            <button 
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition-colors duration-300"
              onClick={() => setIsReviewModalOpen(true)}
            >
              + SUBMIT REVIEW
            </button>
          ) : (
            <>
              <button 
                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition-colors duration-300"
                onClick={() => setIsAccountModalOpen(true)}
              >
                Sign up to write a review
              </button>
              <button 
                className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-orange-50 transition-colors duration-300"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Login to your account
              </button>
            </>
          )}
        </div>
      </div>

      {/* Ad Banner with improved styling */}
      <div className="mb-6 mt-auto">
        <a 
          href="https://forms.gle/ZmPif4JcbLgrW9r49" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block transition-transform hover:scale-102 duration-300"
        >
          <div className="relative">
            <img 
              src="/ads/banner/studentsaysintern.jpg" 
              alt="Student Says Consulting Services"
              className="w-full rounded-lg shadow-md border-2 border-yellow-400" 
            />
            <div className="absolute top-0 right-0 bg-yellow-400 text-xs text-black px-2 py-1 rounded-bl-lg font-medium">
              AD
            </div>
          </div>
        </a>
      </div>

      {/* Modals using the reusable component */}
      <Modal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)}>
        <SubmitReview closeModal={() => setIsReviewModalOpen(false)} />
      </Modal>

      <Modal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)}>
        <CreateAccount closeModal={() => setIsAccountModalOpen(false)} />
      </Modal>

      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <Login closeModal={() => setIsLoginModalOpen(false)} />
      </Modal>

      {/* Information Popup with improved styling */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="relative bg-white p-8 rounded-lg shadow-xl w-full max-w-lg text-center animate-fadeIn">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
              onClick={() => setIsPopupVisible(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Welcome to Student Says!</h2>
            <p className="text-gray-700 mb-6">
              Student Says is a platform where students can rate, review, and discuss their schools anonymously.
              Share experiences, read honest feedback, and help others make informed decisions.
            </p>
            <div className="text-left text-gray-700 mb-6 bg-orange-50 p-4 rounded-lg">
              <p className="font-medium text-orange-700 mb-2">What you can do:</p>
              <div className="space-y-2">
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">🔹</span> Search your school and explore reviews
                </p>
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">🔹</span> Post your experience anonymously
                </p>
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">🔹</span> Join discussions on school life, exams, and more
                </p>
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">🔹</span> Connect with unofficial school networks & opportunities
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-6">
              💬 Your opinion matters – Speak up on Student Says!
            </p>
            <div className="flex justify-center space-x-3">
              <button 
                className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setIsPopupVisible(false)}
              >
                Maybe Later
              </button>
              <button 
                className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
                onClick={() => {
                  setIsPopupVisible(false);
                  setIsAccountModalOpen(true);
                }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSection;