// selectors
const input=document.querySelector(".input")
const submit=document.querySelector(".submit")
const newone=document.querySelector(".todo-list")
const todofilter=document.querySelector(".filter-todos")
document.addEventListener("DOMContentLoaded",gettodos)


// eventlistener
submit.addEventListener("click",addtodo)
newone.addEventListener("click",deletetodo)
todofilter.addEventListener("click",filtertodo)


// functions

function addtodo(event){
event.preventDefault()
const tododiv=document.createElement("div")
tododiv.classList.add("newtodo")
const li=document.createElement("li")
li.innerText=input.value

li.classList.add("li-item")
saveLocalTodo(input.value)
tododiv.appendChild(li)
const completedbtn=document.createElement("button")
completedbtn.classList.add("completedbtn")
tododiv.appendChild(completedbtn)
const deletedbtn=document.createElement("button")
deletedbtn.classList.add("deletedbtn")
tododiv.appendChild(deletedbtn)
newone.appendChild(tododiv)
input.value=""
}
function deletetodo(event){
    const item=event.target
    if(item.classList[0]==="deletedbtn"){
        const todoitem=item.parentElement
            todoitem.remove()
            removeLocaltodo(todoitem)
   }if(item.classList[0]==="completedbtn"){
    const todoitem=item.parentElement
    todoitem.classList.toggle("finish")
    console.log(todoitem)

   }
    
}

function filtertodo(event){
        const todos=newone.childNodes
            todos.forEach(function(todo){
                console.log(todo)
                switch(event.target.value){
                    case "all":
                        todo.style.display="flex"
                        break
                        case "complete":
                        if(todo.classList.contains("finish")){
                                    todo.style.display="flex"
                        }else{todo.style.display="none"}
                        break
                        case "uncomplete":
                            if (todo.classList.contains("finish")){
                                todo.style.display="none"
                            }else{
                                todo.style.display="flex"
                            }
                }
            })
}

function saveLocalTodo(todo){
let todos;
if(localStorage.getItem("todos")===null){
    todos=[]
}else{
    todos=JSON.parse(localStorage.getItem("todos"))
}
todos.push(todo)
localStorage.setItem("todos",JSON.stringify(todos))

}

function removeLocaltodo(todoitem){
    let todos;
if(localStorage.getItem("todos")===null){
    todos=[]
}else{
    todos=JSON.parse(localStorage.getItem("todos"))
};
const todoindex=todoitem.children[0].innerText
todos.splice(todos.indexOf(todoindex), 1)
localStorage.setItem("todos",JSON.stringify(todos))
}


function gettodos(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[]
    }else{
        todos=JSON.parse(localStorage.getItem("todos"))
    };
    todos.forEach(function(todo){
        const tododiv=document.createElement("div")
tododiv.classList.add("newtodo")
const li=document.createElement("li")
li.innerText=todo

li.classList.add("li-item")
tododiv.appendChild(li)
const completedbtn=document.createElement("button")
completedbtn.classList.add("completedbtn")
tododiv.appendChild(completedbtn)
const deletedbtn=document.createElement("button")
deletedbtn.classList.add("deletedbtn")
tododiv.appendChild(deletedbtn)
newone.appendChild(tododiv)

    })
}









