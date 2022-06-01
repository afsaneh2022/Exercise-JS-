let todo_list=document.querySelector(".todo-list");
let title=document.createElement("h2")
title.textContent="ToDoList"
todo_list.appendChild(title);


function rendering(post){
    let container=document.createElement("div");
    container.classList.add("post");
       
    let to_do=document.createElement("input");

    to_do.setAttribute("type","checkbox");
    to_do.setAttribute("id","todo");
    to_do.setAttribute("name","list");
    to_do.setAttribute("value","other");
    to_do.checked=post.completed;

    let to_do_lable=document.createElement("label");
    to_do_lable.setAttribute("for","other");
    to_do_lable.textContent=post.todo;
 
  
    container.appendChild(to_do);
    container.appendChild(to_do_lable);
    todo_list.appendChild(container);
}

    
fetch("https://dummyjson.com/todos")
    .then(function (respons){
   return respons.json();

    }).then(function (respons){
        respons.todos.forEach(element => {
            rendering(element);
        });
      
    })
