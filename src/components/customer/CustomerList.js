import React, { useContext, useEffect } from "react" // useContext is the context hook tha tis used to access context exposed by a parent object
import { CustomerContext } from "./CustomerProvider.js" // gives us customers, getCustomers, addCustomers
import { CustomerCard } from "./CustomerCard.js"
import "./Customer.css"

export const CustomerList = () => {
   // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
		getCustomers()
		
    }, []) 

    return (	
		<div className="Customers">
		    {console.log("CustomerList: Render")}
            {
			    customers.map(customer => {
				    return <CustomerCard key={customer.id} customer={customer} />
			    })
            }
        </div>
    )
}
