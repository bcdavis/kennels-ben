import React, { useContext, useEffect, useState, useRef } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useHistory, useParams } from 'react-router-dom';

export const AnimalForm = () => {
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    //const breed = useRef(null);
    //const animalName = useRef(null);

    //for edit, hold on to state of animal in this view
    const [animal, setAnimal] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true); // setting state, true = the state is loaading

    const {animalId} = useParams(); // grab animalId from URL
	const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component -- each time we type a character, it will update the specific state we are editing
    const handleControlledInputChange = (event) => {
        // console.log("Event: ", event);
        // pass in event as parameter to a function and the function becomes an event listener
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newAnimal = { ...animal } // spread operator, spreads an object into separate arguments
        //animal is an object with properties. 
        //set the property to the new value

        // evaluate whatever is in the [], accesses .name dynamically
        newAnimal[event.target.name] = event.target.value // what is in the form, named exactly like it is in state

        console.log("newAnimal: ", newAnimal);
        //update state
        setAnimal(newAnimal) //  causes re-render
    }
    
    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
        getCustomers().then(getLocations).then(()=> {
            if (animalId){
                getAnimalById(animalId)
                .then(animal => {
                    setAnimal(animal)
                    setIsLoading(false)
                    // allow button to be clickable for EDITING an animal?
                })
            } else {
                setIsLoading(false)
                // allow button to be clickable for ADDING an animal?
            }
       })
    }, [])

    const constructAnimalObject = () => {
        if (parseInt(animal.locationId) === 0) {
            window.alert("Please select a location")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (animalId){
                //PUT - update
                updateAnimal({
                    id: animal.id,
                    name: animal.name,
                    breed: animal.breed,
                    locationId: parseInt(animal.locationId),
                    customerId: parseInt(animal.customerId)
                })
                .then(() => history.push(`/animals/${animal.id}`))
                .then(() => console.log("Updating Animal: ", animalId))
            } else {
                //POST - add
                addAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    locationId: parseInt(animal.locationId),
                    customerId: parseInt(animal.customerId)
                })
                .then(() => history.push("/animals"))
                .then(() => console.log("Adding new animal"))
            }
        }
    }
    
    return (
        <form className="animalForm">
            <h2 className="animalForm__title">
                {animalId ? `Edit ${animal.name}` : "Add Animal"}
            </h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" name="name" required autoFocus className="form-control" 
                    placeholder="Animal name" 
                    onChange={handleControlledInputChange} 
                    defaultValue={animal.name}/>
                    {/* ref={animalName} */}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal Breed: </label>
                    <input type="text" id="animalBreed" name="breed" required autoFocus className="form-control" placeholder="Animal breed" defaultValue={animal.breed}
                    onChange={handleControlledInputChange} />
                    {/* ref={breed} */}
                    {/* defaultValue={animal.breed}/> */}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={animal.locationId} /* <--- straight outta state */ name="locationId" /* <--- event.target.name */ id="animalLocation" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Customer: </label>
                    <select value={animal.customerId} name="customerId" id="customerAnimal" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructAnimalObject()
                }}>
            {animalId ? <>Save Animal</> : <>Add Animal</>}</button> 
        </form>
    )
}

// if animalId exists, make text = Save Animal, if not, text = Add Animal
