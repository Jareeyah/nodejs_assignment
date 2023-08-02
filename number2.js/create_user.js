const fs = require('fs');

fs.writeFile('/Students/user.js', '',  (err) =>
	{
		if (err)
		{
			console.error('Error in creating file: ', err)
		}

		console.log('Successfully created "user.js" file.');
	});
