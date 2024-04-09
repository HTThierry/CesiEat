import React from 'react';
import './NotificationsView.css';
import BlackHeader from "../../Components/Headers/BlackHeader";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { FaBell } from "react-icons/fa";

const NotificationsView = () => {
    const notifications = [
        { label: 'XXXX', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
        { label: 'XXXX', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
    ];
/*
    const [notifications, setNotifications] = useState([]);

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
                console.error("Could not fetch notifications: ", error);
            }
        };

        fetchNotifications();
    }, []);

*/

    return (
        <div className="notifications-view CesiEatsMedium">
            <BlackHeader
                leftIcons={
                    <div className="left-icons">
                        <Navbar/>
                    </div>
                }
            />
            <div className="container">
                <div className="title">
                    <FaBell/> Notifications :
                </div>
                {notifications.map((notification, index) => (
                    <div key={index} className="notification-item">
                        {notification.label}: {notification.message}
                        <hr/>
                    </div>
                ))}
            </div>
            <div className="backgroundRight"></div>
            <Footer/>
        </div>

    );
};

export default NotificationsView;

