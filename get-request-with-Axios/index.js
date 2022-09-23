// Get requests with axios
// url: https://api.vschool.io/scrimbalessons/todo

// Get All

// axios.get("https://api.vschool.io/ada/todo")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

axios.get("https://api.vschool.io/ada/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))


// Get One
axios.get("https://api.vschool.io/ada/todo/631236b518d1a05bceae6f47")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

