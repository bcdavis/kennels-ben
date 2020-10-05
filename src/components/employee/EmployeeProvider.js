import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([]) // State hook


    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json()) // return all  Employees from database
            .then(setEmployees) // call setAnimals again
    }

    const addEmployee = (employeeObj) => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(employeeObj) 
                
        })
            .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}