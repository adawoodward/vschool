const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0])
    }
}

function showData(arr) {

    // Only 8 rows showing
    // for (let i = 0; i < arr.pokemon[i].name.length; i++) {
    //     const p = document.createElement("p")
    //     p.textContent = arr.pokemon[i].name
    //     document.body.appendChild(p)
    // }

    // Showing all the names
    // for (let i = 0; i < arr.pokemon.length; i++) {
    //     const p = document.createElement("p")
    //     p.textContent = arr.pokemon[i].name
    //     document.body.appendChild(p)
    // }

    // Extra credit: names and detail
    for (let i = 0; i < arr.pokemon.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = arr.pokemon[i].name
        document.body.appendChild(h1)
        const p = document.createElement("p")
        p.textContent = arr.pokemon[i].resource_uri
        document.body.appendChild(p)
    }
}