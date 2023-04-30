const {addTodo, getAllToDos, doneMark, deleteTodo, updateTodo} = require('./controller');
const router = require('express').Router();


router.post('/add-todo', addTodo);
router.get('/get-todo', getAllToDos);
router.put('/done-mark', doneMark);
router.delete('/delete-todo/:id', deleteTodo);
router.put('/update-todo', updateTodo)


module.exports = router