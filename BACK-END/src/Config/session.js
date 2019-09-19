import session from 'express-session'
import connectMongo from 'connect-mongo'
require("dotenv").config()
let MongoStore = connectMongo(session)

let sessionStore = new MongoStore({
    url : `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    autoReconnect: true
})

let configsession = (app) => {
    app.use(session({
      key: "express.isd",
      secret: "mySecret",
      store: sessionStore,
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 *60* 24 * 10
      }
    }))
  }
  module.exports = {
    configsession: configsession
  }