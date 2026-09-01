const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const connect = require('./db/db.js')
connect()
const userRoutes = require('./routes/user.routes.js')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', userRoutes)

module.exports = app