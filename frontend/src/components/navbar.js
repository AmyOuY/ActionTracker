import React, {Component} from "react"
import {Link} from "react-router-dom"
import {nav} from "bootstrap"


class Navbar extends Component {
	render(){
		return (
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/" className="navbar-brand">Action Tracker</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#links"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="links">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/" className="nav-link">Actions</Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">Create Action</Link> 
						</li>
						<li className="navbar-item">
							<Link to="/user" className="nav-link">Create User</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}


export default Navbar
