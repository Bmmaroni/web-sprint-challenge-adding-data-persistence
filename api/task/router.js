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
		res.status(201).json(await task.addTask(req.body))
	} catch (err) {
		next(err)
	}
})

module.exports = router