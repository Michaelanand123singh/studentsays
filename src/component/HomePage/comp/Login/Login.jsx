import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backend from '../../../const/backend/backend';
import { useGoogleLogin } from '@react-oauth/google'; // Ensure this package is installed
import { AiOutlineGoogle } from 'react-icons/ai';



export default function Login({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // State for loader visibility

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    try {
      const response = await fetch(`${backend}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        localStorage.setItem('token', data.token); // Store JWT in localStorage
        setLoading(false); // Hide loader
        closeModal(); // Close modal on successful login
        navigate('/'); // Navigate to the home page
        window.location.reload(); // Reload the page to update the state

        // Trigger the notification
        showNotification();
      } else {
        setMessage(data.message || 'Login failed');
        setLoading(false); // Hide loader
      }
    } catch (error) {
      setMessage('Error connecting to server');
      setLoading(false); // Hide loader
      console.error(error);
    }
  };

  const showNotification = () => {
    // Check if the browser supports notifications
    if ('Notification' in window) {
      // Request permission to show notifications
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Show the notification
          new Notification('🎉 Heads Up! A New Review Just Dropped! 🎉', {
            body: `Someone just shared their thoughts on [School Name]—could it be about your favorite teacher or that campus buzz? 👀

💬 Don’t miss out! Dive in and join the convo now!

#StayInTheLoop #StudentSaysBuzz`,
            icon: '/vite', // Optional: Add your app's logo or icon here
          });
        }
      });
    }
  };


  const responseGoogle = async (authResult) => {
    try {
      if (authResult.code) {
        const response = await fetch(`${backend}/api/google-auth`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: authResult.code }),
        });
  
        const text = await response.text(); // Read raw response
        console.log("Raw Response:", text);
  
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}: ${text}`);
        }
  
        let result;
        try {
          result = JSON.parse(text); // Attempt to parse JSON
          console.log("Parsed Response:", result);
        } catch (jsonError) {
          console.error("Error parsing JSON:", jsonError);
          return;
        }
  
        if (result?.user && result?.token) {
          const { email, fullName, profilePic } = result.user;
          const token = result.token;
  
          localStorage.setItem(
            "user-info",
            JSON.stringify({ email, name: fullName, token, image: profilePic })
          );
          localStorage.setItem("token", result.token);

          window.location.reload(); // Reload to apply changes
        } else {
          console.error("Invalid response format:", result);
        }
      } else {
        console.error("Invalid authResult:", authResult);
      }
    } catch (e) {
      console.error("Error while Google Login:", e);
    }
  };
  
  // Google Login Hook
  const googleLogin1 = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.error("Google Login Error:", error),
    flow: "auth-code",
  });
  

  return (
    <div className="max-w-lg mx-auto p-8 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 rounded-lg z-50">
          <div className="w-16 h-16 border-4 border-yellow-500 border-b-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login to Your Account
      </h2>

      <form onSubmit={handleLogin}>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Message */}
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <br />
          <hr />
           <br />
          <p>OR</p>
          <br />
              {/* Google Login Button */}
              <div className="text-center mb-4">
              <button
  onClick={googleLogin1}
  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
>
  <AiOutlineGoogle size={24} /> {/* Google Icon */}
  Continue with Google
</button>

          </div>
        </div>
      </form>
    </div>
  );
}
