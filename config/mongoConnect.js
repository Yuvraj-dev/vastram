const { mongoose } = require("mongoose")
const dotenv = require('dotenv')



const mongoConnect = async () => {
    try {
        dotenv.config({ path: './config.env'})
        const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT, MONGO_HOST, MONGO_DB } = process.env
        await mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}`)
        console.log("MongoDB database connection established successfully...")
    } catch (error) {
        console.log(`Couldn't connect with the database with error: ${error}`)
    }
}

module.exports = { mongoConnect }