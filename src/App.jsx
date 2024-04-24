import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/loader/Loader';
import ErrorPage from './pages/ErrorPage';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import Layout from './pages/Layout';
// import ProjectDetails from './pages/ProjectDetails';

const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Suspense fallback={<Loader status={true} />}><Layout /> </Suspense>}>
        <Route path='/' element={<Suspense fallback={<Loader status={true} />}><Home /> </Suspense>} />
        <Route path='/about' element={<Suspense fallback={<Loader status={true} />}><About /> </Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Loader status={true} />}><Contact /> </Suspense>}/>
        <Route path='/projects' element={<Suspense fallback={<Loader status={true} />}><Projects /> </Suspense>}/>
        <Route path='/project/details' element={<Suspense fallback={<Loader status={true} />}><ProjectDetails /> </Suspense>} />
        <Route path='/*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App