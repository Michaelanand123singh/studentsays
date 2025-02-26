import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SubmitReview from "../HomePage/comp/SubmitReview/SubmitReview";
import Login from "../HomePage/comp/Login/Login";
import backend from "../const/backend/backend";

export default function Navbar() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Student Says", path: "/studentsays-times" },
    { name: "Internships", path: "/internship-opportunities" },
  ];

  // Check for token and fetch user details
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${backend}/api/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.name) {
            setUserName(data.name);
          }
        })
        .catch((error) => console.error("Error fetching user details:", error));
    }
  }, []);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isDropdownOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, isMobileMenuOpen]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserName(null);
    setIsDropdownOpen(false);
    navigate("/");
  };

  // Handle Add Review button click
  const handleAddReviewClick = () => {
    if (userName) {
      setIsReviewModalOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
    setIsMobileMenuOpen(false);
  };

  // Handle Get Rewards button click
  const handleGetRewardsClick = () => {
    if (userName) {
      navigate("/reward");
    } else {
      setIsLoginModalOpen(true);
    }
    setShowDropdown(false);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-10"
              />
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-gray-700 hover:text-black font-medium px-2 py-1 rounded transition ${
                    location.pathname === link.path ? "text-black border-b-2 border-black" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                onClick={handleAddReviewClick}
              >
                Add Review
              </button>

              {userName ? (
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full cursor-pointer transition hover:bg-gray-700"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    {userName.charAt(0).toUpperCase()}
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                        Signed in as <span className="font-medium text-gray-700">{userName}</span>
                      </div>
                      <Link
                        to="/profile"
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                      <button
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t border-gray-200 py-2 px-4 shadow-lg"
        >
          <div className="flex flex-col space-y-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path ? "bg-gray-100 text-black" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <button
                className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-2"
                onClick={handleAddReviewClick}
              >
                Add Review
              </button>
              
              {!userName && (
                <button
                  className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition mt-2"
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Log In
                </button>
              )}
              
              {userName && (
                <button
                  className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition mt-2"
                  onClick={handleLogout}
                >
                  Logout ({userName})
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fixed Buttons in Bottom Right Corner */}
      <div
        className="fixed bottom-4 right-4 flex flex-col items-end z-40"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
        style={{ marginBottom: '40px' }}
      >
        {/* Three-Dots Button with Indicator */}
        <div className="relative flex items-center">
          <button
            className="bg-gray-300 text-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-400 transition transform hover:scale-105 z-10 animate-bounce"
            style={{ width: "48px", height: "48px" }}
          >
            &#8942; {/* Three dots icon */}
          </button>

          {/* Glowing Indicator */}
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-500 animate-ping opacity-75"></div>

          {/* "Click Me!" Text */}
          <div className="absolute -top-10 right-0 bg-yellow-300 text-black font-bold py-1 px-2 rounded-md shadow-lg animate-pulse" style={{ width: '100px' }}>
            Click Me!
          </div>
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div
            className="absolute bottom-full mb-2 right-0 flex flex-col space-y-2 bg-white p-3 rounded-lg shadow-lg border z-20"
            style={{ width: "max-content" }}
          >
            {/* Internship & Scholarship Button */}
            <a
              href="/internship-opportunities"
              className="bg-green-500 text-white font-medium py-2 px-3 rounded-md hover:bg-green-600 transition transform hover:scale-105 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Internship & Scholarship
            </a>

            {/* Join Community Button */}
            <a
              href="https://chat.whatsapp.com/DUZxoRoJpXAGuyf62KwHVX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-medium py-2 px-3 rounded-md hover:bg-green-600 transition transform hover:scale-105 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Join Community
            </a>

            {/* Earn As A Student Button */}
            <a
              href="/teektask"
              className="bg-blue-500 text-white font-medium py-2 px-3 rounded-md hover:bg-blue-600 transition transform hover:scale-105 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Earn As Student
            </a>

            {/* Get Rewards Button */}
            <button
              onClick={handleGetRewardsClick}
              className="bg-orange-500 text-white font-medium py-2 px-3 rounded-md hover:bg-orange-600 transition transform hover:scale-105 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 8l-3.293-3.293A1 1 0 0112 4z" clipRule="evenodd" />
              </svg>
              Get Rewards
            </button>
          </div>
        )}
      </div>

      {/* SubmitReview Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
              onClick={() => setIsReviewModalOpen(false)}
            >
              &times;
            </button>
            <SubmitReview closeModal={() => setIsReviewModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
              onClick={() => setIsLoginModalOpen(false)}
            >
              &times;
            </button>
            <Login closeModal={() => setIsLoginModalOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}