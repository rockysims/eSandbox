require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

//express setup
const app = express();
app.use(bodyParser.json());

//static setup
app.use(express.static('public'));

//api

app.post('/api/test', (request, response) => {
	const jsonResponse = {
		message: 'Here is some json from the server.',
		body: request.body
	};
	console.log('body:', request.body);
	console.log('jsonResponse:', jsonResponse);
	response.json(jsonResponse);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));
