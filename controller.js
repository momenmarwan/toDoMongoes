const todoSchema = require('./schema');

const addTodo = (req, res) => {
    const {body : {title, content}} = req;
    const todo = new todoSchema({title, content});
    todo.save()
    .then((result) => {
        res.json({
            result
        })
    })
    .catch((error) => {
        res.json({
            error
        })
    })
};

const getAllToDos = (req, res) => {
    todoSchema.find()
    .then((result) => {
        res.json({
            result
        })
    })
    .catch((error) => {
        res.json({
            error
        })
    })
};

const doneMark = (req, res) => {
    const { id } = req.body;
    todoSchema.findByIdAndUpdate(id, {mark: true})
    .then((result) => {
        res.json({
            result
        })
    })
    .catch((error) => {
        res.json({
            error
        })
    })

}

const deleteTodo = (req, res) => {
    const {id} = req.params;
    todoSchema.deleteOne({_id:id})
    .then((result) => {
        res.json({
            status: 200,
            massage: 'deleted successfully',
            result
        })
    })
    .catch((error) => {
        res.json({
            error
        })
    })
}
const updateTodo = (req, res) => {
    const { id, title, content, mark } = req.body;
    todoSchema.findByIdAndUpdate(id, {
        title,
        content,
        mark
    })
    .then((result) => {
        res.json({
            status: 200,
            massage: 'updated successfully',
            result
        })
    })
    .catch((error) => {
        res.json({
            massage: 'error massage well come up',
            error
        })
    })


};

module.exports= {addTodo, getAllToDos, doneMark,deleteTodo,updateTodo}