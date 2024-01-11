import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'

dotenv.config()

const app = express()

//connect databse
connectDB();

//middleware
app.use(express.json())

//routes
app.use('/api/v1/auth', authRoute);

//rest api
app.get('/',(req,res)=>{
    res.send("Hello!!")
})

app.listen(process.env.PORT,()=>{
    console.log("Server is running at 8080")
})

