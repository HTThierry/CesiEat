import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ContactForm from './Views/Login/ContactForm';
import PasswordForm from './Views/Login/PasswordForm';
import MainContent from './Views/Home/HomePage';
import SignInForm from "./Views/Login/SignInForm";
import InformationForm from "./Views/Login/InformationForm";
import AccountTypePage from "./Views/Login/AccountTypePage";
import MainPage from "./Views/Main/MainPage";
import Commands from "./Views/Commands/Commands";
import Invite from "./Views/Invite/Invite";
import Notifications from "./Views/Notifications/Notifications";

const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<MainContent />}/>
            <Route path="/main" element={<MainPage />}/>
            <Route path="/contact" element={<ContactForm />}/>
            <Route path="/password" element={<PasswordForm />}/>
            <Route path="/signin" element={<SignInForm />}/>
            <Route path="/information" element={<InformationForm/>}/>
            <Route path="/signup" element={<AccountTypePage/>}/>
            <Route path='/commands'  element={<Commands/>} />
            <Route path='/invite' element={<Invite/>} />
            <Route path='/notifications' element={<Notifications/>}/>
        </Routes>
    </div>
);

export default App;