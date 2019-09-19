import mongoose from 'mongoose'
import bluebird from 'bluebird'
require("dotenv").config()
const connectDB = () => {
    mongoose.Promise = bluebird
    let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    
    mongoose.connect(URI,{useNewUrlParser: true})
    
}
module.exports = connectDB