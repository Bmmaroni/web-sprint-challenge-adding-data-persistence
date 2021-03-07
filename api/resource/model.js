// build your `Resource` model here
const db = require("../../data/dbConfig")

function getResources() {
	return db("resources")
}

function getResourceByID(resource_id) {
	return db("resources")
		.where("resource_id", resource_id)
		.first()
}

async function addResource(resource) {
	const newResource = await db("resources")
		.insert({
			resource_name: resource.resource_name,
			resource_description: resource.resource_description
		})
	return getResourceByID(newResource)
} 

module.exports = {
	getResources,
	getResourceByID,
	addResource
}