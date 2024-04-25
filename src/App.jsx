import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader';
import ErrorPage from './pages/ErrorPage';
import ScrollTop from './components/utils/ScrollTop'

// Lazy-load components
const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const RentalProperties = React.lazy(() => import('./pages/RentalProperties'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const NewsAndEvents = React.lazy(() => import('./pages/NewsAndEvents'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const KeyHandover = React.lazy(() => import('./pages/KeyHandover'));



function App() {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader status={true} />}>
              <Layout />
            </Suspense>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/details" element={<ProjectDetails />} />
          <Route path="/rentals" element={<RentalProperties />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/news-and-events" element={<NewsAndEvents />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/key-handover" element={<KeyHandover />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
