import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitReview from "./component/HomePage/comp/SubmitReview/SubmitReview";
import HomePage from "./component/HomePage/HomePage";
import SchoolPage from "./component/SchoolPage/SchoolPage";
import './index.css';
import Login from './component/HomePage/comp/Login/Login';
import TeekTask from './component/externalwork/teektaskvsstudentsays';
import AboutUs from './component/pages/AboutUs';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Loader from './component/externalwork/loader';
import RewardPage from './component/externalwork/RewardPage/RewardPage';
import InternshipOpportunities from './component/externalwork/InternshipOpportunities/InternshipOpportunities';
import './App.css';
import StudentSaysTimes from './component/externalwork/StudentsaysTimes/StudentsaysTimes';
import PrivacyPolicy from './component/externalwork/Pages/PrivacyPolicy/PrivacyPolicy';
import TermsandConditions from './component/externalwork/Pages/TermsandCondition/TermsandCondition';

export default function App() {
  // Create a layout component to avoid repetition
  const Layout = ({ children }) => (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for school page */}
        <Route path="/school/:schoolId" element={<SchoolPage />} />
        
        {/* Auth route */}
        <Route path="/login" element={<Login />} />
        
        {/* External work routes */}
        <Route path="/teektask" element={<TeekTask />} />
        
        {/* Routes with shared layout (Navbar and Footer) */}
        <Route path="/about" element={
          <Layout>
            <AboutUs />
          </Layout>
        } />
        
        <Route path="/load" element={
          <Layout>
            <Loader />
          </Layout>
        } />
        
        <Route path="/reward" element={
          <Layout>
            <RewardPage />
          </Layout>
        } />
        
        <Route path="/internship-opportunities" element={
          <Layout>
            <InternshipOpportunities />
          </Layout>
        } />
        
        <Route path="/studentsays-times" element={
          <Layout>
            <StudentSaysTimes />
          </Layout>
        } />
        
        <Route path="/privacy-policy" element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        } />
        
        <Route path="/terms-and-condition" element={
          <Layout>
            <TermsandConditions />
          </Layout>
        } />
        
        {/* Uncomment this route if you want to use it */}
        {/* <Route path="/submit-review" element={<SubmitReview />} /> */}
        
        {/* Add a catch-all route for 404 pages */}
        <Route path="*" element={
          <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen">
              <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
              <p>The page you are looking for doesn't exist.</p>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}