import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import backend from '../../../const/backend/backend';

export default function SubmitReview({ closeModal }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [schoolName, setSchoolName] = useState('');
  const [isAddingNewSchool, setIsAddingNewSchool] = useState(false);
  const [newSchoolName, setNewSchoolName] = useState('');
  const [schoolCity, setSchoolCity] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [schools, setSchools] = useState([]); // State to hold fetched schools
  const [loading, setLoading] = useState(false); // State for loader visibility

  // Fetch schools from the backend on component mount
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(`${backend}/api/schools`);
        const data = await response.json();
        setSchools(data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  const handleSchoolChange = (e) => {
    const selectedSchool = e.target.value;
    if (selectedSchool === 'addNewSchool') {
      setIsAddingNewSchool(true);
      setSchoolName('');
    } else {
      setIsAddingNewSchool(false);
      setSchoolName(selectedSchool);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    let schoolId;
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    try {
      // If adding a new school, first save it to the backend
      if (isAddingNewSchool) {
        const schoolResponse = await fetch(`${backend}/api/schools`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Add token in the Authorization header
          },
          body: JSON.stringify({ name: newSchoolName, city: schoolCity }),
        });

        const schoolData = await schoolResponse.json();
        schoolId = schoolData._id;
      } else {
        schoolId = schoolName; // Use selected schoolName for existing school
      }

      // Submit the review to the backend
      const reviewResponse = await fetch(`${backend}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add token in the Authorization header
        },
        body: JSON.stringify({
          title: reviewTitle,
          description: reviewDescription,
          rating,
          schoolId,
        }),
      });

      if (reviewResponse.ok) {
        console.log('Review submitted successfully');
        closeModal();
        window.location.reload(); // Reload the page after submission
      } else {
        console.error('Error submitting review');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 rounded-lg z-50">
          <div className="w-16 h-16 border-4 border-yellow-500 border-b-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Submit Your Review</h2>
      <form onSubmit={handleSubmit}>
        {/* School Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            onChange={handleSchoolChange}
            value={schoolName}
          >
            <option value="addNewSchool">Add New School</option>
            <option value="">Select a school</option>
            {schools.map((school) => (
              <option key={school._id} value={school._id}>
                {school.name} ({school.city})
              </option>
            ))}
            
          </select>
        </div>

        {/* New School Name and City */}
        {isAddingNewSchool && (
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">New School Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                placeholder="Enter the new school's name"
                value={newSchoolName}
                onChange={(e) => setNewSchoolName(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">School City</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                placeholder="Enter the city of the school"
                value={schoolCity}
                onChange={(e) => setSchoolCity(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        {/* Review Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Review Title</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter a title for your review"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl ${
                  (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
        </div>

        {/* Review Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Review Description</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            rows="4"
            placeholder="Share your experience about the school"
            value={reviewDescription}
            onChange={(e) => setReviewDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}
