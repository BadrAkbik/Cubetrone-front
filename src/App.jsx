import React, { useState } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Navbar from './components/navbar/Navbar';
import CourseLessons from './pages/CourseLessons';
import Profile from './pages/Profile';
import EmailVerification from './pages/auth/EmailVerification';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="login" element={<Login />} />
                <Route index element={<Home />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="signup" element={<Signup />} />
                <Route path="course/:courseId/lesson/:lessonId" element={<CourseLessons />} />
                <Route path="profile/:id" element={<Profile />} />
                <Route path="email-verification" element={<EmailVerification />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App