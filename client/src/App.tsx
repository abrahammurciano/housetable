import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddHouse from "./pages/AddHouse";
import HouseDetail from "./pages/HouseDetail";
import "./App.module.css"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/house/new" element={<AddHouse />} />
				<Route path="/house/:id" element={<HouseDetail />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
