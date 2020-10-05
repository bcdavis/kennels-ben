import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([]) // State hook


    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json()) // return all  Locations from database
            .then(setLocations) // call setAnimals again
    }

    const addLocation = (locationObj) => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(locationObj) 
                
        })
            .then(getLocations)
    }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}