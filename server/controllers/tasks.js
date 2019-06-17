var mongoose = require('mongoose');
require('../models/task.js');
const Tasks = mongoose.model('tasks');

module.exports = {
    index: (req, res) => {
        Tasks.find({}, function (err, tasks) {
            if(err){
                console.log(err)
            }
            else{
                console.log(tasks);
                res.json({ results: tasks });
            }
        })
    },
    new: (req, res) => {
        console.log("preparing to add entry to DB: ")
        var newtask = new Tasks();
        newtask.title = req.query.title; //when angular is in place likely not handled here
        newtask.description = req.query.description;
        //newtask.completed = false;  //trying this commented out first to see what happens
        newtask.save(function (err) {
            if (err) {
                console.log(err);

            } else {
                console.log("added task obj to db:");
                res.redirect('/');
            }
        })
    },
    destroy: (req,res) => {
        console.log("attempting to destroying an entry ");
        Tasks.findByIdAndDelete(req.params.id, function (err, tasks){
            if(err){
                console.log(err);
            }
            else{
                console.log('DESTROYED: ' + tasks)
                res.redirect('/');
            }
        })

    },
    show: (req, res) => {
        console.log("trying to show a task obj")
        Tasks.findById(req.params.id, function (err, tasks){
            if(err){
                console.log(err);
            }
            else{
                console.log('show obj: ' + tasks)
                res.json({results: tasks});
            }
        })
        
    },
    update: (req,res) => {
        console.log("attempting to update document in DB");
        Tasks.findById(req.params.id, function (err, tasks){
            if (err){
                console.log(err);
            }
            else{
                tasks.title = req.query.title;
                tasks.description = req.query.description;
                tasks.completed = req.query.completed;
                tasks.save(function (err){
                    if(err){
                        console.log(err.errors);
                    }
                    else{
                        console.log('task updated')
                        res.redirect('/')
                    }
                })
            }
        })

    }

}
