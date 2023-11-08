import axios from "axios";

export default axios.create({
	baseURL: "http://localhost:8088/api/v1.0/moviebooking",
	headers: {
		'Access-Control-Allow-Origin': '*', 
		"Content-type": "application/json",
	},
});