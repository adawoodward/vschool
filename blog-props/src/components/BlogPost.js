import React from "react"
// import data from "../data"

export default function BlogPost(props) {
    return (
        <div className="BlogPost">
            <h2 className="BlogPost--title">{props.item.title}</h2>
            <p className="BlogPost--subTitle">{props.item.subTitle}</p>
            <p className="BlogPost--author--date">Posted by <span className="author">{props.item.author}</span> on {props.item.date}</p>
        </div>
    )
}