import "./App.css";
import Login from "./Components/UserPanel/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Register from "./Components/UserPanel/Register";
import Home from "./Components/UserPanel/Home";
import AboutUs from "./Components/UserPanel/Aboutus";
import ApplicationServices from "./Components/UserPanel/ApplicationServices";
import Navbar from "./Components/UserPanel/Navbar";
import Footer from "./Components/UserPanel/Footer";
import BusinessServices from "./Components/UserPanel/BusinessServices";
import TechnologyTrainings from "./Components/UserPanel/TechnologyTrainings";
import GlobalStaffing from "./Components/UserPanel/GlobalStaffing";
import StaffAugmentation from "./Components/UserPanel/StaffAugmentation";
import Products from "./Components/UserPanel/Products";
import DemoRegistration from "./Components/UserPanel/DemoRegistration";
import ContactPage from "./Components/UserPanel/ContactPage";

const AppContent = () => {
  const location = useLocation();

  // Define routes that should not display Navbar/Footer
  const noLayoutRoutes = ["/login", "/register"];

  const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowLayout && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

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
      </Routes>
      {shouldShowLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
