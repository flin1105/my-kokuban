import React, { useState } from "react";

const Project_Display = () => {
	// const [currentList, setCurrentList] = useState([{ item }]);

	const headers = ["Tasks", "Status", "Description", "Due Date"];
	const defaultRow = ["Task 1", "Working on it", "", ""];

	return (
		<div>
			<h3>Project Display</h3>
			<table>
				<tr>
					{headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
				<tr>
					{defaultRow.map((row, index) => (
						<td key={index}>{row}</td>
					))}
				</tr>
			</table>
			<button>Add Task</button>
		</div>
	);
};

export default Project_Display;
