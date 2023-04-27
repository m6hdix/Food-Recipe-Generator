// Import the axios library to make API calls
import axios from 'axios';

// Set the URL and Headers for the API call
const API_URL = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe';
const API_HEADERS = {
	'content-type': 'application/octet-stream',
	'X-RapidAPI-Key': '84797a7f2emsh7b83df71388f895p1b3b99jsnadf9a7c1b6f4',
	'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
};

// Create a function to fetch data from the API
export async function FetchData(NameFood) {
	// Set the options for the API call
	const options = {
		method: 'GET',
		url: API_URL,
		headers: API_HEADERS,
		params: {
			query: NameFood
		}
	};
	
	// Make the API call using the axios library
	const response = await axios.request(options);
	
	// Return the data from the API call
	return response.data;
}