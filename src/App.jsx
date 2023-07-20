import Home from "./pages/Home";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Navbar from "./components/Navbar"

import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div>
      <Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/product/:id" element={<Details />} />
			</Routes>
		</div>
	);
};

export default App;
