import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaThumbsUp, FaThumbsDown, FaShare } from 'react-icons/fa';
import backend from '../../../const/backend/backend';

export default function Reviews({ onLoaded }) {
  const { schoolId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [userInteractions, setUserInteractions] = useState({}); // Track if user liked or disliked
  const reviewRefs = useRef({}); // Ref object to store references for reviews

  // Function to fetch likes and dislikes
  const fetchLikesDislikes = async (reviewId) => {
    try {
      const [likesRes, dislikesRes] = await Promise.all([
        fetch(`${backend}/api/reviews/${reviewId}/likes`),
        fetch(`${backend}/api/reviews/${reviewId}/dislikes`),
      ]);

      const likesData = await likesRes.json();
      const dislikesData = await dislikesRes.json();

      setLikes((prev) => ({ ...prev, [reviewId]: likesData.length }));
      setDislikes((prev) => ({ ...prev, [reviewId]: dislikesData.length }));
    } catch (error) {
      console.error('Error fetching likes or dislikes:', error);
    }
  };

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${backend}/api/schools/${schoolId}/reviews`);
        const data = await response.json();
        setReviews(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));

        // Fetch likes and dislikes for each review
        data.forEach((review) => fetchLikesDislikes(review._id));
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [schoolId]);

  // Auto-scroll to a specific review if the hash is present in the URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const reviewId = hash.replace('#review-', '');
      const reviewElement = reviewRefs.current[reviewId];
      if (reviewElement) {
        reviewElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [reviews]); // Runs after reviews are loaded

  const handleLike = async (reviewId) => {
    await fetch(`${backend}/api/reviews/${reviewId}/like`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    fetchLikesDislikes(reviewId);
  };

  const handleDislike = async (reviewId) => {
    await fetch(`${backend}/api/reviews/${reviewId}/dislike`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    fetchLikesDislikes(reviewId);
  };

  const handleShare = async (review) => {
    const shareData = {
      title: `Review of ${anonymizeName(review.reviewerName)} at ${review.schoolName}`,
      text: `${review.title}\nRating: ${review.rating}/5\n"${review.description}"`,
      url: `${window.location.origin}/school/${schoolId}#review-${review._id}`, // Using hash for review
    };
  
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        alert('Review shared successfully!');
      } else {
        navigator.clipboard.writeText(shareData.url);
        alert('Sharing not supported on your device. Review link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
      alert('Unable to share. Please try again.');
    }
  };
  

  // Helper function to anonymize the first name
  const anonymizeName = (fullName) => {
    return fullName
      .split(' ')
      .map((name) => 
        name.length > 2 
          ? name[0] + '*'.repeat(name.length - 2) + name[name.length - 1] 
          : name
      )
      .join(' ');
  };
  


  return (
    <div className="p-6 bg-white-50 max-w-6xl mx-auto space-y-6 mt-10" id="reviews">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reviews</h1>
      {reviews.map((review) => (
        <div
          key={review._id}
          ref={(el) => (reviewRefs.current[review._id] = el)} // Attach ref for each review
          id={`review-${review._id}`}
          className="bg-white p-4 rounded-md shadow-md"
        >
          <div className="flex items-center space-x-4 mb-3">
            <img
              src={review.profileImage || '/user.png'}
              alt="Reviewer Profile"
              className="w-12 h-12 rounded-full border border-gray-200"
            />
            <div>
            <h3 className="font-semibold text-lg text-gray-800">
  {anonymizeName(review.reviewerName)}
</h3>

              <p className="text-xs text-gray-400">
                Reviewed on {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="mb-3">
            <h4 className="font-medium text-gray-700 text-md">{review.title}</h4>
            <p className="text-gray-600">{review.description}</p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-yellow-500">Rating: {review.rating}/5</span>
            </div>
          </div>
          <div className="flex space-x-6 text-sm orange-text">
            <button onClick={() => handleLike(review._id)} className="flex items-center">
              {userInteractions[review._id]?.liked ? (
                <FaThumbsUp className="text-blue-600 mr-1" />
              ) : (
                <FaThumbsUp className="orange-text mr-1" />
              )}
              Like {likes[review._id] || 0}
            </button>
            <button onClick={() => handleDislike(review._id)} className="flex items-center">
              {userInteractions[review._id]?.disliked ? (
                <FaThumbsDown className="text-red-600 mr-1" />
              ) : (
                <FaThumbsDown className="orange-text mr-1" />
              )}
              Dislike {dislikes[review._id] || 0}
            </button>
            <button
              onClick={() => handleShare(review)}
              className="flex items-center orange-text hover:text-blue-500"
            >
              <FaShare className="mr-1" /> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
