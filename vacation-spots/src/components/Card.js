// - Change the background color of your card depending on the `timeToGo` property.
// - Give each card 1, 2, or 3 dollar signs (`$`) depending on if it's less than $500, less than $1000, or more than $1000

import React from "react"

export default function Card(props) {
    return (
        <div className="cardContainer">
            {props.item.timeToGo === "Fall" && 
            <div className="card" style={{backgroundColor: "#FED8B1"}}>
                <div>
                    <img src={props.item.imgUrl} className="image" />
                    <p className="place">Destination: {props.item.place}</p>
                    <p className="price">Price: {props.item.price}
                    {props.item.price <= 500 && <p className="price">$</p>}
                    {props.item.price <= 1000 && props.item.price > 500 && <p className="price">$$</p>}
                    {props.item.price > 1000 && <p className="price">$$$</p>}</p>
                    <p className="timeToGo">Best time to go: {props.item.timeToGo}</p>
                </div>
            </div>}
            {props.item.timeToGo === "Summer" && 
            <div className="card" style={{backgroundColor: "lightgreen"}}>
                <div>
                    <img src={props.item.imgUrl} className="image" />
                    <p className="place">Destination: {props.item.place}</p>
                    <p className="price">Price: {props.item.price}
                    {props.item.price <= 500 && <p className="price">$</p>}
                    {props.item.price <= 1000 && props.item.price > 500 && <p className="price">$$</p>}
                    {props.item.price > 1000 && <p className="price">$$$</p>}</p>
                    <p className="timeToGo">Best time to go: {props.item.timeToGo}</p>
                </div>
            </div>}
            {props.item.timeToGo === "Winter" && 
            <div className="card" style={{backgroundColor: "skyblue"}}>
                <div>
                    <img src={props.item.imgUrl} className="image" />
                    <p className="place">Destination: {props.item.place}</p>
                    <p className="price">Price: {props.item.price}
                    {props.item.price <= 500 && <p className="price">$</p>}
                    {props.item.price <= 1000 && props.item.price > 500 && <p className="price">$$</p>}
                    {props.item.price > 1000 && <p className="price">$$$</p>}</p>
                    <p className="timeToGo">Best time to go: {props.item.timeToGo}</p>
                </div>
            </div>}
            
            {props.item.timeToGo === "Spring" && 
            <div className="card" style={{backgroundColor: "pink"}}>
                <div>
                    <img src={props.item.imgUrl} className="image" />
                    <p className="place">Destination: {props.item.place}</p>
                    <p className="price">Price: {props.item.price}
                    {props.item.price <= 500 && <p className="price">$</p>}
                    {props.item.price <= 1000 && props.item.price > 500 && <p className="price">$$</p>}
                    {props.item.price > 1000 && <p className="price">$$$</p>}</p>
                    <p className="timeToGo">Best time to go: {props.item.timeToGo}</p>
                </div>
            </div>}
        </div>
    )
}