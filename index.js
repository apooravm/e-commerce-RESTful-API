const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());

// Importing routes
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Connected to DB!");
	})
	.catch((err) => {
		console.log(err);
	})

// /api/user/userTest 
app.use('/api/user', userRoute);

app.use('/api/auth', authRoute);

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server live on https://localhost:${port}`);
})