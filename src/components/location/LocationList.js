import React, { useContext, useEffect } from "react" // useContext is the context hook tha tis used to access context exposed by a parent object
import { LocationContext } from "./LocationProvider.js" // gives us Locations, getLocations, addLocations
import { LocationCard } from "./LocationCard.js"
import "./Location.css"

export const LocationList = () => {
   // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
		getLocations()
		
    }, []) 

    return (	
		<div className="Locations">
		    {console.log("LocationList: Render")}
            {
			    locations.map(location => {
				    return <LocationCard key={location.id} location={location} />
			    })
            }
        </div>
    )
}