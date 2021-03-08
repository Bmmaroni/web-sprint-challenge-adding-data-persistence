
exports.up = async function(knex) {
	await knex.schema.createTable("projects", (table) => {
		table.increments("project_id")
		table.string("project_name").notNull()
		table.text("project_description")
		table.integer("project_completed").default(0)
  })

	await knex.schema.createTable("resources", (table) => {
		table.increments("resource_id")
		table.string("resource_name").notNull().unique()
		table.text("resource_description")
  })

	await knex.schema.createTable("tasks", (table) => {
		table.increments("task_id")
		table.text("task_description").notNull()
		table.text("task_notes")
		table.integer("task_completed").default(0)
		table.integer("project_id")
			.notNull()
			.references("project_id")
			.inTable("projects")
  })

	await knex.schema.createTable("project_resources", (table) => {
		table.integer("project_id")
			.notNull()
			.references("project_id")
			.inTable("projects")
		table.integer("resource_id")
			.notNull()
			.references("resource_id")
			.inTable("resources")
		table.primary(["project_id", "resource_id"])
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
}
