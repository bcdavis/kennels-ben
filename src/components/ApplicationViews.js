import React from "react"
import { Route } from "react-router-dom"
import { Kennel } from "./Kennel.js"
import { AnimalCard } from "./animal/AnimalCard.js"
import { Customer } from "./customer/Customer.js"
import { Employee } from "./employee/Employee.js"
import { Location } from "./location/Location.js"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the Kennel home page when http://localhost:3000/ */}
            <Route exact path="/">
                <Kennel />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <Location />
            </Route>

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees">
                <Employee />
            </Route>

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers">
                <Customer />
            </Route>
        </>
    )
}

/* exact is needed on the first route, otherwise it will also match the other two routes, 
and the LocationList will be the only component rendered, no matter what the URL is. */

/* 
The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new 
Link element in your application with a new URL, then you must create a matching Route element.
*/