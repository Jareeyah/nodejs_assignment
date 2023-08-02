const fs = require('fs');

fs.rename('Students', 'Names', (err) =>
	{
		if (err)
		{
			console.error('Error updating and renaming directory:', err);
		}

		console.log('"Students" directory updated to "Names".');
	});
