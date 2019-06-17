var mongoose = require('mongoose');

var tasksSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength:3},
    description: {type: String, required: true, minlength:5},
    completed: {type: Boolean, default: false, required: true}, //not sure if default: false, will work

}, {timestamps: true});
var tasks = mongoose.model('tasks', tasksSchema);
