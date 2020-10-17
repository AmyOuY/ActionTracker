import React, {Component} from "react"
import axios from "axios"
import Action from "./action"


class ActionsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			actions: []
		}
		
		this.deleteAction = this.deleteAction.bind(this)
	}
	
	
	componentDidMount(){
		axios.get("https://webdeveloperbootcamp-ppica.run-us-west2.goorm.io/actions")
			.then(response => {
				this.setState({
					actions: response.data
				})
			})
			.catch(err => console.log("Error: " + err))
	}
	
	
	deleteAction(id) {
		axios.delete("https://webdeveloperbootcamp-ppica.run-us-west2.goorm.io/actions/" + id)
			.then(response => console.log(response.data))
			.catch(err => console.log("Error: " + err))
		
		this.setState({
			actions: this.state.actions.filter(action => action._id !== id)
		})
	}
	
	
	actionsList() {
		return this.state.actions.map(action => {
			return <Action key={action._id} action={action} deleteAction={this.deleteAction} />
		})											   		
	}
											   
											   
	render() {
		return(
			<div>
				<h3 class="title">Logged Actions</h3>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>User Name</th>
							<th>Description</th>
							<th>Duration (minutes)</th>
							<th>Date</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.actionsList()}
					</tbody>
				</table>
			</div>
		)	
	}
}
	

export default ActionsList