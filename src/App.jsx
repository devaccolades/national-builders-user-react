import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/loader/Loader';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2500)
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<ErrorPage />} />

      </Routes>
      <Loader status={loader} />
    </BrowserRouter>
  )
}

export default App