const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);


process.on('unhandledRejection', function (reason, promise) {
    console.error('unhandled promise rejection:', reason.message || reason)
})

app.listen(app.get('port'), function() {
  console.log('Server is running on port', app.get('port'));
});

module.exports = app;