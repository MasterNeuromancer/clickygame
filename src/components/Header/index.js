import React from "react";
import "./style.css";

function Header(props) {
    return(
        <header>
            <h1>Click an Image to Begin!</h1>
            <p>Tally: {props.tally} |</p>
            <p>Score: {props.score}</p>
        </header>
    )
}

export default Header