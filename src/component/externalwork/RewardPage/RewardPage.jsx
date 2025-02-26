import React, { useState } from "react";
import backend from "../../const/backend/backend";
// import axios from "axios";

export default function RewardPage() {
  // State to manage the reward message and error
  const [rewardMessage, setRewardMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRewardClick = async () => {
    try {
      setRewardMessage("");
      setErrorMessage("");
  
      // Make the API call to request a reward
      const token = localStorage.getItem("token"); // Assume token is stored in localStorage
      const response = await fetch(backend+"/api/reward", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });
  
      // Parse the response
      const data = await response.json();
  
      if (response.ok) {
        setRewardMessage(data.message);
      } else {
        setErrorMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      setErrorMessage("Unable to process your request at this time.");
    }
  };
  

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        {/* Background SVGs */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 text-purple-300 opacity-50 absolute top-20 left-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.428 15.341A8 8 0 118.659 4.572a8.003 8.003 0 0010.769 10.769z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 text-blue-300 opacity-40 absolute bottom-10 right-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v8m-4-4h8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-40 w-40 text-pink-300 opacity-30 absolute top-1/3 left-1/2 transform -translate-x-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4 4 0 015.656 0l2.682 2.682a2 2 0 002.828 0l2.682-2.682a4 4 0 015.656 5.656l-2.682 2.682a2 2 0 000 2.828l2.682 2.682a4 4 0 01-5.656 5.656l-2.682-2.682a2 2 0 00-2.828 0l-2.682 2.682a4 4 0 01-5.656-5.656l2.682-2.682a2 2 0 000-2.828L4.318 12.5a4 4 0 010-5.656z"
          />
        </svg>
      </div>

      {/* Main Card */}
      <div className="bg-purple-700 bg-opacity-80 p-8 rounded-xl shadow-lg text-center w-[90%] max-w-md relative">
        <h1 className="text-white text-2xl font-bold mb-4">
          Unlock Premium Services!
        </h1>
        <p className="text-gray-300 mb-6">
          By claiming your reward, you agree to receive emails about premium
          design tools and offers.
        </p>
        <button
          className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          onClick={handleRewardClick}
        >
          Get Your Reward
        </button>

        {/* Reward Message */}
        {rewardMessage && (
          <p className="text-green-300 mt-4 text-lg font-semibold">
            {rewardMessage}
          </p>
        )}
        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-300 mt-4 text-lg font-semibold">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
