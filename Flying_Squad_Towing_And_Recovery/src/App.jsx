import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsX";
import ContactPage from "./pages/ContactPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import OurTeamPage from "./pages/OurTeamPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import ServicesPage from "./pages/ServicesPages/ServicesPage.jsx";
import TowTruckPage from "./pages/ServicesPages/TowTruckPage.jsx";
import VehicleRecoveriesPage from "./pages/ServicesPages/VehiclesRecoveriesPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/all-services" element={<ServicesPage />} />
          <Route path="/tow-trucks" element={<TowTruckPage />} />
          <Route
            path="/vehicles-recoveries"
            element={<VehicleRecoveriesPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
