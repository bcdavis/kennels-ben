import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home.js"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { CustomerList } from "./customer/CustomerList.js"
//import { Customer } from "./customer/CustomerCard.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js"
//import { Employee } from "./employee/EmployeeCard.js"
import { LocationProvider } from "./location/LocationProvider.js"
import { LocationList } from "./location/LocationList.js"
//import { Location } from "./location/Location.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the Kennel home page when http://localhost:3000/ */}
            <Route exact path="/">
                <Home kennelName="NSS Kennel"/>
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider> 

            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider> 

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            {/* Render the customer list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route export path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}

/* exact is needed on the first route, otherwise it will also match the other two routes, 
and the LocationList will be the only component rendered, no matter what the URL is. */

/* 
The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new 
Link element in your application with a new URL, then you must create a matching Route element.
*/