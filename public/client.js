document.addEventListener('DOMContentLoaded', () => {
	const inputWinsElem = document.querySelector('.inputWins');
	const inputLosesElem = document.querySelector('.inputLoses');
	const postButtonElem = document.querySelector('.postButton');

	postButtonElem.addEventListener('click', () => {
		const data = {
			wins: inputWinsElem.value,
			loses: inputLosesElem.value
		};

		fetch('/api/test', {
			method: 'post',
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" }
		})
			.then(response => response.json())
			.then(jsonResponse => {
				console.log('POST /api/records response received.');
				console.log('jsonResponse:', jsonResponse);
			});

		console.log('POST /api/records request sent.');
	});
});