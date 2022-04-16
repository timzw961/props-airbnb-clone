import React from "react"
import star from "../images/star.png"

export default function Card(props){

    let badgeText
    if (props.card.openSpots === 0){
        badgeText = "SOLD OUT"

    }else if (props.card.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className = "card">
            {badgeText && <div className = "card--badge">{badgeText}</div>}
            
            <img className = "card--title" src={require(`../images/${props.card.coverImg}`)}/>
            
            <div className="card--stats">
                <img className = "card--star" src={star}/>
                <span className = "card--rating">{props.card.stats.rating}</span>
                <span className = "gray"> {" (" + props.card.stats.reviewCount + ") · "}  </span>
                <span className = "gray"> {" " + props.card.location} </span>
            </div>
            
            <p className = "card--title">
                {props.card.title}
            </p>
            <p className = "card--price">
                <span className="bold"> From ${props.card.price} </span> / person
            </p>

        </div>
    )
}

/*
id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
*/