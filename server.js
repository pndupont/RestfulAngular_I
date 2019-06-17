//Gotta have that express!!
var express = require('express');
var app = express();
//RETURN INTERFACE? I guess?
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//INTERNAL STRUCTURE
var path = require('path');

app.use(express.static( __dirname + '/public/dist/public' ));
app.set('views', path.join(__dirname, './views'));


//DB
require('./server/config/mongoose.js');
//ROUTE
require('./server/config/routes.js')(app);


app.listen( 8000, () => {
    console.log("listening on port 8000")
})
