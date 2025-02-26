import React from "react";

export default function InternshipOpportunities() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-t-2xl shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Internship Opportunities
          </h1>
          <p className="text-blue-100 text-lg">Launch your career with Student Says</p>
        </div>
        
        {/* Main Content Card */}
        <div className="bg-white rounded-b-2xl shadow-xl p-8 sm:p-10">
          {/* Introduction */}
          <div className="mb-10 border-b border-gray-100 pb-6">
            <div className="flex items-center mb-6">
              <div className="h-1 w-10 bg-blue-600 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Hello, future interns! 👋</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Are you ready to boost your skills and be part of something impactful?
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-medium text-indigo-700">Student Says</span>, the "Unofficial Group Chat" for students, is offering
              fantastic internship opportunities in various areas:
            </p>
          </div>

          {/* Opportunities */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="h-1 w-10 bg-blue-600 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Available Positions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition duration-300">
                <h3 className="font-bold text-lg text-gray-800 mb-2">🚀 Marketing Strategies</h3>
                <p className="text-gray-600">Unleash your creativity and help us craft innovative campaigns to reach students all over India.</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition duration-300">
                <h3 className="font-bold text-lg text-gray-800 mb-2">🎨 Graphic Designing</h3>
                <p className="text-gray-600">Design vibrant visuals, posters, and memes that resonate with the student community.</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition duration-300">
                <h3 className="font-bold text-lg text-gray-800 mb-2">✍ Content Writing</h3>
                <p className="text-gray-600">Show off your writing talent by creating engaging blogs, articles, and social media posts.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition duration-300">
                <h3 className="font-bold text-lg text-gray-800 mb-2">📢 School Ambassadors</h3>
                <p className="text-gray-600">Represent Student Says at your school, spreading the word and helping students connect with our platform.</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition duration-300">
                <h3 className="font-bold text-lg text-gray-800 mb-2">💡 Social Media Management</h3>
                <p className="text-gray-600">Love Instagram, Facebook, or YouTube? Help us manage and create content that goes viral!</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition duration-300">
                <h3 className="font-bold text-lg text-gray-800 mb-2">🎉 Event Coordination</h3>
                <p className="text-gray-600">Join our team to plan and manage upcoming Tech & Talent Events—from brainstorming to execution.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition duration-300 md:col-span-2">
                <h3 className="font-bold text-lg text-gray-800 mb-2">📊 Management</h3>
                <p className="text-gray-600">Sharpen your leadership and organizational skills by assisting in project management and team coordination.</p>
              </div>
            </div>
          </div>

          {/* Why Join Us */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="h-1 w-10 bg-blue-600 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Why Join Us?</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Gain hands-on experience and enhance your resume.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Collaborate with a passionate team on meaningful projects.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Earn certificates and rewards for your contributions.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Receive recognition and mentorship to shape your career.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Stipend based on your creativity and work, with potential for full-time roles.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Help reform the education system by contributing to a platform that connects students, fosters learning, and encourages growth.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">School students enjoy premium access to exclusive features!</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Fulfill the New Education Policy's recommendation for internships starting from class 6th.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How to Apply */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="h-1 w-10 bg-blue-600 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">How to Apply?</h2>
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-lg font-medium mb-2">Simply drop us a message on:</p>
                  <p className="text-xl font-bold">+919718803563</p>
                </div>
                <span className="hidden md:block text-3xl">or</span>
                <div className="mt-4 md:mt-0">
                  <p className="text-lg font-medium mb-2">Fill out this quick form:</p>
                  <a
                    href="https://forms.gle/3bobYfRGKGQ2CETT6"
                    className="inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-sm hover:bg-blue-50 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center border-t border-gray-100 pt-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Let's work together to create a stronger, more connected student community and make a lasting impact on education. 
            </p>
            <p className="text-xl font-bold text-indigo-700">Don't miss out on this amazing opportunity to shine! 🌟</p>
            
            <div className="mt-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mr-2">#JoinTheMovement</span>
              <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">#StudentSaysTeam 💬</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}