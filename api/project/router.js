// build your `/api/projects` router here
const express = require("express")
const project = require("./model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {

	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {

	} catch (err) {
		next(err)
	}
})

module.exports = router