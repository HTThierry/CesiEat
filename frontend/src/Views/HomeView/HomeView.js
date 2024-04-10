import React from 'react';
import LandingView from "./LandingView";
import MainView from "../MainView/MainView";

const HomeView = () => {
    const token = true;

    if (token) {
        return <MainView />;
    } else {
        return <LandingView />;
    }
};

export default HomeView;