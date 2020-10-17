import React from "react"
import {Link} from "react-router-dom"


function Action(props) {
	return (		
		<tr>
			<td>{props.action.username}</td>
			<td>{props.action.description}</td>
			<td>{props.action.duration}</td>
			<td>{props.action.date.substring(0, 10)}</td>
			<td>
				<Link to={"/" + props.action._id + "/edit"}>edit</Link> | 
				<Link to="#" onClick={() => {props.deleteAction(props.action._id)}}> delete</Link>
			</td>
		</tr>		
	)
} 


export default Action
