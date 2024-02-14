import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainHomePage, HomePage, India, Dashboards, Usa } from "./pages/index";
// import MainHomePage from "./pages/MainHomePage";
// import HomePage from "./pages/HomePage";
import { UserProvider } from "./context/UserContextName";

function App() {
	return (
		<>
			<UserProvider>
				<Routes>
					<Route exact path="/" element={<MainHomePage />} />
					<Route path="/homepage" element={<HomePage />} />
					<Route path="/india" element={<India />} />
					<Route path="/usa" element={<Usa />} />
					<Route path="/dashboards" element={<Dashboards />} />
				</Routes>
			</UserProvider>
		</>
	);
}

export default App;
