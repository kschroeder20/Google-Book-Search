import React from "react";

export function Card(props) {
    return (
        <div>
            <h4 className="card-title">{props.bookInfo.title}</h4>
            <p className="card-text">{props.bookInfo.author}</p>
            <p className="card-text">{props.bookInfo.description}</p>
        </div>
    )
}

export function CardImg(props) {
    return (
        <div>
            <img src={props.bookInfo.image} alt={props.bookInfo.title} />
        </div>
    )
}

export function LearnBtn(props) {
    return (
        <button {...props} id="LearnBtn" className={`btn btn-secondary btn-sm ${props.addclass}`}>Learn More</button>
    )
}

export function RemoveFavoriteBtn(props) {
    return (
        <button {...props} id="FavoriteBtn" className={`btn btn-secondary btn-sm ${props.addclass}`}>Remove as a Favorite</button>
    )
}