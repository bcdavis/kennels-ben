import React, { useState, createContext } from "react"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([]) // State hook


    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json()) // return all  Customers from database
            .then(setCustomers) // call setAnimals again
    }

    const addCustomer = (customerObj) => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(customerObj) 
                
        })
            .then(getCustomers)
    }

    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}