import React from 'react';
import SignUp from './Logging/SignUp';
import PasswordForm from './Logging/PasswordForm';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainContent from './Home/HomePage';

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