// build your `/api/projects` router here
const express = require("express")
const project = require("./model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.status(200).json(await project.getProjects)
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const createdProject = await project.getProjects(req.body)
		res.status(201).json(createdProject)
	} catch (err) {
		next(err)
	}
})

module.exports = router