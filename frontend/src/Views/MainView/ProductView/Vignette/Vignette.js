import React from 'react';
import "./Vignette.css"
import {Link} from "react-router-dom";

function Vignette({ details }) {
    return (
        <div className="vignette">
            <Link to={`/restaurant/${details.id}`}>
                <img src={details.imageUrl} alt={details.name} className="image"/>
            </Link>
        </div>
    );
}

export default Vignette;
