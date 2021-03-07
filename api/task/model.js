// build your `Task` model here
const db = require("../../data/dbConfig")

function getTasks() {
	return db("tasks")
}

function getTaskByID(task_id) {
	return db("tasks")
		.where("task_id", task_id)
		.first()
}

async function addTask(task) {
	const newTask = await db("tasks")
		.insert({
			task_description: task.task_description,
			task_notes: task.task_notes,
			task_completed: task.task_completed,
			project_name: task.project_name,
			project_description: task.project_description
		})
	return getTaskByID(newTask)
} 

module.exports = {
	getTasks,
	getTaskByID,
	addTask
}