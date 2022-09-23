function getData() {
    axios.get("https://api.vschool.io/ada/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

// List the todo titles to the dom
function listData(data) {
    clearList()

    for (let i = 0; i < data.length; i++) {
        const h3 = document.createElement('h3')
        h3.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h3)
        // document.getElementById('todo-list').appendChild(checkbox);
        // const checkbox = document.createElement('input');
        //     checkbox.type = "checkbox";
        //     checkbox.id = "checkbox";
    }
}

// function checkedFunction() {

// }

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
        title: todoForm.title.value
    }

    todoForm.title.value = ""

    axios.post("https://api.vschool.io/ada/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})