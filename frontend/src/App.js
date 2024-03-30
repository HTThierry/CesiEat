import React from 'react';
import SignUp from './logging/SignUp';
import PasswordForm from './logging/PasswordForm';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainContent from './home/HomePage';

const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password" element={<PasswordForm />} />
        </Routes>
    </div>
);

export default App;