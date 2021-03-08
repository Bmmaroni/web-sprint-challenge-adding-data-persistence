// build your `Task` model here
const db = require("../../data/dbConfig")

async function getTasks() {
	const tasks = await db("tasks as t")
		.leftJoin("projects as p", "t.project_id", "p.project_id")
		.select("t.*", "p.project_name", "p.project_description")

	return tasks.map( task => {
		return {
			...task,
			task_completed: (task.task_completed == 1 ? true : false)
		}
	})
}

async function getTaskByID(task_id) {
	const task = await db("tasks as t")
		.where("task_id", task_id)
		.first()
		.join("projects as p", "t.project_id", "p.project_id")
		.select(
			"t.task_id",
			"t.task_description",
			"t.task_notes",
			"t.task_completed",
			"p.project_name"
		)
	if (task) {
		return {
			...task,
			task_completed: (task.task_completed == 1 ? true : false)
		}
	}
	return task
}

async function addTask(task) {
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