import React from 'react';
import "./Vignette.css"
import {Link} from "react-router-dom";

function Vignette({ details }) {
    return (
        <div className="vignette">
            <Link to={`/restaurant/${details.id}`}>
                <img src={`data:${details.mime};base64,${details.image}`} alt={details.name} className="image"/>
            </Link>
        </div>
    );
}

export default Vignette;
