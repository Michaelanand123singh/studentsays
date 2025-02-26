import React, { useState, useEffect } from "react";
import LeftSection from "./comp/LeftSection/LeftSection";
import RightSection from "./comp/RightSection/RightSection";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"; // Import the Navbar component
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for auth check
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Check for authentication token on component mount
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleGetRewardsClick = () => {
    if (isAuthenticated) {
      navigate("/reward"); // Navigate to reward page if logged in
    } else {
      navigate("/login"); // Navigate to login page if not logged in
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Navbar Component */}
      <Navbar isAuthenticated={isAuthenticated} />
      
      {/* Main Content Area */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex justify-center items-center">
          <LeftSection />
        </div>

        {/* Right Section */}
        <div className="lg:overflow-y-auto lg:h-screen">
          <RightSection />
        </div>
      </div>

      {/* Fixed Buttons in Bottom Right Corner */}
      <div
        className="fixed bottom-4 right-4 flex flex-col items-end"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
        style={{marginBottom:'40px'}}
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

          {/* Infinite "Click Me!" Text */}
          <div className="absolute -top-10 right-0 bg-yellow-300 text-black font-bold py-1 px-2 rounded-md shadow-lg animate-pulse" style={{width:'100px'}}>
            Click Me!
          </div>
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div
            className="absolute bottom-full mb-0 right-0 flex flex-col space-y-1 bg-white p-2 rounded-lg shadow-lg border z-20"
            style={{ width: "max-content" }}
          >
            {/* Internship & Scholarship Button */}
            <a
              href="/internship-opportunities"
              className="bg-green-500 text-white font-medium py-1 px-2 text-sm rounded-md hover:bg-green-600 transition transform hover:scale-105"
            >
              Internship & Scholarship
            </a>

            {/* Join Community Button */}
            <a
              href="https://chat.whatsapp.com/DUZxoRoJpXAGuyf62KwHVX"
              className="bg-green-500 text-white font-medium py-1 px-2 text-sm rounded-md hover:bg-green-600 transition transform hover:scale-105"
            >
              Join Community
            </a>

            {/* Earn As A Student Button */}
            <a
              href="/teektask"
              className="bg-blue-500 text-white font-medium py-1 px-2 text-sm rounded-md hover:bg-blue-600 transition transform hover:scale-105"
            >
              Earn As Student
            </a>

            {/* Get Rewards Button */}
            <button
              onClick={handleGetRewardsClick}
              className="bg-orange-500 text-white font-medium py-1 px-2 text-sm rounded-md hover:bg-orange-600 transition transform hover:scale-105"
            >
              Get Rewards
            </button>
          </div>
        )}
      </div>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}