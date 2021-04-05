require("dotenv").config()
const express=require("express")
const cors=require("cors")
const patientRoutes=require("./Routes/patientRoutes")
const doctorRoutes = require("./Routes/doctorRoutes")
const app=express()
app.use(express.json());
app.use(cors())
const connectDB=require("./config/db")
connectDB()

app.use("/api",patientRoutes)
app.use("/api",doctorRoutes)

const port = process.env.PORT || 5000

if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"))
}

app.listen(port,()=>{
    console.log("The server is up and running")
})