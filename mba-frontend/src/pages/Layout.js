import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
		<>
			<nav className="navbar">
				<ul>
					<li>
						<Link className="link" to="/">Home</Link>
					</li>
					<li>
						<Link to="/auth">Login / Register</Link>
					</li>
					<li>
						<Link to="/allMovies">All Movies</Link>
					</li>
					<li>
						<Link to="/bookTicket">Book Tickets</Link>
					</li>
					<li>
						<Link to="/updateBooking">Update Ticket</Link>
					</li>
					<li>
						<Link to="/search">Search Movies</Link>
					</li>
					<li>
						<Link to="/deleteMovie">Delete Movie</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;