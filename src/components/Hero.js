import React from "react"
import grid from "../images/grid-photo.png"

export default function Hero(){
    return (
        <section className = "hero">
            <img className = "hero--image" src={grid}/>
            <h1 className = "hero--title"> Online Experiences</h1>
            <p className ="hero--text"> 
                Join unique interactive activities led by one-of-a-kind hosts without leaving home.

            </p>
        </section>
    )
}