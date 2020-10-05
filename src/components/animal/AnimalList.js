// React component flow:
/**
 * 1. Imports
 */

import React, { useContext, useEffect } from "react" // useContext is the context hook tha tis used to access context exposed by a parent object
import { AnimalContext } from "./AnimalProvider.js" // gives us animals, getAnimals, addAnimals
import { AnimalCard } from "./AnimalCard.js"
import "./Animal.css"

/**
 * 2. Define export
 */

export const AnimalList = () => {
   // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    // defines a set of data 'animals' and a method to update/access it 'getAnimals'
    // 'animals' is accessing the animals value in AnimalContext from AnimalProvider
	
	//useEffect - reach out to the api for data, update state, and re-renders the component
    useEffect(() => {
        console.log("AnimalList: useEffect - getAnimals")
		getAnimals()
		
    }, []) 
    // ^^ Dependency array:
    // Not used - useEffect runs after every render
    // Empty array - useEffect only runs after first render
    // Array with dependencies - useEffect will run if dependency changes (state)
    

/**
 * 3. Define the return
 */

    return (	

        // Use the .map() array method to iterate the array of animals and generate HTML 
        // for each one by invoking the AnimalCard component function.
		<div className="animals">
		    {console.log("AnimalList: Render")}
            {
			    animals.map(animal => {
                    // First run, animals is empty, so calls useEffect to access to animals
                    //      useEffect calls getAnimals, it fills the animals 
                    // This runs a second time with data in 'animals'
                    //      the dependency array is filled, so useEffect is not called (unless the content of 'animals' is changed)
				    return <AnimalCard key={animal.id} animal={animal} />

                    // when looping over items in react, give each item a unique identifier (set each item's key = animal.id)
			    })
            }
        </div>
    )
}
