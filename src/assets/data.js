export const projects = [
	{ id: 1, name: "Project Template", type: "kaban" },
	{ id: 2, name: "List Tempate", type: "to-do_list" },
];

// export const toDoListAsObject = {
// 	tasks: ["Go to Store", "Order gifts on amazon"],
// 	descriptions: [
// 		"grocery shopping for birthday",
// 		"Monthly Restock on office supplies",
// 	],
// 	status: ["incomplete", "incomplete"],
// };

export const toDoListAsArray = [
	{
		task: "Go to Store",
		descriptions: "grocery shopping for birthday",
		status: "incomplete",
	},
	{
		task: "Order gifts on amazon",
		descriptions: "Monthly Restock on office supplies",
		status: "incomplete",
	},
];

export const columnTypes = ["text", "status", "dropdown"];

export const statusValues = ["Done", "Working on it", "Stuck", ""];
