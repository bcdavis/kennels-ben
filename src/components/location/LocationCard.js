import React from "react"
//import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({ location }) => (
    /*<section className="location">

        <Link className="location__link"
            to={{
                pathname: `/locations/${location.id}`,
                state: { chosenLocation: location }
            }}>
            <h2 className="location__name">{location.name}</h2>
        </Link>
    </section>*/
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
    </section>
)