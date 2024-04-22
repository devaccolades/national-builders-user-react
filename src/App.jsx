import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/loader/Loader';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Layout from './pages/Layout';

function App() {
  // const [loader, setloader] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setloader(false);
  //   }, 2500)
  // }, [])
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/*' element={<ErrorPage />} />
        </Route>
      </Routes>
      {/* <Loader status={loader} /> */}
    </BrowserRouter>
  )
}

export default App