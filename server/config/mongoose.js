var path = require('path');
var fs = require('fs'); //fs = file system (included in node?) need to remember to ask about this why don't 'npm install fs'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');
mongoose.Promise = global.Promise; //legacy
var model_path = path.join(__dirname, './../models');
//iterate thorugh model folder for all .js files
fs.readdirSync(model_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(model_path + '/' + file);
    }
})