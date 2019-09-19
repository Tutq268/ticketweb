import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

let app = express()

const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

let port = 8686

server.listen(port,(req,res)=> {
    console.log("i'm listening on port : " + port)
})