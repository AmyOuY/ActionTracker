import React, {Component} from "react"
import axios from "axios"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


class EditAction extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			description: "",
			duration: 0,
			date: new Date(),
			users: []
		}
		
		this.onChange = this.onChange.bind(this)
		this.onChangeDate = this.onChangeDate.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	
	
	componentDidMount(){		
		axios.get("https://webdeveloperbootcamp-ppica.run-us-west2.goorm.io/actions/" + this.props.match.params.id)
			.then(response => {				
				this.setState({
					username: response.data.username,
					description: response.data.description,
					duration: response.data.duration,
					date: new Date(response.data.date)
				})
			})
			.catch(err => console.log("Error: " + err))
		
		axios.get("https://webdeveloperbootcamp-ppica.run-us-west2.goorm.io/users")
			.then(response => {
				if (response.data.length > 0){
					this.setState({
						users: response.data.map(user => user.username)
					})
				}
		})
	}
	
	
	onChange(event){
		const {name, value} = event.target
		this.setState({[name] : value})
	}
	
	
	onChangeDate(date){
		this.setState({date: date})
	}
	
	
	onSubmit(event){
		event.preventDefault()
		
		const action = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		}
		
		console.log(action)
		
		axios.post("https://webdeveloperbootcamp-ppica.run-us-west2.goorm.io/actions/" + this.props.match.params.id + "/update", action)
			.then(response => console.log(response.data))
			.catch(err => console.log("Error: " + err))
		
		window.location = "/"
	}
	
	
	render() {
		return (
			<div class="form">
				<h3 class="title">Edit Action Log</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>User Name: </label>
						<select
							className="form-control"
							ref="userInput"
							required
							name="username"
							value={this.state.username}
							onChange={this.onChange}
						>
							{this.state.users.map(function(user) {
								return <option key={user} value={user}>
									{user}
								</option>
							})}
						</select>
					</div>
					<div className="form-group">
						<label>Description: </label>
						<input 
							className="form-control"
							type="text"
							required
							name="description"
							value={this.state.description}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Duration (minutes): </label>
						<input 
							className="form-control"
							type="text"
							required
							name="duration"
							value={this.state.duration}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Date: </label>
						<div>
							<DatePicker 
								selected={this.state.date}
								onChange={this.onChangeDate}
							/>
						</div>
					</div>
					<div className="form-group">
						<input type="submit" value="Edit Action" className="btn btn-primary btn-block" />
					</div>
				</form>
			</div>
		)
	}
}


export default EditAction