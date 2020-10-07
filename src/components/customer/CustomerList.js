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
		<div className="customers">
            <div className="title--customer">
                <h1>Customers</h1>
            </div>
		    {console.log("CustomerList: Render")}
            <article className="customerList">
                {
                    customers.map(customer => {
                        return <CustomerCard key={customer.id} customer={customer} />
                    })
                }
            </article>
        </div>
    )
}
