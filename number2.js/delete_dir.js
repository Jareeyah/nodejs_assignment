const fs = require('fs');

fs.rmdir('Names', (err) =>
	{
		if (err)
		{
			console.error('Error deleting the directory', err);
		}

		console.log('Sucessfully deleted "Names" directory');
	});
