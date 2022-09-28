
function getData() {
    axios.get("https://api.vschool.io/ada/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

// List the todo titles to the dom
function listData(data) {
    clearList()

    for (let i = 0; i < data.length; i++) {
        const task = document.createElement('li')
        task.textContent = data[i].title
        task.id = "task"
        document.getElementById('todo-list').appendChild(task)

        let checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        task.appendChild(checkBox);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        task.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', function() {
            let task = this.parentNode;
            task.remove();
            axios.delete("https://api.vschool.io/ada/todo/" + data[i]._id)
                .then(res => console.log(res.data))
                .catch(error => console.log(error))
        })

        const price = document.createElement('p')
        price.textContent = "Price: " + data[i].price
        price.id = "price"
        price.style.fontSize = "small"
        task.appendChild(price)

        const description = document.createElement('p')
        description.textContent = "Description: " + data[i].description
        description.id = "description"
        description.style.fontSize = "small"
        task.appendChild(description)

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
        task.appendChild(urlArea)

    
        checkBox.addEventListener('click', function() {
            let task = this.parentNode;
            // let url = "https://api.vschool.io/ada/todo/"
            // let itemUrl = url + data[i]._id;

            if (checkBox.checked) {
                task.style.textDecoration = "line-through"
                completed.textContent = "Completed: true"
                const completedTrue = {
                    completed: true
                }
                const result1 = Object.assign(completed, completedTrue)
                axios.put("https://api.vschool.io/ada/todo/" + data[i]._id, result1)
                    .then(res => console.log(res.response.data))
                    .catch(err => console.log(err.response.data))
            } else {
                task.style.textDecoration = "none"
                completed.textContent = "Completed: false"
                const completedFalse = {
                    completed: false
                }
                const result2 = Object.assign(completed, completedFalse)
                axios.put("https://api.vschool.io/ada/todo/" + data[i]._id, result2)
                    // .then(res => getData())
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
            }
        })
    }
}

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