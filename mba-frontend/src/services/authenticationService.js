import http from "../http-commons";
import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject(
	JSON.parse(localStorage.getItem("access_token"))
);

const regRequest = {
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	password: "",
	confirmPassword: "",
	contactNumber: "",
	roles: [],
};

const logout = async () => {
	http
		.post("/logout");
		//.then(this.cookies.remove("access_cookie", { path: "/" }));
};

const login = async (loginRequest) => {
	try {
		//const access_cookie = Cookies.get("access_cookie");
		//const refresh_cookie = getCookie("refresh_cookie");

		let response = await http.post("/login", loginRequest, {
			withCredentials: true,
		});

		console.log(response);
		//console.log("AccessCookie length:" + Cookies.length);
	} catch (error) {
		console.log(error);
	}
};

function register(registerRequest) {
	regRequest.firstName = registerRequest.firstName;
	regRequest.lastName = registerRequest.lastName;
	regRequest.email = registerRequest.email;
	regRequest.username = registerRequest.username;
	regRequest.password = registerRequest.password;
	regRequest.confirmPassword = registerRequest.confirmPassword;
	regRequest.contactNumber = registerRequest.contactNumber;
	regRequest.roles.push(registerRequest.roles);
	http
		.post("/register", regRequest)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
	console.log(regRequest);
}

export const authenticationService = {
	login,
	logout,
	register,
	isAuthed: () => {
		//return this.cookies.get("access_cookie") ? true : false;
	},
	currentUser: currentUserSubject.asObservable(),
	get currentUserValue() {
		return currentUserSubject.value;
	},
};
