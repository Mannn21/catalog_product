import { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import { Routes, Route } from "react-router-dom";

const App = () => {
	const [query, setQuery] = useState("");

	const handleQuery = e => {
		setQuery(e);
	};

	return (
		<div>
			<Navbar setQuery={handleQuery} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/product" element={<Product query={query}/>} />
				<Route path="/product/:id" element={<Details />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
