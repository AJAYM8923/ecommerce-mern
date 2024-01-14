import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'


const app=express()


//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))




//config env
dotenv.config()


//database config
connectDB();

//routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product",productRoutes)


app.get('/',function(req,res){
    res.send("<h1>welcome to eccomerce app</h1>")
});
//port
const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`.bgCyan.white)
})