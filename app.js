const todolist= document.getElementById("todolist");

const ul = document.querySelector("ul")

const input= document.getElementById("input");

const button= document.getElementById("button");

const arr=[];

button.onclick = function(){
      arr.push(input.value);
      input.value=" ";
      show();
}

function show(){
    todolist.innerHTML = "";
     arr.forEach(function(item ,index){
         todolist.innerHTML+= `
         <li>
             ${item}
             <a onclick=edit("${index}")>edit</a>
             <a onclick=remove("${index}")> X </a>
         </li>`
     })
     
}

function edit(index){
    var newValue = prompt("Please insert your new value");
  

    arr.splice(index, 1, newValue);

    show();
}

function remove(index){
    arr.splice(index,1)
    show();
}