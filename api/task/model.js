// build your `Task` model here
const db = require("../../data/dbConfig")

function getTasks() {
	return db("tasks as t")
		.leftJoin("projects as p", "t.project_id", "p.project_id")
		.select("t.*", "p.project_name", "p.project_description")
}

function getTaskByID(task_id) {
	return db("tasks")
		.where("task_id", task_id)
		.first()
}

async function addTask(task) {
	if (task.task_completed === 1) {
		task.task_completed = true
	} else if (task.task_completed === 0) {
		task.task_completed = false
	}

	const newTask = await db("tasks")
		.insert({
			task_description: task.task_description,
			task_notes: task.task_notes,
			task_completed: task.task_completed,
			project_id: task.project_id
		})
	return getTaskByID(newTask)
} 

module.exports = {
	getTasks,
	getTaskByID,
	addTask
}