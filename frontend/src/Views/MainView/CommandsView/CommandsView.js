import React from "react";
import "./CommandsView.css"
import BlackHeader from "../../Components/Headers/BlackHeader";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {FaBell } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import {Link} from "react-router-dom";

const CommandsView = () => {
    const commands = [
        { label: 'XXXX', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
        { label: 'XXXX', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
    ];
    /*
        const [commands, setNotifications] = useState([]);

        useEffect(() => {
            const fetchNotifications = async () => {
                try {
                    const response = await fetch('');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setNotifications(data);
                } catch (error) {
                    console.error("Could not fetch commands: ", error);
                }
            };

            fetchNotifications();
        }, []);

    */

    return (
        <div className="commands-view CesiEatsMedium">
            <BlackHeader
                leftIcons={
                    <div className="left-icons">
                        <Navbar/>
                    </div>
                }
            />
            <div className="container">
                <div className="title">
                    <FaBell/> Historique de commandes :
                </div>
                {commands.map((command, index) => (
                    <>
                        <div key={index} className="command-item">
                            {command.label}: {command.message}
                            <Link to="/">
                                <FaCircleArrowRight className="command-arrow"/>
                            </Link>
                        </div>
                        <hr/>
                    </>
                ))}
            </div>
            <div className="backgroundRight"></div>
            <Footer/>
        </div>

    );
}


export default CommandsView;