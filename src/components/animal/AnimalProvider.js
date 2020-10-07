import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AnimalContext = createContext()

// Nothing is stored in the context when it's defined. At this point, it's just an empty warehouse waiting to be filled.

/*
 This component establishes what data can be used.
 */
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([]) // State hook

    /* this is what is being done in the line above: 

    // Define the variable which will hold the data.
    let animals = []

    // Define the function to be used to modify that state.
    const setAnimals = animalsData => {
        if (animalsData !== null && Array.isArray(animalsData)) {
            animals = animalsData
        }
    }
    */

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
            .then(res => res.json()) // return all animals from database
            .then(setAnimals) // call setAnimals again
    }

    const addAnimal = (animalObj) => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(animalObj) 
            // animal object will have an id (auto-generated), name, breed, customerId, and locationId
            // Can expand customer --> { id, name, address }
            // Can expand location --> { id, name, address } 
                
        })
            .then(getAnimals)
    }

    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${ id }?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `animals` state, the `addAnimals` function,
        and the `getAnimals` function as keys. This
        allows any child elements to access them.
    */

    // add the AnimalProvider to the AnimalContext, specify animals, getAnimals, and addAnimal 
    // FROM the AnimalProvider that we want to use

    // One of the properties of a context object is .Provider... 
    // we define which values we want to put in context.Provider
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}