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

        task.id = "task"
        document.getElementById('todo-list').appendChild(task)

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        task.appendChild(editBtn);

        editBtn.addEventListener('click', function() {
            // let titleArea = this.previousSibling;
            // titleArea.contentEditable = true;
            title.contentEditable = true;
            price.contentEditable = true;
            description.contentEditable = true;
            img.contentEditable = true;

            rest.cursor = "focus"
            
            editBtn.id = "saveBtn";
            editBtn.innerHTML = "Save"
            const saveBtn = document.getElementById("saveBtn");
            saveBtn.innerHTML = "Save";
            saveBtn.id = "saveBtn";

            saveBtn.addEventListener('click', function() {
                title.contentEditable = false;
                price.contentEditable = false;
                description.contentEditable = false;
                img.contentEditable = false;

                // e.preventDefault();
                const editedTodo = {
                    title: title.textContent,
                    price: price.textContent,
                    description: description.textContent,
                    imgUrl: img.textContent
                }
                axios.put("https://api.vschool.io/ada/todo/" + data[i]._id, editedTodo)
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

        const priceArea = document.createElement('div')
        priceArea.textContent = "- Price:"
        priceArea.id = "priceArea"
        priceArea.appendChild(price)

        const description = document.createElement('p')
        description.textContent = data[i].description
        description.id = "description"
        description.style.fontSize = "small"

        const descriptionArea = document.createElement('div')
        descriptionArea.textContent = "- Description:"
        descriptionArea.id = "descriptionArea"
        descriptionArea.appendChild(description)

        const completed = document.createElement("p");
        completed.id = "completed"
        completed.style.fontSize = "small"
        task.appendChild(completed)

        const img = document.createElement("p");
        img.id = "img"
        img.textContent = data[i].imgUrl
        img.style.fontSize = "small"

        // img.style.textDecoration = "none";
        // img.style.display = 'block';

        const imgPreview = document.createElement("img");
        imgPreview.id = "imgPreview"
        imgPreview.setAttribute("type", "src")
        imgPreview.src = data[i].imgUrl
        imgPreview.height = "300";
        imgPreview.style.padding = "20px";
        img.style.display = 'block';
        img.appendChild(imgPreview);

        const urlArea = document.createElement("p");
        urlArea.textContent = "- imgUrl: ";
        urlArea.id = "urlArea"
        urlArea.appendChild(img);



        const rest = document.createElement('div');
        rest.id = "rest"
        task.appendChild(rest)
        rest.append(priceArea, descriptionArea, urlArea)
    
        checkBox.addEventListener('click', function() {
            if (checkBox.checked) {
                task.style.textDecoration = "line-through"
                completed.textContent = "Completed: true"

                const completedTrue = {
                    completed: true,
                }
                const result1 = Object.assign(completed, completedTrue)
                axios.put("https://api.vschool.io/ada/todo/" + data[i]._id, result1)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err.res.data))
            } else {
                task.style.textDecoration = "none"
                completed.textContent = "Completed: false"

                const completedFalse = {
                    completed: false,
                    // title: title.textContent,
                    // price: price.textContent.valueOf,
                    // description: description.textContent,
                    // imgUrl: img.textContent
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
        .catch(err => console.log(err.res.data))
})