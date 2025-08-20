import './App.css';
import Login from './Components/UserPanel/Login';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Register from './Components/UserPanel/Register';
import Home from './Components/UserPanel/Home';
import AboutUs from './Components/UserPanel/Aboutus';
import ApplicationServices from './Components/UserPanel/ApplicationServices';
import Navbar from './Components/UserPanel/Navbar';
import Footer from './Components/UserPanel/Footer';
import BusinessServices from './Components/UserPanel/BusinessServices';
import TechnologyTrainings from './Components/UserPanel/TechnologyTrainings';
import GlobalStaffing from './Components/UserPanel/GlobalStaffing';
import StaffAugmentation from './Components/UserPanel/StaffAugmentation';
import Products from './Components/UserPanel/Products';
import DemoRegistration from './Components/UserPanel/DemoRegistration';
import ContactPage from './Components/UserPanel/ContactPage';
import AdminLogin from './Components/AdminPanel/AdminLogin';
import Dashboard from './Components/AdminPanel/Dashboard';
import AdminRegisterList from './Components/AdminPanel/AdminRegisterList';
import PartnerList from './Components/AdminPanel/PartnerList';
import JobApplied from './Components/AdminPanel/JobApplied';
import AdminAppliedJobs from './Components/AdminPanel/AdminAppliedJobs';
import OtpVerification from './Components/UserPanel/OtpVerification';
import UserDashboard from './Components/UserPanel/UserDashboard';
import ForgotPassword from './Components/UserPanel/ForgotPassword';
import { UserProvider } from './Context/UserContext';
import AppliedJobs from './Components/UserPanel/AppliedJobs';
import AppliedJobsList from './Components/UserPanel/AppliedJobList';
import AccountSettings from './Components/UserPanel/AccountSetting';
import Blogs from './Components/AdminPanel/Blogs';
import BlogSection from './Components/UserPanel/BlogSection';
import ChangePassword from './Components/UserPanel/ChangePassword';
import Contact from './Components/AdminPanel/Contact';
import UserProfileSettings from './Components/UserPanel/UserProfileSetting';
import JobDetails from './Components/UserPanel/JobDetails';
import HireFromUs from './Components/UserPanel/HireFromUs';
import AdminPostJobs from './Components/AdminPanel/AdminPostJobs';

const AppContent = () => {
  const location = useLocation();

  const noLayoutRoutes = [
    '/login', '/register', '/admin', '/dashboard', '/adminregister',
    '/partnerlist', '/jobs', '/otpverification', '/forgotpassword','/blogs','/contactus'
  ];

  const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowLayout && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/application-services" element={<ApplicationServices />} />
        <Route path="/technology-trainings" element={<TechnologyTrainings />} />
        <Route path="/business-services" element={<BusinessServices />} />
        <Route path="/global-staffing" element={<GlobalStaffing />} />
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/products" element={<Products />} />
        <Route path="/registration" element={<DemoRegistration />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminregister" element={<AdminRegisterList />} />
        <Route path="/partnerlist" element={<PartnerList />} />
        <Route path="/jobs" element={<JobApplied />} />
        <Route path="/adminpostjobs" element={<AdminPostJobs />} />
        <Route path="/adminappliedjobs" element={<AdminAppliedJobs />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/applied-jobs/apply/:jobTitle" element={<JobDetails />} />
        <Route path="/jobs-applied" element={<AppliedJobsList/>} />
        <Route path="/hirefromus" element={<HireFromUs />} />
        <Route path="/account-setting" element={<AccountSettings/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogsection" element={<BlogSection/>} />
        <Route path="/changepassword" element={<ChangePassword/>} />
        <Route path="/contactus" element={<Contact/>}/>
        <Route path='/profile' element={<UserProfileSettings/>}/>
       

      </Routes>
      {shouldShowLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <UserProvider> {/* ✅ Wrap AppContent with UserProvider */}
        <AppContent />
      </UserProvider>
    </Router>
  );
}

export default App;
