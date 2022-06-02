let todo_list=document.querySelector(".todo-list");

let header=document.createElement("div");
header.classList.add("header");

let title=document.createElement("h2")
title.textContent="ToDoList"
 
filter=document.createElement("div");
filter_all=document.createElement("span");
filter_all.textContent="ALL";
filter_all.classList.add("filter-all");
filter_all.classList.add("filter");
filter_completed=document.createElement("span");
filter_completed.textContent="Completed";
filter_completed.classList.add("filter");

filter.appendChild(filter_completed);
filter.appendChild(filter_all);

header.appendChild(title);
header.appendChild(filter);
todo_list.appendChild(header);






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
