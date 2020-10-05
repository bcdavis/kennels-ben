import React, { useContext, useEffect } from "react" // useContext is the context hook tha tis used to access context exposed by a parent object
import { EmployeeContext } from "./EmployeeProvider.js" // gives us employees, getEmployees, addEmployees
import { EmployeeCard } from "./EmployeeCard.js"
import "./Employee.css"

export const EmployeeList = () => {
   // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
		getEmployees()
		
    }, []) 

    return (	
		<div className="Employees">
		    {console.log("EmployeeList: Render")}
            {
			    employees.map(employee => {
				    return <EmployeeCard key={employee.id} employee={employee} />
			    })
            }
        </div>
    )
}