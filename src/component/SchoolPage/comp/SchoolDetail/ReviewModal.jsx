import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import backend from '../../../const/backend/backend';

export default function ReviewModal({ schoolId, schoolName, closeModal }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [loading, setLoading] = useState(false); // State for loader visibility

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${backend}/api/user`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Assume data.name is the user's name, if needed for display
        })
        .catch((error) => console.error('Error fetching reviewer name:', error));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${backend}/api/reviews`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: reviewTitle,
          description: reviewDescription,
          rating,
          schoolId,
        }),
      });

      if (response.ok) {
        console.log('Review submitted successfully');
        closeModal();
        window.location.reload(); // Reload the page after submission
      } else {
        console.error('Error submitting review', response);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg z-50">
            <div className="w-16 h-16 border-4 border-yellow-500 border-b-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <button onClick={closeModal} className="absolute top-2 right-2 orange-text text-xl">&times;</button>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Add Review for {schoolName}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter review title"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              required
            />
          </div>

          {/* Star Rating */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={24}
                  className={star <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
              <span className="ml-2 text-sm text-yellow-500">{rating} / 5</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Write your review"
              rows="4"
              value={reviewDescription}
              onChange={(e) => setReviewDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
