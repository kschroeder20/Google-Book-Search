import React from "react";
import "./style.css";

export function SearchBar(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input {...props} className="form-control" id="formGroupExampleInput" placeholder={props.placeholder} />
        </div>
    )
}

export function SearchBtn(props) {
    return (
        <button {...props} id="bookSubmitBtn" className="btn btn-light">Submit</button>
    )
}

