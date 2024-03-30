import React from 'react';
import ContactForm from './Sign/ContactForm';
import PasswordForm from './Sign/PasswordForm';
import {Routes, Route} from 'react-router-dom';
import MainContent from './Home/HomePage';
import SignInForm from "./Sign/SignInForm";
import InformationForm from "./Sign/InformationForm";
import AccountTypePage from "./Sign/AccountTypePage";

const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<MainContent />}/>
            <Route path="/contact" element={<ContactForm />}/>
            <Route path="/password" element={<PasswordForm />}/>
            <Route path="/signin" element={<SignInForm />}/>
            <Route path="/information" element={<InformationForm/>}/>
            <Route path="/signup" element={<AccountTypePage/>}/>
        </Routes>
    </div>
);

export default App;