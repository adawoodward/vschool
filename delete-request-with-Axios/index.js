// DELETE request with axios

// axios.delete("https://api.vschool.io/ada/todo/631236b518d1a05bceae6f47")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


const button = document.getElementById('delete-button')

button.addEventListener("click", function () {
    axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})




// GET 
// axios.get("https://api.vschool.io/ada/todo")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))