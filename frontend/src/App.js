import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactView from './Views/SignUpView/ContactView';
import PasswordView from './Views/SignUpView/PasswordView';
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
import MailConfirmation from "./Views/SignUpView/MailConfirmation";
import RestaurantView from "./Views/MainView/RestaurantView/RestaurantView";
import CreateRestaurantVIew from "./Views/MainView/CreateRestaurantView/CreateRestaurantVIew";
import HomeView from "./Views/HomeView/HomeView";
import CartView from "./Views/MainView/CartView/CartView";
import ProtectedRoute from "./ProtectedRoute";

const App = () => (
    <div>
            <Routes>

                <Route path="/signup" element={<AccountTypeView/>}/>
                <Route path="/signup/contact" element={<ContactView />}/>
                <Route path="/signup/password" element={<PasswordView />}/>
                <Route path="/signup/confirmemail" element={<MailConfirmation/>}/>
                <Route path="/signup/information" element={<InformationView/>}/>

                <Route path="/signin" element={<SignInView />}/>

                <Route path='/' element={<HomeView/>}>
                    <Route index
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <ProductView />
                           </ProtectedRoute>}/>
                    <Route path='/restaurant/:id'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <RestaurantView />
                           </ProtectedRoute>}/>
                    <Route path='/createrestaurant'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <CreateRestaurantVIew />
                           </ProtectedRoute>}/>
                    <Route path='/commands'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <CommandsView />
                           </ProtectedRoute>}/>
                    <Route path='/invite'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <InviteView />
                           </ProtectedRoute>}/>
                    <Route path='/notifications'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <NotificationsView />
                           </ProtectedRoute>}/>
                    <Route path='/cart'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <CartView />
                           </ProtectedRoute>}/>
                </Route>

                <Route path='/profile'
                       element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                           <MainLayout />
                       </ProtectedRoute>}>
                    <Route path='/profile/information'
                            element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                                <AccountInformationView />
                            </ProtectedRoute>}/>
                    <Route path='/profile/statistics'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                                <StatisticsView />
                            </ProtectedRoute>}/>
                    <Route path='/profile/suggestions'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                                <SuggestionsView />
                            </ProtectedRoute>}/>
                    <Route path='/profile/delivery'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <DeliveryView />
                           </ProtectedRoute>}/>
                    <Route path='/profile/api'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <ApiView />
                           </ProtectedRoute>}/>
                    <Route path='/profile/users'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <UsersView />
                           </ProtectedRoute>}/>
                    <Route path='/profile/dashboard'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <DashboardView />
                           </ProtectedRoute>}/>
                    <Route path='/profile/logs'
                           element={<ProtectedRoute requiredUserTypes={['Client', 'Restaurateur', 'Livreur']}>
                               <LogsView />
                           </ProtectedRoute>}/>
                </Route>
            </Routes>
    </div>
);

export default App;