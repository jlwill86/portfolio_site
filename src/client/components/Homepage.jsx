import React from "react"

import "../styling/Homepage.less"
import ContactForm from "./ContactForm"


export default function Homepage() {


    return (
        <main id="homeMain">
            <ul className="homeCardsContainer">
            
                <li className="homeCardLi">Card 1
                <div className="homeCards"></div>
                </li>
                <li className="homeCardLi">Card 2
                <div className="homeCards"></div>
                </li >
                <li className="homeCardLi">Card 3
                <div className="homeCards"></div>
                </li>
                <li className="homeCardLi">Card 4
                <div className="homeCards"></div>
                </li>
            </ul>
            <ContactForm />
        </main>
    )
}