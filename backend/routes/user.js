const express = require("express")
const router = express.Router()
const User = require("../models/user")


// Get all users
router.route("/").get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json("Error: " + err))
})



// Post new user
router.route("/").post((req, res) => {
	const username = req.body.username
	const user = new User({username})
	
	user.save()
		.then(() => res.json("User added!"))
		.catch(err => res.status(400).json("Error: " + err))
})


module.exports = router