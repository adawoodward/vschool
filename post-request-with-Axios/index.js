const todoForm = document.todoform 

todoForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/ada/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})