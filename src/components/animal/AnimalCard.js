import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal-card--name">
            <Link to={`/animals/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        <div className="animal-card--breed">{ animal.breed }</div>
    </section>
)

/*
// 'animal' is passed in by .map in return of animalList on line 50 of AnimalList.js
export const AnimalCard = ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <address className="location__address">{animal.location.name}</address>
    </section>
)
*/

/*
// another way to do it if we want to pass in multiple things

export const AnimalCard = (props) => (
    <section className="animal">
        <h3 className="animal__name">{props.animal.name}</h3>
        <div className="animal__breed">{props.animal.breed}</div>
        <address className="location__address">{props.location}</address>
    </section>
)

*/

/*
// AND another way to do it 

export const AnimalCard = ({animal, location}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <address className="location__address">{location}</address>
    </section>
)

*/