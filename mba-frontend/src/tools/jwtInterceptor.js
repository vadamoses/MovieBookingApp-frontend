import axios from "axios";

export function jwtInterceptor() {
	axios.interceptors.request.use((request) => {
		const currentUser = authenticationService.currentUserValue;
		const isLoggedIn = currentUser?.token;
		const isAuthUrl = (request.url =
			"http://localhost:8088/api/v1.0/moviebooking/login" ||
			"http://localhost:8088/api/v1.0/moviebooking/register");

		console.log(
			currentUser + " logged in? " + isLoggedIn + "is Auth? " + isAuthUrl
		);
		if (isLoggedIn && !isAuthUrl) {
			request.headers["Content-Type"] = `application/json`;
			request.headers.Accept = "application/json, text/plain, */*";
			request.headers.common.Authorization = `Bearer ${currentUser?.token}`;
			request.headers.channelName = "vada net";
		}
		console.log("the request: " + request);
		return request;
	});
}
