import React, { useState } from "react"
import "./Location.css"

export const LocationDetail = (props) => {
    return (
        <section className="location">
            <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
            <address className="location__address">{props.location.state.chosenLocation.address}</address>
            <div>
                <h4>Employees</h4>
                { props.location.state.chosenLocation.employees.map(e => e.name).join(", ") }
            </div>
            <div>
                <h4>Current Residents</h4>
                {
                    props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
                }
            </div>
        </section>
    )
}

/*import React, { useState, useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
// import { AnimalContext } from "./AnimalProvider"
// import { CustomerContext } from "./CustomerProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Location.css"


export const LocationDetail = (props) => {

    const { getLocationById } = useContext(LocationContext)

    const [animal, setAnimal] = useState({})
    const [location, setLocation] = useState({})
    const [customer, setCustomer] = useState({})

    const {locationId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", locationId) // locationId references the number in the url from ApplicationViews
        //const locationId = parseInt(props.match.params.locationId)
        getLocationById(locationId)
            // set state of all three places of data at once. 
            .then((response) => {
                setAnimal(response)
                setLocation(response.location)
                setCustomer(response.customer)
            })
    }, [])

    return (
        <section className="location">
            <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
            <address className="location__address">{props.location.state.chosenLocation.address}</address>
            <div>
                <h4>Employees</h4>
                { props.location.state.chosenLocation.employees.map(e => e.name).join(", ") }
            </div>
            <div>
                <h4>Current Residents</h4>
                {
                    props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
                }
            </div>
        </section>
    )
}
*/



// import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "./LocationProvider.js"
// import { AnimalContext } from "../animal/AnimalProvider.js"
// import { useHistory, useParams } from "react-router-dom"
// import "./Location.css"

// export const LocationDetail = (props) => {
//     const { getLocationById } = useContext(LocationContext)

//     const [location, setLocation] = useState({})
//     const { animals, getAnimals } = useState({})
//     const [customer, setCustomer] = useState({})

//     const {locationId} = useParams();
//     const history = useHistory();

//     useEffect(() => {
//         console.log("useEffect", locationId) // LocationId references the number in the url from ApplicationViews
//         //const LocationId = parseInt(props.match.params.LocationId)
//         getLocationById(locationId)
//             // set state of all three places of data at once. 
//             .then((response) => {
//                 setLocation(response)
//                 //setLocation(response.location)
//                 setCustomer(response.customer)
//             })
//     }, [])

//     // This return executes first in this file, then useEffect is called, 
//     // then return re-renders each time state is set in useEffect
//     return (
//         <section className="Location">
//             <h3 className="Location__name">{Location.name}</h3>
//             <div className="Location__breed">{Location.breed}</div>
//             <div className="Location__location">Location: {location.name}</div>
//             <div className="Location__owner">Customer: {customer.name}</div>
//             {/* <button onClick={
//                 () => {
//                     releaseLocation(Location)
//                         .then(() => {
//                             props.history.push("/Locations")
//                         })
//                 }
//             }>
//                 Release Location
//             </button> */}
//             {/* <button onClick={() => {
//                 history.push(`/Locations/edit/${Location.id}`)
//             }}>Edit</button> */}
//         </section>
//     )
// }