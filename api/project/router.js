// build your `/api/projects` router here
const express = require("express")
const project = require("./model")
const db = require("../../data/dbConfig")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await project.getProjects())
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		res.status(201).json(await project.addProject(req.body))
	} catch (err) {
		next(err)
	}
})

module.exports = router