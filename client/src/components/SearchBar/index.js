import React from "react";
import "./style.css";

export function SearchBar(props) {
    return (
        <div className="form-group">
            <label>Search by Book Title</label>
            <input {...props} className="form-control" id="formGroupExampleInput" placeholder="Title (required)" />
        </div>
    )
}

export function SearchBtn(props) {
    return (
        <button {...props} id="bookSubmitBtn" className="btn btn-light">Submit</button>
    )
}

