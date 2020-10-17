import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css/"
import Navbar from "./components/navbar"
import ActionList from "./components/actionsList"
import CreateAction from "./components/createAction"
import EditAction from "./components/editAction"
import CreateUser from "./components/createUser"

import "./style.css"


function App() {	
    return (	  
        <Router>
			<div className="container">
				<Navbar />
				<br />
				<Route path="/" exact component={ActionList} />
				<Route path="/create" component={CreateAction} />
				<Route path="/:id/edit" component={EditAction} />
				<Route path="/user" component={CreateUser} />
			</div>
	    </Router>
    )
}



export default App
