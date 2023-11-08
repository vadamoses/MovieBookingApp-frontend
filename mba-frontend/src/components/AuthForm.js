import { useState, Fragment } from "react";
import {authenticationService} from '../services/authenticationService';

export default function AuthForm() {
	const [inputs, setInputs] = useState({});
	const [loginRequest, setLoginRequest] = useState({
		username: "",
		password: "",
	});
	const [registerRequest, setRegisterRequest] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		contactNumber: "",
		roles: "",
	});

	const [isLogin, setIsLogin] = useState(true);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		const uName = "username";
		const pWord = "password";
		setLoginRequest((values) => ({
			...values,
			[uName]: inputs.username,
			[pWord]: inputs.password,
		}));
		authenticationService.login(loginRequest);
	};

	const handleRegisterSubmit = (event) => {
		event.preventDefault();
		const fName = "firstName";
		const lName = "lastName";
		const uName = "username";
		const eMail = "email";
		const pass = "password";
		const confirmPass = "confirmPassword";
		const contactNum = "contactNumber";
		const roles = "roles";

		setRegisterRequest((values) => ({
			...values,
			[fName]: inputs.firstName,
			[lName]: inputs.lastName,
			[uName]: inputs.username,
			[eMail]: inputs.email,
			[pass]: inputs.password,
			[confirmPass]: inputs.confirmPassword,
			[contactNum]: inputs.contactNumber,
			[roles]: inputs.userRole,
		}));
		console.log(registerRequest);
		authenticationService.register(registerRequest);
	};

	return (
		<Fragment>
			<div className="welcomdiv">
				<h1 id="weltxt">Log in Or Register!</h1>
			</div>
			{isLogin ? (
				<form className="form" onSubmit={handleLoginSubmit}>
					<label>
						Enter your username:
						<input
							type="text"
							name="username"
							id="username"
							value={inputs.username || ""}
							placeholder="type your username..."
							onChange={handleChange}
						/>
					</label>
					<label>
						Enter password:
						<input
							type="password"
							name="password"
							id="password"
							value={inputs.password || ""}
							placeholder="type your password..."
							onChange={handleChange}
						/>
					</label>
					<input type="submit" />
					<p id="logintxt">
						Create a new Account? ,{" "}
						<button onClick={() => setIsLogin(false)}>Register</button> now.
					</p>
				</form>
			) : (
				<form className="form" onSubmit={handleRegisterSubmit}>
					<label>
						Enter your firstName:
						<input
							type="text"
							name="firstName"
							value={inputs.firstName || ""}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Enter your lastName:
						<input
							type="text"
							name="lastName"
							value={inputs.lastName || ""}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Enter your username:
						<input
							type="text"
							name="username"
							value={inputs.username || ""}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Enter your email:
						<input
							type="email"
							name="email"
							value={inputs.email || ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						Enter password:
						<input
							type="password"
							name="password"
							value={inputs.password || ""}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Confirm password:
						<input
							type="password"
							name="confirmPassword"
							value={inputs.confirmPassword || ""}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Enter contactNumber:
						<input
							type="number"
							name="contactNumber"
							value={inputs.contactNumber || ""}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						<h1>Select Roles: </h1>
						<select
							className="form-control mb-3"
							name="userRole"
							value={inputs.userRole || "user"}
							onChange={handleChange}
						>
							<option value="admin">Administrator</option>
							<option value="user">General user</option>
						</select>
					</label>
					<button className="register-btn" type="submit">
						Sign Up
					</button>
					<p id="logintxt">
						Already have an Account? ,{" "}
						<button onClick={() => setIsLogin(true)}>Login</button> instead.
					</p>
				</form>
			)}
		</Fragment>
	);
}
