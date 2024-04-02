const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Google Summer of Code 2024')
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log(`App listening on port ${port}`);
});
