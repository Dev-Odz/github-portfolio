import "./App.css";
import { Route, Routes } from "react-router-dom";

// Route Components
import HomeComponent from "./routes/home/home_component";

function App() {
	// const location = useLocation();

	// useEffect(() => {
	// 	console.log(`Route changed to ${location.pathname}`);
	// }, [location]);

	return (
		<Routes>
			<Route path="/" element={<HomeComponent />}>
				<Route index element={<HomeComponent />}></Route>
				{/* <Route path="/skills" element={<SkillsComponent />}></Route>
				<Route path="/about-me" element={<AboutMeComponent />}></Route>
				<Route path="/projects" element={<ProjectsComponent />}></Route>
				<Route
					path="/work-experience"
					element={<WorkExperienceComponent />}></Route>
				<Route path="/contact" element={<ContactComponent />}></Route> */}
			</Route>
		</Routes>
	);
}

export default App;
