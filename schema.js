const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    mark: {
        type:  { type: Boolean, default: false },
    },
 
});
module.exports = mongoose.model('todo', todoSchema);



