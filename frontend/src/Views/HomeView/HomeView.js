import React from 'react';
import LandingView from "./LandingView";
import MainView from "../MainView/MainView";
import isAuthenticated from "../../isAuthenthicated"


const HomeView = (requiredUserTypes) => {
    if (isAuthenticated(requiredUserTypes)) {
        return <MainView />;
    } else {
        return <LandingView />;
    }

};
export default HomeView;