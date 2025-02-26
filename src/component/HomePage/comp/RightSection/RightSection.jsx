import { useState, useEffect } from 'react';
import { FaSchool, FaMedal, FaSearch, FaMapMarkerAlt, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import backend from '../../../const/backend/backend';
import Loader from '../../../externalwork/loader';

export default function RightSection() {
  const [schools, setSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('students');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(backend + '/api/schoolsWithReviews');
        const data = await response.json();
        setSchools(data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  const handleSchoolClick = (schoolId) => {
    navigate(`/school/${schoolId}`);
  };

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore</h2>
        <p className="text-sm text-gray-600">Find the best schools based on student reviews</p>
      </div>
      
      {/* Section Tabs */}
      <div className="flex mb-6 bg-white rounded-xl shadow-md p-1">
        <button
          onClick={() => setActiveSection('students')}
          className={`w-1/2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
            activeSection === 'students'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-transparent text-gray-700 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center justify-center">
            <FaSchool className="mr-2" />
            <span>Schools</span>
          </div>
        </button>
        <button
          onClick={() => window.location.href = "/studentsays-times"}
          className={`w-1/2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
            activeSection === 'schools'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-transparent text-gray-700 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center justify-center">
            <FaComments className="mr-2" />
            <span>Student Says Times</span>
          </div>
        </button>
      </div>

      {/* Conditional Rendering Based on Active Section */}
      {activeSection === 'students' ? (
        <div>
          {/* Search Box */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search schools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-0 rounded-xl shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 transition-all"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <FaMedal className="text-orange-500 cursor-pointer hover:text-orange-600 transition-colors" />
            </div>
          </div>

          {/* Section Title */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {filteredSchools.length} School{filteredSchools.length !== 1 ? 's' : ''}
            </h3>
            <span className="text-sm text-blue-600 cursor-pointer hover:underline">View All</span>
          </div>

          {/* Schools List */}
          <div className="space-y-4" style={{ paddingBottom: '60px' }}>
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school) => (
                <div
                  key={school._id}
                  className="flex items-center bg-white p-5 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-200 cursor-pointer"
                  onClick={() => handleSchoolClick(school._id)}
                >
                  {/* School Icon with Background */}
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <FaSchool className="text-blue-600" size={28} />
                  </div>

                  {/* School Information */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{school.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <FaMapMarkerAlt className="mr-1 text-gray-400" size={12} />
                      <p>{school.city}, {school.state}</p>
                    </div>
                  </div>

                  {/* Review Count */}
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm">
                      {school.reviewCount} Reviews
                    </span>
                    <span className="text-xs text-blue-600 mt-1 hover:underline">View details</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-white rounded-xl shadow-sm">
                <FaSchool className="mx-auto text-gray-300" size={48} />
                <p className="mt-4 text-gray-500">No schools found matching your search.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-2 text-blue-600 hover:text-blue-700"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Coming Soon</h1>
            <p className="text-lg text-blue-100">
              We're working on something amazing for this section.
            </p>
          </div>
          <div className="p-8 text-center">
            <svg
              className="w-16 h-16 mx-auto text-purple-500 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p className="mt-6 text-gray-600">
              Stay tuned for updates on our newest feature. We're building something special to enhance your experience.
            </p>
            <button 
              onClick={() => setActiveSection('students')}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Back to Schools
            </button>
          </div>
        </div>
      )}
    </div>
  );
}