const fs = require('fs');

const info = '\nAge: 18\n, sex: "Female\n, Nationality: Nigeria\n, Phone Number: 09017385702\n, Other info: I love crotcheting, hairstyling, watching football and anime';

fs.appendFile('/Names/user.js', info, (err) =>{
	if (err)
	{
		console.error('Error adding information:', err);
	}

	console.log('Successfully added information to the user.js file.');
});
