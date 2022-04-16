import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

export default function App(){

    const cardElements = data.map(card => {
        return (
            <Card 
                key={card.id}
                card={card}
            />
        )
    })

    return (
        <div className="body">
            <Navbar/>
            <Hero />
            <section className = "card--list"> 

                {cardElements}
            </section>
            
        </div>
    )
}