import React, {Component} from "react"
import axios from "axios"


class CreateUser extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: ""
		}
		
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	
	
	onChange(event){
		const {name, value} = event.target
		this.setState({[name]: value})
	}
	
	
	onSubmit(event) {
		event.preventDefault()
		
		const user = {username: this.state.username}
		
		console.log(user)
		
		axios.post("https://webdeveloperbootcamp-ppica.run-us-west2.goorm.io/users", user)
			.then(res => console.log(res.data))
			.catch(err => console.log("Error: " + err))
		
		this.setState({username: ""})
	}
	
	
	render() {
		return (
			<div class="form">
				<h3 class="title">Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>User Name: </label>
						<input 
							className="form-control"
							type="text"
							required
							name="username"
							value={this.state.username}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="Create New User" className="btn btn-primary btn-block" />
					</div>
				</form>
			</div>
		)
	}
}


export default CreateUser