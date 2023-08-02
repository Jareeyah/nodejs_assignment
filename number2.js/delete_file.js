const fs = require('fs');

fs.unlink('/Names/jariat_dosunmu.js', (err) =>{
	if (err)
	{
		console.error('Error deleting the file', err);
	}

	console.log('Successfully deleted the "jariat_dosunmu.js" file.');
});
