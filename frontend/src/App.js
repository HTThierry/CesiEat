import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ContactView from './Views/SignUpView/ContactView';
import PasswordView from './Views/SignUpView/PasswordView';
import HomePage from './Views/HomeView/HomeView';
import SignInView from "./Views/SignInView/SignInView";
import InformationView from "./Views/SignUpView/InformationView";
import AccountTypeView from "./Views/SignUpView/AccountTypeView";
import ProductView from "./Views/MainView/ProductView/ProductView";
import CommandsView from "./Views/MainView/CommandsView/CommandsView";
import InviteView from "./Views/MainView/InviteView/InviteView";
import NotificationsView from "./Views/MainView/NotificationsView/NotificationsView";
import MainLayout from "./Views/ProfileView/MainLayout";
import LogsView from "./Views/ProfileView/LogsView/LogsView";
import DashboardView from "./Views/ProfileView/DashboardView/DashboardView";
import UsersView from "./Views/ProfileView/UsersView/UsersView";
import ApiView from "./Views/ProfileView/ApiView/ApiView";
import DeliveryView from "./Views/ProfileView/DeliveryView/DeliveryView";
import SuggestionsView from "./Views/ProfileView/SuggestionsView/SuggestionsView";
import StatisticsView from "./Views/ProfileView/StatisticsView/StatisticsView";
import AccountInformationView from "./Views/ProfileView/AccountInformationView/AccountInformationView";

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
            <Route path='/profile' element={<MainLayout/>}>
                <Route path='/profile/information' element={<AccountInformationView/>}/>
                <Route path='/profile/statistics' element={<StatisticsView/>}/>
                <Route path='/profile/suggestions' element={<SuggestionsView/>}/>
                <Route path='/profile/delivery' element={<DeliveryView/>}/>
                <Route path='/profile/api' element={<ApiView/>}/>
                <Route path='/profile/users' element={<UsersView/>}/>
                <Route path='/profile/dashboard' element={<DashboardView/>}/>
                <Route path='/profile/logs' element={<LogsView/>}/>
            </Route>
        </Routes>
    </div>
);

export default App;