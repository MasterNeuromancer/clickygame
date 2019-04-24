import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div
            className="tile-card col-md-4"
            style={{ backgroundImage: `url(${props.image})` }}
            onClick={() => props.handleTileClick(props.id)}
        >
            <p>{props.id} : {props.name}</p>
        </div>
    )
}

export default Card;