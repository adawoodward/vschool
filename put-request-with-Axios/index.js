// PUT request with axios

const updates = {
    title: "I CHANGED THE TITLE!!!",
    description: "I CHANGED THE DESCRIPTION!!!"
}

axios.put("https://api.vschool.io/ada/todo/631242aa18d1a05bceae6f49", updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))




// GET 
// axios.get("https://api.vschool.io/ada/todo")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))