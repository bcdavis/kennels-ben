import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home.js"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"
import { AnimalForm } from "./animal/AnimalForm.js"
import { AnimalDetail } from "./animal/AnimalDetail.js"

import { CustomerProvider } from "./customer/CustomerProvider.js"
import { CustomerList } from "./customer/CustomerList.js"
//import { Customer } from "./customer/CustomerCard.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js"
import { EmployeeForm } from "./employee/EmployeeForm.js"
import { EmployeeDetail } from "./employee/EmployeeDetail.js"
//import { Employee } from "./employee/EmployeeCard.js"
import { LocationProvider } from "./location/LocationProvider.js"
import { LocationList } from "./location/LocationList.js"
import { LocationDetail } from "./location/LocationDetail.js"
//import { Location } from "./location/Location.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the Kennel home page when http://localhost:3000/ */}
            <Route exact path="/">
                <Home greeting="Welcome to Nashville Kennels"/>
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider> 

            <AnimalProvider>
                <Route exact path="/animals/:animalId(\d+)">
                {/* (\d+) converts character(s) into digits*/}   
                    <AnimalDetail />
                </Route>
            </AnimalProvider>

            {/* Render the add animals form when http://localhost:3000/animals/create */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* 
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>

                <CustomerProvider>
                    <LocationProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </LocationProvider>
                </CustomerProvider>

            </AnimalProvider>  
            */}

            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <AnimalProvider>
                    <EmployeeProvider>
                        <Route exact path="/locations">
                            <LocationList />
                        </Route>

                        
                        <Route path="/locations/:locationId(\d+)" render={
                            props => <LocationDetail {...props} />
                        } />
                    </EmployeeProvider>
                </AnimalProvider>
            </LocationProvider>

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <AnimalProvider>
                    <LocationProvider>
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} /> /* This passes in the history array as a prop?*/
                        }>
                        </Route>
                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} /> /* This passes in the history array as a prop?*/
                        }>
                        </Route>
                        {/* New route for showing employee details */}
                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        }>
                        </Route>
                    </LocationProvider>
                </AnimalProvider>
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