import React, { useContext, useEffect } from "react" // useContext is the context hook tha tis used to access context exposed by a parent object
//import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider.js" // gives us employees, getEmployees, addEmployees
import { EmployeeCard } from "./EmployeeCard.js"
import "./Employee.css"

export const EmployeeList = (props) => { // we will pass in the history array as a property of props
   // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    //const history = useHistory()

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
		getEmployees()
		
    }, []) 

    return (
        <div className="employees">
            <div className="titleAndButton--employee">
                <h1>Employees</h1>
                <button onClick={() => {props.history.push("/employees/create")}}>
                    Add Employee
                </button>
            </div>
            <article className="employeeList">
                {
                    employees.map(employee => {
                        return <EmployeeCard key={employee.id} employee={employee} />
                    })
                }
            </article>
        </div>
    )
}