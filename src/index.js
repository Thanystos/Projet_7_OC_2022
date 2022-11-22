import React from "react"
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Housing from './pages/Housing'
import PageNotFound from './pages/PageNotFound'
import About from './pages/About'
import Header from "./components/Header"
import Footer from "./components/Footer"
import GlobalStyle from "./utils/style/GlobalStyle"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FontStyle from "./utils/style/FontStyle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FontStyle />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Fiche-Logement/:id' element={<Housing />} />
        <Route path='A-Propos' element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
