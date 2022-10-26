import React from "react"

export default function Card(props) {
    return (
        <div>
            <img src={props.item.imageUrl} className="card--image" />
            <div>
                <p>{props.item.location}</p>
                {/* <a href={props.item.googleMapsUrl}>View on Google Maps</a> */}
                <h3>{props.item.title}</h3>
                <p>{props.item.startDate}-{props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}