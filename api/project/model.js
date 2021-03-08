// build your `Project` model here
const db = require("../../data/dbConfig")

async function getProjects() {
	const projects = await db("projects")
	return projects.map(project => {
		return {
			...project,
			project_completed: (project.project_completed == 1 ? true : false)
		}
	})
}

async function getByProjectID(project_id) {
	const project = await db("projects")
		.where("project_id", project_id)
		.first()
	if(project) {
		return{
			...project,
			project_completed: (project.project_completed == 1 ? true : false)
		}
	}
	return project
}

async function addProject(project) {
	const newProject = await db("projects")
		.insert({
			project_name: project.project_name,
			project_description: project.project_description,
			project_completed: (project.project_completed === true ? 1 : 0)
		})
	return getByProjectID(newProject)
}

module.exports = {
	getProjects,
	getByProjectID,
	addProject
}