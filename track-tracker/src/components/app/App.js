import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import SearchPage from '../../pages/SearchPage.js';
import SignInPage from '../../pages/Account/SignInPage.js';
import SignUpPage from '../../pages/Account/SignUpPage.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {}
        <Route path="/search" element={<SearchPage />} /> {}
        <Route path="/signin" element={<SignInPage />} /> {}
        <Route path="/signup" element={<SignUpPage />} /> {}
      </Routes>
    </Router>
  );
};

export default App;