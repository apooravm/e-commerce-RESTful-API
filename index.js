const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

mongoose.set('strictQuery', true);

app.use(express.json());
app.use(cors());

// Importing routes
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Connected to DB!");
	})
	.catch((err) => {
		console.log(err);
	})

// /api/user/userTest 
let id_val = 1;
app.get("/api/getProductId", (req, res) => {
	res.status(200).json({"product_id": id_val});
	id_val += 1;
})

app.use('/api/user', userRoute);

app.use('/api/auth', authRoute);

app.use('/api/product', productRoute);

app.use('/api/cart', cartRoute);

app.use('/api/order', orderRoute);

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server live on https://localhost:${port}`);
})

/*
MONGO_URL=mongodb+srv://admin:1234@mondodb-basics.sgwdtfx.mongodb.net/?retryWrites=true&w=majority
USER_PASSWORD_HASH=1234
JWT_KEY=1234
PORT=5000
*/