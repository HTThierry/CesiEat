import React from 'react';
import ContactForm from './Sign/ContactForm';
import PasswordForm from './Sign/PasswordForm';
import {Routes, Route} from 'react-router-dom';
import MainContent from './Home/HomePage';
import SignInForm from "./Sign/SignInForm";
import InformationForm from "./Sign/InformationForm";
import AccountTypePage from "./Sign/AccountTypePage";
import MainPage from "./Main/MainPage";
import Commands from "./Commands/Commands";
import Invite from "./Invite/Invite";
import Notifications from "./Notifications/Notifications";

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