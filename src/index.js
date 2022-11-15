import React from "react"
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Housing from './pages/Housing'
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='fiche-logement' element={<Housing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
