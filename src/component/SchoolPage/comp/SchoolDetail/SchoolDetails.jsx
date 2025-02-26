import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewModal from './ReviewModal'; // Import the ReviewModal component
import Login from '../../../HomePage/comp/Login/Login'; // Import the LoginModal component
import backend from '../../../const/backend/backend';
import Loader from '../../../externalwork/loader';

export default function SchoolDetails() {
  const { schoolId } = useParams(); // Get the school ID from the URL
  const [school, setSchool] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // State to control review modal visibility
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State to control login modal visibility
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to check if user is logged in
  const defaultImage = "/schoollogo.avif"; // Placeholder for the default image

  // Check for token to see if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set authentication state based on token existence
  }, []);

  // Fetch school details from the backend
  useEffect(() => {
    const fetchSchoolDetails = async () => {
      try {
        const response = await fetch(`${backend}/api/schools/${schoolId}`);
        const data = await response.json();
        setSchool(data);
      } catch (error) {
        console.error('Error fetching school details:', error);
      }
    };

    fetchSchoolDetails();
  }, [schoolId]);

  if (!SchoolDetails) return null;

  const handleAddReviewClick = () => {
    if (isAuthenticated) {
      setIsReviewModalOpen(true); // Open review modal if authenticated
    } else {
      setIsLoginModalOpen(true); // Open login modal if not authenticated
    }
  };

  if (!school) return <Loader/>;

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Container for logo, title, and Add Review button */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 space-y-4 lg:space-y-0">
          <div className="flex items-start space-x-4">
            <img
              src={school.logo || defaultImage} // Replace with actual image URL if available
              alt="School Logo"
              className="w-16 h-16 rounded-full border border-gray-200"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {school.name}
              </h1>
              <div className="text-blue-600">
                <a href="#" className="hover:underline">
                  {school.city}, {school.state}
                </a>
              </div>
            </div>
          </div>

          {/* Add More Review Button - moves below View Reviews on smaller screens */}
          <button
            onClick={handleAddReviewClick}
            style={{ backgroundColor: '#ff6400', color: '#ffffff' }}
            className="px-4 py-2 rounded-lg shadow hover:bg-blue-600 lg:ml-4 lg:mt-0 mt-4 lg:mb-0 mb-4"
          >
            Add More Review
          </button>
        </div>

        {/* Question & Answer link */}
        <div className="mb-4">
          <a href="#reviews" className="text-blue-500 hover:underline font-medium">
            View Reviews
          </a>
        </div>

        {/* Conditionally render the ReviewModal component */}
        {isReviewModalOpen && (
          <ReviewModal
            schoolId={schoolId}
            schoolName={school.name}
            closeModal={() => setIsReviewModalOpen(false)}
          />
        )}

        {/* Conditionally render the LoginModal component as a modal overlay */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
              <button
                className="absolute top-3 right-3 orange-text hover:text-black text-2xl"
                onClick={() => setIsLoginModalOpen(false)}
              >
                &times;
              </button>
              <Login
                closeModal={() => setIsLoginModalOpen(false)}
                onLoginSuccess={() => {
                  setIsAuthenticated(true);
                  setIsLoginModalOpen(false);
                  setIsReviewModalOpen(true); // Open review modal after successful login
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
