// build your `Project` model here
const db = require("../../data/dbConfig")

function getProjects() {
	return db("projects")
}

function getByProjectID(project_id) {
	return db("projects")
		.where("project_id", project_id)
		.first()
}

async function addProject(project) {
	if (project.project_completed == 1) {
		project.project_completed = true
	} else if (project.project_completed == 0) {
		project.project_completed = false
	}

	const newProject = await db("projects")
		.insert({
			project_name: project.project_name,
			project_description: project.project_description,
			project_completed: project.project_completed
		})
	return getByProjectID(newProject)
}

module.exports = {
	getProjects,
	getByProjectID,
	addProject
}