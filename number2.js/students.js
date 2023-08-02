const fs = require('fs');

fs.mkdir('Students', (err) =>
	{
	if (err)
	{
		console.error('Error: ', err)
	}

	console.log('Sucessfully created Directory "Students".');
});
