// build your server here and require it from index.js
const express = require("express")

const projectRouter = require("./project/router")
const taskRouter = require("./task/router")
const resourceRouter = require("./resource/router")

const server = express();

server.use(express.json())
server.use('/api/project', projectRouter)
server.use('/api/task', taskRouter)
server.use('/api/resource', resourceRouter)

module.exports = server