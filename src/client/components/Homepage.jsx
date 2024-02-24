import React from "react"
import { Link } from "react-router-dom"
import "../styling/Homepage.less"
import ContactForm from "./ContactForm"


export default function Homepage() {


    return (
        <main id="homeMain">
            <ul className="homeCardsContainer">
            
                <li className="homeCardLi">Tradetivity
                <Link to="https://tradetivity.onrender.com/" target="blank">
                <div className="homeCards">
                   <img src="src/assets/tradetivity image.jpg" alt="" />
                </div>
                </Link>
                </li>
                <li className="homeCardLi">Card 2
                <div className="homeCards">
                    Coming Soon
                </div>
                </li >
                <li className="homeCardLi">Card 3
                <div className="homeCards">Coming Soon</div>
                </li>
                <li className="homeCardLi">Card 4
                <div className="homeCards">Coming Soon</div>
                </li>
            </ul>
            <ContactForm />
        </main>
    )
}