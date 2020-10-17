const express = require("express")
const router = express.Router()
const Action = require("../models/action")


// Get all actions
router.route("/").get((req, res) => {
	Action.find()
		.then(actions => res.json(actions))
		.catch(err => res.status(400).json("Error: " + err))
})


// Get specific action with id as input
router.route("/:id").get((req, res) => {
	Action.findById(req.params.id)
		.then(action => res.json(action))
		.catch(err => res.status(400).json("Error: " + err))
})


// Post new action
router.route("/").post((req, res) => {
	const username = req.body.username
	const description = req.body.description
	const duration = Number(req.body.duration)
	const date = Date.parse(req.body.date)
	
	const action = new Action({
		username,
		description,
		duration,
		date
	})
	
	action.save()
		.then(() => res.json("Action added!"))
		.catch(err => res.status(400).json("Error: " + err))
})


// Update specific action with id as input
router.route("/:id/update").post((req, res) => {
	Action.findById(req.params.id)
		.then(action => {
			action.username = req.body.username;
			action.description = req.body.description;
			action.duration = Number(req.body.duration);
			action.date = Date.parse(req.body.date);
		
			action.save()
				.then(() => res.json("Action updated!"))
				.catch(err => res.status(400).json("Error: " + err))
			
		})
		.catch(err => res.status(400).json("Error: " + err))
})


// Delete specific action with id as input
router.route("/:id").delete((req, res) => {
	Action.findByIdAndDelete(req.params.id)
		.then(() => res.json("Action deleted!"))
		.catch(err => res.status(400).json("Error: " + err))
})


module.exports = router