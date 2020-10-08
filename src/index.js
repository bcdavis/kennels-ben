import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from "./components/Kennel.js"
import "./index.css"
/* render 
  What you want to render
  Where you want to render it

  <kennel kennelName="NSS Kennel"/>
          { ^ This is a parameter that is accessed by props.kennelName}

*/

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Kennel />
      </Router>
  </React.StrictMode>,
  document.getElementById("root"),
  console.log("make sure kennel-api is running!?")
)
