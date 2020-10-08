import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Animal.css"

export const AnimalDetail = (props) => {
    const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

    const [animal, setAnimal] = useState()
    //const [location, setLocation] = useState({})
    //const [customer, setCustomer] = useState({})

    const {animalId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", animalId) // animalId references the number in the url from ApplicationViews
        //const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
            // set state of all three places of data at once. 
            .then((response) => {
                setAnimal(response) // already have customer and location in animal state
                //setLocation(response.location)
                //setCustomer(response.customer)
            })
    }, [])

    // This return executes first in this file, then useEffect is called, 
    // then return re-renders each time state is set in useEffect
    return (
        <section className="animal">
            <h3 className="animal__name">{animal?.name}</h3>
            <div className="animal__breed"><strong>Breed:</strong> {animal?.breed}</div>
            {/* ? null safe operator 
                place after expected object, tell program to not die if animal is not an object?
            */}
            <div className="animal__location"><strong>Location:</strong> {animal?.location.name}</div>
            <div className="animal__owner"><strong>Customer:</strong> {animal?.customer.name}</div>
            <button onClick={
                () => {
                    releaseAnimal(animal.id) // also works with animalId
                        .then(() => {
                            history.push("/animals")
                        })
                }
            }>Release Animal</button>
            
            <button onClick={() => {
                // if animal id is in url, we will use the animalForm to edit an animal, 
                // otherwise, we create a new animal
                history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}