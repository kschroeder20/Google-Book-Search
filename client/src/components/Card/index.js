import React from "react";

export function Card(props) {
    let authorsArr = props.bookInfo.authors;
    let authors = "";
    if (authorsArr && authorsArr.length === 1) {
        authors = authorsArr[0];
    } else if (authorsArr && authorsArr.length > 1) {
        for (let i = 0; i < authorsArr.length; i++) {
            authors += ` ${authorsArr[i]}`
        }
    }
    return (
        <div>
            <h4 className="card-title" key={props.bookInfo.etag}>{props.bookInfo.title}</h4>
            <p className="card-text" key={props.bookInfo.id}>{authors}</p>
            <p className="card-text" key={props.bookInfo.subtitle}>{props.bookInfo.description}</p>
        </div>
    )
}

export function CardImg(props) {
    return (
        <div>
            <img src={props.bookInfo.imageLinks.thumbnail} alt={props.bookInfo.title} />
        </div>
    )
}

export function LearnBtn(props) {
    return (
        <button {...props} id="LearnBtn" className={`btn btn-secondary btn-sm ${props.addclass}`}>Learn More</button>
    )
}

export function FavoriteBtn(props) {
    return (
        <button {...props} id="FavoriteBtn" className={`btn btn-secondary btn-sm ${props.addclass}`}>Add as a Favorite</button>
    )
}