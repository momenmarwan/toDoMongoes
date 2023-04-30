const container = document.querySelector(".container")
const createHtmlElement = (ele , className , id , textContent) => {
    const el = document.createElement(ele)
    if(className){
        el.className = className
    }
    if(id){
        el.id = id
    }
    if(textContent){
        el.textContent = textContent
    }
    return el
}

const createBtn = (textContent , value , type , event , cb) => {
    const btn = createHtmlElement("button",null,null,textContent)
    btn.value = value ;
    btn.type = type ;
    return btn
}

const createInput = (type ,className , name , placeHolder , id) => {
    const input = createHtmlElement("input" , className , id) 
    input.type = type
    input.placeholder = placeHolder ;
    if(name){
        input.name = name
    }
    return input
}

const appendChildren = (parent , ...children) => {
    children.forEach((child) => {
        parent.appendChild(child)
    })
}

const addTask = createHtmlElement("div" , "add-task")
const title = createInput("text" ,null ,null,"Add a Task" , null)
const description = createInput("text" , null , null , "Add a description" , null)


const completedOrderedList = createHtmlElement("ol" , "completed")

const createList = (id,taskTitle , taskDescription , index) => {
    const li = createHtmlElement("li" , null , null)
    let title = createHtmlElement("p")
    title.textContent = taskTitle
    let description = createHtmlElement("p")
    description.textContent = taskDescription
    const checkBtn = createBtn("" ,id )
    const deleteBtn = createBtn("" , id)
    const editBtn = createBtn("" , id)
    editBtn.addEventListener("click" , ()=> {
        const updateBtn = createBtn("update")
        addTask.appendChild(updateBtn)
        updateBtn.addEventListener("click" , () => {
            updateTodo({id: editBtn.value, title:title.value, content: description.value, mark: false})
            .then(response => response.json())
            .then(response => console.log(response))
            .then(() => {
                document.getElementsByTagName("input")[0].value = ""
                document.getElementsByTagName("input")[1].value = ""
            })

        })
    })

    const checkIcon = createHtmlElement("i" , "fa fa-check")
    checkBtn.appendChild(checkIcon)
    const trashIcon = createHtmlElement("i" , "fa fa-trash")
    const editIcon= createHtmlElement("i" , "fa fa-edit") 
    editBtn.appendChild(editIcon)
    deleteBtn.appendChild(trashIcon)
    deleteBtn.addEventListener('click', () => {
        console.log(deleteBtn.value);
        deleteTodo({id:deleteBtn.value})
        .then((response) => response.json())
        .then((response) => console.log(response))

    })
    checkBtn.addEventListener('click', () => {
        console.log('Hi');
    })
    appendChildren(li , deleteBtn , checkBtn ,editBtn, title , description)
    return li

}


const notCompletedOrderedList = createHtmlElement("ol" , "not-completed")
const notCompleted =  createHtmlElement("h3",null,null,"Not Completed")

const addBtn = createBtn("Add")
addBtn.addEventListener("click", () => {
    addTodo({title:title.value, content: description.value})
    .then((response) => response.json())
    .then((response) => response.result._id )
    .then((id) => {
        console.log(id);
        title.value = '';
        description.value = '';
        const completed =  createHtmlElement("h3",null,null,"Completed")
        const completedList = createList(id);
        appendChildren(completedOrderedList , completed ,completedList);
    })
    .catch((error) => {
        console.log(err);
    })
    
});

const showAllToDo = () => {
    getAllTodo()
        .then(response => response.json())
        .then(response => {
            response.result.forEach(todo => {
                const completed =  createHtmlElement("h3",null,null,"Completed")
                const completedList = createList(todo._id);
                appendChildren(completedOrderedList , completed ,completedList);
            })
        })
        .catch((error) => {
            console.log(error);
        })
    
}
showAllToDo()





appendChildren(addTask,title,description,addBtn)
appendChildren(container , addTask , notCompletedOrderedList , completedOrderedList)






