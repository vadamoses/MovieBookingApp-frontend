import React from "react";
import { movieService } from "../services/MovieService";

class AllMovies extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		};
	}

	componentDidMount() {
		movieService.getAllMovies().then((response) => {
			this.setState({ movies: response.data });
		});
	}

	render() {
		return (
			<div>
				<h1 className="text-center"> Movies List</h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<td> movie Id</td>
							<td> Movie Name</td>
							<td> Total Number Of Tickets</td>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((movie) => (
							<tr key={movie.id}>
								<td> {movie.id}</td>
								<td> {movie.movieName}</td>
								<td> {movie.totalNumberOfTickets}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default AllMovies;
