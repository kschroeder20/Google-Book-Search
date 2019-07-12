import React from "react";

export function Container(props) {
    return (
        <div className="container">{props.children}</div>
    )
}

export function Row(props) {
    return (
        <div className={`row col-${props.size} offset-${props.offsetSize} ${props.addclass}`}>{props.children}</div>
    )
}

export function Column(props) {
    return (
        <div className={`col-${props.size} ${props.addclass}`}>{props.children}</div>
    )
}
