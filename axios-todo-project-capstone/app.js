function getData() {
    axios.get("https://api.vschool.io/ada/todo/")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

// List the todo titles to the dom
function listData(data) {
    clearList()

    for (let i = 0; i < data.length; i++) {
        const task = document.createElement('li')
        const title = document.createElement('div')
        title.id = "title"
        title.textContent = data[i].title
        task.appendChild(title)

        // task.textContent = data[i].title
        task.id = "task"
        document.getElementById('todo-list').appendChild(task)

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        task.appendChild(editBtn);
        // task.appendChild(saveBtn);

        editBtn.addEventListener('click', function() {
            // let titleArea = this.previousSibling;
            // titleArea.contentEditable = true;
            title.contentEditable = true;
            rest.contentEditable = true;

            rest.cursor = "focus"
            
            editBtn.id = "saveBtn";
            editBtn.innerHTML = "Save"
            const saveBtn = document.getElementById("saveBtn");
            saveBtn.innerHTML = "Save";
            saveBtn.id = "saveBtn";

            saveBtn.addEventListener('click', function() {
                title.contentEditable = false;
                rest.contentEditable = false;

                    const editedTodo = {
                        title: title.textContent,
                        price: price.textContent,
                        description: description.textContent,
                        imgUrl: img.textContent
                    }
                    const result = Object.assign({}, editedTodo)

                    axios.put("https://api.vschool.io/ada/todo/" + data[i]._id, result)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err.response.data))
                }
            )
        })     
        

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        task.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', function() {
            let task = this.parentNode;
            task.remove();
            axios.delete("https://api.vschool.io/ada/todo/" + data[i]._id)
                .then(res => console.log(res.data))
                .catch(error => console.log(error))
        })

        let checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        task.appendChild(checkBox);

        const price = document.createElement('p')
        price.textContent = data[i].price
        price.id = "price"
        price.style.fontSize = "small"
        Number(price);

        const description = document.createElement('p')
        description.textContent = data[i].description
        description.id = "description"
        description.style.fontSize = "small"

        const completed = document.createElement("p");
        completed.id = "completed"
        completed.style.fontSize = "small"
        task.appendChild(completed)

        const img = document.createElement("img");
        img.setAttribute("type", "src")
        img.id = "img"
        
        img.src = data[i].imgUrl
        img.height = "200"
        img.style.display = 'block';

        const urlArea = document.createElement("p");
        urlArea.textContent = "imgUrl: ";
        urlArea.id = "urlArea"
        urlArea.style.fontSize = "small"
        urlArea.appendChild(img);

        const rest = document.createElement('div');
        rest.id = "rest"
        task.appendChild(rest)
        rest.append(price, description, urlArea)
    
        checkBox.addEventListener('click', function() {
            // let task = this.parentNode;
            // let url = "https://api.vschool.io/ada/todo/"
            // let itemUrl = url + data[i]._id;

            if (checkBox.checked) {
                task.style.textDecoration = "line-through"
                completed.textContent = "Completed: true"
                // price.textContent = "Price: " + data[i].price
                // description.textContent = "Description: " + data[i].description
                // urlArea.textContent = "imgUrl: ";

                const completedTrue = {
                    completed: true,
                }
                const result1 = Object.assign(completed, completedTrue)
                axios.put("https://api.vschool.io/ada/todo/" + data[i]._id, result1)
                    .then(res => console.log(res.response.data))
                    .catch(err => console.log(err.response.data))
            } else {
                task.style.textDecoration = "none"
                completed.textContent = "Completed: false"
                // price.textContent = "Price: " + data[i].price
                // description.textContent = "Description: " + data[i].description
                // urlArea.textContent = "imgUrl: ";
                const completedFalse = {
                    completed: false,

                }
                const result2 = Object.assign(completed, completedFalse)
                axios.put("https://api.vschool.io/ada/todo/" + data[i]._id, result2)
                    // .then(res => getData())
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
            }
        })
}}


function clearList() {
    const el = document.getElementById('todo-list')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()


// Form for the post request
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        completed: todoForm.completed,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.img.value
    }

    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.img.value = ""

    axios.post("https://api.vschool.io/ada/todo", newTodo)
        .then(res => getData())
        // .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data))
})
