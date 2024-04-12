import React from 'react';
import LandingView from "./LandingView";
import MainView from "../MainView/MainView";
import isAuthenticated from "../../ProtectedRoute"


const HomeView = (requiredUserTypes) => {

    if (isAuthenticated(requiredUserTypes)) {
        return <MainView />;
    } else {
        return <LandingView />;
    }

};
export default HomeView;