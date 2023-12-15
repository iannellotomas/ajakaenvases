import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../page/main/Main";
import ProductDetail from "../components/productDetail/ProductDetail";

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Main />}
				/>
				<Route
					path="/producto/:productName"
					element={<ProductDetail />}
				/>
			</Routes>
		</Router>
	);
}
