import React, { useState } from "react";
const default_headers = [
	{ header_Name: "Tasks", header_Type: "text" },
	{ header_Name: "Status", header_Type: "text" },
	{ header_Name: "Description", header_Type: "text" },
	{ header_Name: "Due Date", header_Type: "text" },
];
const defaultRow = ["Task 1", "Working on it", "Description of task", "N/A"];

const Project_Display = () => {
	const [headers, setHeaders] = useState(default_headers);
	const [row, setRow] = useState(defaultRow);

	const handleNewRow = () => {
		const newHeaders = [
			...headers,
			{ header_Name: "New Header", header_Type: "text" },
		];
		const newRow = [...row, "test"];
		setHeaders(newHeaders);
		setRow(newRow);

		console.log("new headers,", headers);
	};

	return (
		<div>
			<h3>Project Display</h3>
			<table>
				<tbody>
					<tr>
						{headers.map((header, index) => (
							<th key={index}>{header.header_Name}</th>
						))}
					</tr>
					<tr>
						{row.map((row, index) => (
							<td key={index}>{row}</td>
						))}
					</tr>
				</tbody>
			</table>
			<button onClick={handleNewRow}>Add Column</button>
		</div>
	);
};

export default Project_Display;
