import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import apple from "../Images/Footer/AppStore.svg";
import google from "../Images/Footer/GooglePlay.webp";
import facebook from "../Images/Footer/Facebook.svg";
import twitter from "../Images/Footer/Twitter.svg";
import instagram from "../Images/Footer/Instagramme.svg";
import "./Footer.css";
import WhiteLogo from "../Logos/WhiteLogo";


export default function Footer() {
    return (
        <footer className="HomeFooter ">
            <Container fluid className="no-padding">
                <Row className="first-row">
                    <Col className="logo">
                        <WhiteLogo/>
                    </Col>
                    <Col className="downloads">
                        <a href="https://www.google.com" className="">
                            <img src={apple} alt="apple" className="download-logo"/>
                        </a>
                        <a href="https://www.google.com" className="">
                            <img src={google} alt="google" className="download-logo"/>
                        </a>
                    </Col>
                </Row>
                <Row  className="second-row">
                    <Col className="white_line"></Col>
                </Row>

                <Row className="third-row">
                    <Col className="socials">
                        <a href="https://www.facebook.com">
                            <img src={facebook} alt="Facebook" className="app-logo"/>
                        </a>
                        <a href="https://www.twitter.com">
                            <img src={twitter} alt="Twitter" className="app-logo"/>
                        </a>
                        <a href="https://www.instagram.com">
                            <img src={instagram} alt="Instagram" className="app-logo"/>
                        </a>
                    </Col>
                    <Col className="conditions">
                        <a href="/frontend/public" className="text-decoration-none text-light mr-7 text">Politique de confidentialité</a>
                        <a href="/frontend/public" className="text-decoration-none text-light mr-7 text">Conditions</a>
                        <a href="/frontend/public" className="text-decoration-none text-light mr-7 text">Tarifs</a>
                        <a href="/frontend/public" className="text-decoration-none text-light text">Ne vendez pas et ne partagez pas mes informations personnelles</a>
                    </Col>
                </Row>

                <Row className="last_row">
                    <Col className="col-12 col-md-auto no-padding">
                        Ce site est protégé par reCAPTCHA. Par ailleurs, la
                        <a className="text-decoration-none text-light" href="//policies.google.com/privacy"> Politique de confidentialité </a>
                         et les
                        <a  className="text-decoration-none text-light" href="//policies.google.com/terms"> Conditions d'utilisation de Google s'appliquent</a>
                    </Col>
                    <Col className="col-12 col-md-auto copy">
                    <p>&copy; 2024 Cesi Eats Inc.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
