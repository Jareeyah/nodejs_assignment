const fs = require('fs');

const contentName = 'Dosunmu Jariat';

fs.appendFile('/Names/user.js', contentName, (err) =>
	{
		if (err)
		{
			console.error('Error adding name as content to file:', err);
		}

		console.log('Name added to the user.js file successfully');
	});
