import React from "react";
import apple from "./Images/AppStore.svg";
import google from "./Images/GooglePlay.webp";
import facebook from "./Images/Facebook.svg";
import twitter from "./Images/Twitter.svg";
import instagram from "./Images/Instagram.svg";
import "./Footer.css";
import WhiteLogo from "../Logos/WhiteLogo";


export default function Footer() {
    return (
        <footer className="HomeFooter ">
            <div className="no-padding">
                <div className="first-row">
                    <div className="logo no-padding">
                        <WhiteLogo/>
                    </div>
                    <div className="downloads no-padding">
                        <a href="https://www.google.com" className="no-padding">
                            <img src={apple} alt="apple" className="download-logo no-padding"/>
                        </a>
                        <a href="https://www.google.com" className="no-padding">
                            <img src={google} alt="google" className="download-logo no-padding"/>
                        </a>
                    </div>
                </div>
                <div  className="second-row">
                    <div className="white_line"></div>
                </div>

                <div className="third-row">
                    <div className="socials">
                        <a href="https://www.facebook.com">
                            <img src={facebook} alt="Facebook" className="app-logo"/>
                        </a>
                        <a href="https://www.twitter.com">
                            <img src={twitter} alt="Twitter" className="app-logo"/>
                        </a>
                        <a href="https://www.instagram.com">
                            <img src={instagram} alt="Instagram" className="app-logo"/>
                        </a>
                    </div>
                    <div className="conditions">
                        <a href="https://www.google.com" className="text-decoration-none text-light mr-7 text">Politique de confidentialité</a>
                        <a href="https://www.google.com" className="text-decoration-none text-light mr-7 text">Conditions</a>
                        <a href="https://www.google.com" className="text-decoration-none text-light mr-7 text">Tarifs</a>
                        <a href="https://www.google.com" className="text-decoration-none text-light text">Ne vendez pas et ne partagez pas mes informations personnelles</a>
                    </div>
                </div>

                <div className="last_row">
                    <div className="captcha no-padding">
                        Ce site est protégé par reCAPTCHA. Par ailleurs, la
                        <a className="text-decoration-none text-light" href="//policies.google.com/privacy"> Politique de confidentialité </a>
                         et les
                        <a  className="text-decoration-none text-light" href="//policies.google.com/terms"> Conditions d'utilisation de Google s'appliquent</a>
                    </div>
                    <div className="copy">
                        <p>&copy; 2024 Cesi Eats Inc.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
