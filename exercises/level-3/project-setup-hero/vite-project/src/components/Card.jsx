import React from "react";

export default function Card(){
    return(
        <div className="Card">
            <img src="image.png" className="card--image"/>
            <div className="card--stats">
                <img src=""/>
                <span>5.0</span>
                <span>(6) </span>
                <span>USA</span>
                <p>Life Lessons with Katie Zaferes</p>
                <p>From $136 per person</p>
            </div>
        </div>
    )
}