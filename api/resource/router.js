// build your `/api/resources` router here
const express = require("express")
const resource = require("./model")

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