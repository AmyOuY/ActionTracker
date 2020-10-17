const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

// Cross Origin Resource Sharing (cors) allows ajax request to skip the same-origin policy and 
// acess resources from remote hosts  
app.use(cors())
app.use(express.json())

// Connect to local mongodb database server
mongoose.connect("mongodb://localhost/actionTracker",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => {console.log("successfully connected to mongodb database!")})
	.catch(err => {console.log("Error: " + err)})


// Set up routes usage
const userRoutes = require("./routes/user")
const actionRoutes = require("./routes/action")
app.use("/users", userRoutes)
app.use("/actions", actionRoutes)


// Start the backend node server
app.listen(process.env.Port || 3000, process.env.IP, () => {
	console.log("The action tracker server is running!");
})