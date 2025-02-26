import React from 'react';
import linkedinIcon from '/social/linkedin.png';
import instagramIcon from '/social/insta.jpg';

export default function AboutUs() {
    return (
        <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">About Student Says</h1>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            The platform where student voices matter.
                        </p>
                    </div>
                </div>
            </div>

            {/* About Section with Card Design */}
            <div className="container mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <img 
                                src="/images/students-collaboration.jpg" 
                                alt="Students Collaborating" 
                                className="rounded-xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/600x400?text=Student+Says";
                                }}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Student Says is a platform where students can share honest reviews about their schools, covering academics, infrastructure, extracurricular activities, and faculty.
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                More than just a review site, Student Says is a hub for student-driven events, talent showcases, and community engagement. With the tagline 
                                <span className="font-semibold text-blue-600"> "Unofficial Group Chat," </span> 
                                it empowers students to voice their opinions and fosters transparency and collaboration for better educational experiences.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="bg-blue-50 px-6 py-4 rounded-lg border-l-4 border-blue-500">
                                    <h3 className="text-xl font-semibold text-blue-800">Our Mission</h3>
                                    <p className="mt-2 text-gray-700">
                                        To amplify student voices and create a space for genuine, anonymous reviews that help others make informed decisions.
                                    </p>
                                </div>
                                
                                <div className="bg-indigo-50 px-6 py-4 rounded-lg border-l-4 border-indigo-500">
                                    <h3 className="text-xl font-semibold text-indigo-800">Our Vision</h3>
                                    <p className="mt-2 text-gray-700">
                                        To bridge the gap between students and educational institutions, fostering transparency, trust, and better learning environments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meet the Team Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet the Team</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                            The passionate individuals behind Student Says
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-blue-100 to-indigo-100">
                                    <img 
                                        src="/social/ayushroy.jpeg" 
                                        alt="Ayush Kumar Roy" 
                                        className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300" 
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Ayush Kumar Roy</h3>
                            <p className="text-blue-600 font-medium mb-4">Founder & Developer</p>
                            <p className="text-gray-600 mb-6">
                                Visionary behind Student Says, bringing technical expertise and leadership to the platform.
                            </p>
                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-2">Connect with Ayush:</p>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://www.linkedin.com/in/ayush-kumar-roy-964a8532a/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="transition-transform hover:scale-110"
                                    >
                                        <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 rounded-md" />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/roy.ayush.roy" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="transition-transform hover:scale-110"
                                    >
                                        <img src={instagramIcon} alt="Instagram" className="w-8 h-8 rounded-md" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-blue-100 to-indigo-100">
                                    <img 
                                        src="/social/shreyaan.jpg" 
                                        alt="Shreyaan Daga" 
                                        className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300" 
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">Shreyaan Daga</h3>
                            <p className="text-blue-600 font-medium mb-4">Co-Founder & Angel Investor</p>
                            <p className="text-gray-600 mb-6">
                                Strategic mind behind the business growth and financial aspects of Student Says.
                            </p>
                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-2">Connect with Shreyaan:</p>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://www.linkedin.com/in/shreyaandaga" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="transition-transform hover:scale-110"
                                    >
                                        <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 rounded-md" />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/shrey.daga" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="transition-transform hover:scale-110"
                                    >
                                        <img src={instagramIcon} alt="Instagram" className="w-8 h-8 rounded-md" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-blue-100 to-indigo-100">
                                    <img 
                                        src="/social/amritkumar.png" 
                                        alt="Amrit Kumar" 
                                        className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300" 
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">
                                <a href="https://amritkumar.in" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors">
                                    Amrit Kumar
                                </a>
                            </h3>
                            <p className="text-blue-600 font-medium mb-4">Tech Head</p>
                            <p className="text-gray-600 mb-2">
                                Founder of <a href="https://quicklyproject.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Quicklyproject.com</a>
                            </p>
                            <p className="text-gray-600 mb-6">
                                Developer at <a href="https://bejiness.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bejiness.com</a>
                            </p>
                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-2">Connect with Amrit:</p>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://www.linkedin.com/in/amrit-kumar-13649724b" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="transition-transform hover:scale-110"
                                    >
                                        <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 rounded-md" />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/amrit_kumar360?igsh=bG04a3I5YTZ6eXF6" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="transition-transform hover:scale-110"
                                    >
                                        <img src={instagramIcon} alt="Instagram" className="w-8 h-8 rounded-md" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparency</h3>
                            <p className="text-gray-600">
                                We foster open and honest communication between students and institutions.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
                            <p className="text-gray-600">
                                Building strong connections among students across different institutions.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trust</h3>
                            <p className="text-gray-600">
                                Creating a reliable platform where students feel safe sharing their experiences.
                            </p>
                        </div>
                        
                        <div className="p-6 bg-teal-50 rounded-xl border border-teal-100 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                Continuously improving our platform to better serve the student community.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Join our growing community</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Be part of the change. Share your experiences and help fellow students make informed decisions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/submit-review" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-50 transition-colors duration-300 shadow-md">
                            Share Your Review
                        </a>
                        <a href="/join-community" className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                            Join Community
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}