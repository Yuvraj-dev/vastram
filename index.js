const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { greetings } = require('./api/middlewares/greetings')
const { Routes } = require('./api/routes')
const { mongoConnect } = require('./config/MongoConnect')


//1. Set the enviromnment variables from .env file to process.env object
dotenv.config({ path: './config/config.env'})

//2. Welcome the users to the app by greeting them using a middleware
app.use(greetings)
app.use(express.json())

//3. Initialize Routes
Routes.init(app)


//4. Starting the server that establishes connection with MongoDB and listens for incoming requests on the port mentioned in env 
const startServer = async () => {
    try {
        await mongoConnect()
        await app.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running successfully on port: ${process.env.PORT}`)
        })  
    } catch (error) {
        console.log(`Couldn't start the server with error: ${error}`)
    }
}

startServer()
