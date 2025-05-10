import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import LandingPage from './frontend/page/landingpage';
import LoginPage from './frontend/page/loginpage';
import RegisterPage from './frontend/page/registerpage';
import ProfileSetUpPage from './frontend/page/profilesetuppage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/registerpage" element={<RegisterPage />} />
      <Route path="/profilesetuppage" element={<ProfileSetUpPage />} />
    </Routes>    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalss
reportWebVitals();
