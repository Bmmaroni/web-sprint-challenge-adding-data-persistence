// build your server here and require it from index.js
const express = require("express")
const helmet = require("helmet")

const projectRouter = require("./project/router")
const taskRouter = require("./task/router")
const resourceRouter = require("./resource/router")

const server = express();

server.use(helmet())
server.use(express.json())

server.use('/api/project', projectRouter)
server.use('/api/task', taskRouter)
server.use('/api/resource', resourceRouter)

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server