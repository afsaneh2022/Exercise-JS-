let fech_list =[];

let todo_list=document.querySelector(".todo-list");

function rendering(post){
    let list= document.querySelector(".list");
    let list1 =document.createElement("div") ; 
    let to_do=document.createElement("input");
    to_do.setAttribute("type","checkbox");
    to_do.setAttribute("id","todo");
    to_do.setAttribute("name","list");
    to_do.setAttribute("value","other");
    to_do.checked=post.completed;
    let to_do_lable=document.createElement("label");
    to_do_lable.setAttribute("for","todo");
    to_do_lable.textContent=post.todo;
    list1.appendChild(to_do);
    list1.appendChild(to_do_lable);
    list.appendChild(list1);
 }


fetch("https://dummyjson.com/todos")
.then(function (respons){
return respons.json();
}).then(function (respons){
    respons.todos.forEach(element => {
        rendering(element); 
        fech_list[element.id]=element;
    });
})
let reset= document.querySelector(".list");
 function reset_page(){
   reset.innerHTML="";
 }


let filter_click_all=document.querySelector(".filter-all");
let filter_click_complet=document.querySelector(".filter-completed");

filter_click_complet.addEventListener("click", function onclick_complet(e){
    reset_page();
    for (i=1 ;i<=30 ; i++){
        if (fech_list[i].completed){
            rendering(fech_list[i]);
         }
    }
     });

 filter_click_all.addEventListener("click", function onclick_all(el){
    reset_page();
    for (i=1 ;i<=30 ; i++){
       rendering(fech_list[i]);
  
    }
 });
