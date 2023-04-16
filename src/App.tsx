import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import UserForm from './pages/FormPage';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/forms" element={<UserForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
