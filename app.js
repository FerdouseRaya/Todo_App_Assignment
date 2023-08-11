const todoInput = document.querySelector(".todo-input");
        const todoButton = document.querySelector(".todo-button");
        const todoList = document.querySelector(".todo-list");
        const deleteAll = document.querySelector(".delete-all-button");
        const filterOperation = document.querySelector(".filter-todo");
    	


        //add to the do list
        function addtodo(){
            //prevent form submission 
            event.preventDefault();

            // first creating div
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            // creating li tag
            const newTodo = document.createElement("li");
            console.log("new do added!");
            if(todoInput.value.trim()!==""){
            newTodo.innerText = todoInput.value;
            todoInput.value ="";
            newTodo.classList.add("todo-item");
            todoDiv.appendChild(newTodo); //here the parent is todoDiv and one child of todoDiv is li or newTodo.
            


            //creating checked button
            const checkedButton = document.createElement("Button");
            console.log("Cheked button added!");
            checkedButton.classList.add('checked-button');
            checkedButton.innerHTML ='<i class="fa-solid fa-check"></i>'
            todoDiv.appendChild(checkedButton);


            //creating delete button
            const deleteButton = document.createElement("Button");
            console.log("delete button added!");
            deleteButton.classList.add('delete-button');
            deleteButton.innerHTML ='<i class="fa-solid fa-delete-left"></i>'
            todoDiv.appendChild(deleteButton);


            //creating edit button
            const editButton = document.createElement("Button");
            console.log("edit button added!");
            editButton.classList.add('edit-button');
            editButton.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
            todoDiv.appendChild(editButton);

            // Appending to the list
            todoList.appendChild(todoDiv);  
            }
        }

            // delete and checked the item
            todoList.addEventListener('click',(event)=>{
            const item = event.target; //capturing the clicked element
            // if(item.classList[0]==="delete-button"){
            //     const todo = item.parentElement;
            //     todo.remove();
            //     // todo.removeChild(item);
            // }    
            if (item.classList[0]===("checked-button")) {
                const todo = item.parentElement;
                todo.classList.toggle('completed');
            }   
            if(event.target.matches('.delete-button')){
                const ourItem = event.target.parentElement;
                if(confirm("Do you want to delete it?")){
                    todoList.removeChild(ourItem);
                }
            }
            if(event.target.matches('.edit-button')){
                const todo = event.target.parentElement;

                const todoText = todo.querySelector('.todo-item');
                const editText = prompt("Edit your todo:", todoText.innerText);
                if(editText.trim()!==""){
                if (editText !== null) {
                 todoText.innerText = editText;
                 }}
            }

            });
        
            // filltering list items
            filterOperation.addEventListener("click",filterTodo);
            function filterTodo(event){
                const todos = todoList.querySelectorAll('.todo');
                todos.forEach(function(todo){
                    console.log(todo);
                    switch(event.target.value){
                        case "all":
                            todo.style.display='flex';
                            console.log("all");
                            break;
                        case "completed":
                            if(todo.classList.contains("completed")){
                            todo.style.display='flex';
                            console.log("completed");
                            }
                            else{
                            todo.style.display ="none";
                            }
                            break;
                        case "uncompleted":
                            if(!todo.classList.contains("completed")){
                                 todo.style.display ="flex";
                            }
                            else{
                            todo.style.display ="none";
                            }
                            break;
                    }


                });

            }
            function deleteAllTodos() {
             const todos = document.querySelectorAll('.todo');
             if(todos.length ===0){
                alert("Please add your todos first!");
                return;
             }
             if(confirm("Do you want to delete All?")){
                todos.forEach((todo) => {               
                        todo.remove();
                        });
                }
            }
            
    function deleteChekedItems(){
        const todos = document.querySelectorAll('.todo');
        todos.forEach((todo)=>{
        if(todo.classList.contains('completed')){
            todo.remove();
        }
    })
    }


        //Quotes API use

        const quotesButton = document.querySelector('.quotes-container button');
        const quoteText = document.querySelector('.quotes-container p');

        async function getQuotes(){
        const response = await fetch("https://dummyjson.com/quotes/1");
        const jsonData = await response.json();
        console.log(" ",jsonData.quote);
        quoteText.innerHTML= jsonData.quote;      
  
        }