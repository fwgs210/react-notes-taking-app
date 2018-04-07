const express = require('express');
const app = express();
const PORT = 8080;



app.get("/login", (req,res) => {
	res.status(200).json({
		message:"hello"
	})
})

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})