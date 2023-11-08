import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import AllMovies from "./pages/AllMovies";
import BookTicket from "./pages/BookTicket";
import UpdateBooking from "./pages/UpdateBooking";
import Search from "./pages/Search";
import DeleteMovie from "./pages/DeleteMovie";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="auth" element={<AuthPage />} />
					<Route path="allMovies" element={<AllMovies />} />
					<Route path="bookTicket" element={<BookTicket />} />
					<Route path="updateBooking" element={<UpdateBooking />} />
					<Route path="search" element={<Search />} />
					<Route path="deleteMovie" element={<DeleteMovie />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
