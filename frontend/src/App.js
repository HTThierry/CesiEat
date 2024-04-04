import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ContactView from './Views/SignUpView/ContactView';
import PasswordView from './Views/SignUpView/PasswordView';
import HomePage from './Views/HomeView/HomeView';
import SignInView from "./Views/SignInView/SignInView";
import InformationView from "./Views/SignUpView/InformationView";
import AccountTypeView from "./Views/SignUpView/AccountTypeView";
import ProductView from "./Views/Main/ProductView/ProductView";
import CommandsView from "./Views/Main/CommandsView/CommandsView";
import InviteView from "./Views/Main/InviteView/InviteView";
import NotificationsView from "./Views/Main/NotificationsView/NotificationsView";

const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/products" element={<ProductView />}/>
            <Route path="/contact" element={<ContactView />}/>
            <Route path="/password" element={<PasswordView />}/>
            <Route path="/signin" element={<SignInView />}/>
            <Route path="/information" element={<InformationView/>}/>
            <Route path="/signup" element={<AccountTypeView/>}/>
            <Route path='/commands'  element={<CommandsView/>} />
            <Route path='/invite' element={<InviteView/>} />
            <Route path='/notifications' element={<NotificationsView/>}/>
        </Routes>
    </div>
);

export default App;