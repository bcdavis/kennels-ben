import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Animal.css"

export const AnimalDetail = (props) => {
    const { getAnimalById } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({})
    const [location, setLocation] = useState({})
    const [customer, setCustomer] = useState({})

    const {animalId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", animalId) // animalId references the number in the url from ApplicationViews
        //const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
            // set state of all three places of data at once. 
            .then((response) => {
                setAnimal(response)
                setLocation(response.location)
                setCustomer(response.customer)
            })
    }, [])

    // This return executes first in this file, then useEffect is called, 
    // then return re-renders each time state is set in useEffect
    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {location.name}</div>
            <div className="animal__owner">Customer: {customer.name}</div>
            {/* <button onClick={
                () => {
                    releaseAnimal(animal)
                        .then(() => {
                            props.history.push("/animals")
                        })
                }
            }>
                Release Animal
            </button> */}
            {/* <button onClick={() => {
                history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button> */}
        </section>
    )
}