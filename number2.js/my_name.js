const fs = require('fs');

fs.rename('/Names/user.js', '/Names/jariat_dosunmu.js', (err) =>
	{
		if (err)
		{
			console.error('Error renaming the file:', err);
		}

		console.log('Sucessfully remaned "user.js" file to "jariat_dosunmu.js" file.');
	});
