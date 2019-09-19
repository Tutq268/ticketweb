import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import connectDB from './Config/ConnectDB'
import session from './Config/session'
import passport from 'passport'
import initRouter from './Routes/web'
require("dotenv").config()
let app = express()
connectDB()
session.configsession(app)
const server = http.createServer(app)

app.use(express.static("./src/public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


initRouter(app)
app.use(passport.initialize())
app.use(passport.session())
let port = process.env.APP_PORT
server.listen(port,(req,res)=> {
    console.log("i'm listening on port : " + port)
})