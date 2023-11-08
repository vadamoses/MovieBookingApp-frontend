import http from "../http-commons";


function getAllMovies() {
	return http.get("/all", { withCredentials: true });
}
function searchMovie() {}
function bookTicket() {}
function updateTicket() {}
function deleteMovie() {}

export const movieService = {
	getAllMovies,
	searchMovie,
	bookTicket,
	updateTicket,
	deleteMovie,
};
