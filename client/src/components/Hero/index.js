import React from "react";
import "./style.css";

function Hero(props) {
    return (
        <div id="jumbotronContent" className="jumbotron jumbotron-fluid">
            <div>
                <h1 className="display-11" id="instructionHeadline">{props.title}</h1>
                <h3 className="lead" id="introParagraph">
                    {props.subtitle}
                </h3>
            </div>
        </div>
    )
}

export default Hero;