var tasks = require('../controllers/tasks.js');
module.exports = function(app){
    app.get('/tasks', tasks.index);
    app.post('/new/', tasks.new);
    app.delete('/remove/:id', tasks.destroy);
    app.get('/:id', tasks.show);
    app.put('/update/:id', tasks.update);
}
