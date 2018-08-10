const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // This line is required for Angular

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port:', PORT);
    
})