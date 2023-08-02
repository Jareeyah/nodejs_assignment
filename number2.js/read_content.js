
const fs = require('fs')

fs.readFile('/Names/jariat_dosunmu', 'utf8', (err, info) =>
	{
		if (err)
		{
			console.error('Error while reading content from file:', err);
		}
		
		console.log('Content of file:\n');
		console.log(info);
	});
