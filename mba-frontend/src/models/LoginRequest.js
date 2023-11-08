export class LoginRequest {
	username = "";
	password = "";

	get username() {
		return this.username;
	}

	/**
	 * @param {String} userName
	 */
	set username(userName) {
		this.username = `${userName}`;
	}

	get password() {
		return this.password;
	}

	/**
	 * @param {String} newPassword
	 */
	set password(newPassword) {
		this.password = `${newPassword}`;
	}

	constructor() {}
}