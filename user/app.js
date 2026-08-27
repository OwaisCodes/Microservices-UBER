const express = require('express')
const app = express()
const userRoutes = require('./routes/user.routes.js')

app.use('/', userRoutes)

module.exports = app