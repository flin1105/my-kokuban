import { projects } from "./assets/data";
import Project_Display from "./Project_Display";

function App() {
	return (
		<>
			<h1>My Kokuban</h1>
			<div>
				<h3>Your Projects</h3>
				<ul>
					{projects.map((project) => (
						<li key={project.id}>{project.name}</li>
					))}
				</ul>
			</div>
			<Project_Display />
		</>
	);
}

export default App;
