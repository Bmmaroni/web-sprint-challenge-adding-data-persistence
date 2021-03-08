// build your `/api/tasks` router here
const express = require("express")
const task = require("./model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await task.getTasks())
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const newTask = await task.addTask(req.body)
		res.status(201).json(newTask)
	} catch (err) {
		next(err)
	}
})

module.exports = router