// Part 1 - A user will be able to add list items to the pre-built `ul` using the pre-built form
// Part 1 - New list items should have the same format as the `li`'s that come with the git repo
// Part 2 - A user will be able to delete items using an items delete button
// github changed

document.getElementById("title").setAttribute("type", "text");
title.setAttribute('type', 'text');

const input = document.getElementById("title")
// var x = document.getElementById("title").value;

// var submitBtn = document.querySelector("button");
// submitBtn.id = "submit";
// var onclick = submitBtn.getAttribute("onclick");
var form = document.addItem

form.addEventListener('submit', (e) =>
{ 
    e.preventDefault();
    var list = document.querySelector('ul');
    var li = document.createElement('li');
    li.id = "li";
    var x = input.value;
    input.value = "";
    var appendedItem = list.appendChild(li);
   
    li.innerHTML += "<div>" + x + "</div>"
    
    li.innerHTML += "<button class='editBtn' id='edit' type='button'>" + "edit" + "</button>" + " ";
    
    li.innerHTML += "<button class='removeBtn' id='remove' type='button'>" + "X" + "</button>"

    var remove = document.querySelectorAll('.removeBtn')

    remove.forEach(removeBtn => {
        removeBtn.addEventListener('click', function() {
            var li = this.parentNode;
            li.remove()
        })
    })

    var edit = document.querySelectorAll('.editBtn');
    var save = document.querySelectorAll('.saveBtn');

    edit.forEach (editBtn => {
        editBtn.addEventListener('click', function() {
            var div = this.previousSibling;
            div.contentEditable = true;
            // editBtn.innerHTML = "save";
            editBtn.id = 'save';
            editBtn.className = 'saveBtn';
            editBtn.style.display = 'none';
            var saveBtn = document.createElement("button");
            saveBtn.textContent = "save";
            li.appendChild(saveBtn);
            saveBtn.addEventListener('click', function() {
                div.contentEditable = false;
                saveBtn.remove();
                editBtn.style.display = 'inline-block';
            })
            // save.forEach (saveBtn => {
            //     saveBtn.addEventListener('click', function(e) {
            //         // var li = this.parentNode;
            //         // li.removeAttribute("contenteditable");
            //         saveBtn.innerHTML = "edit";
            //         saveBtn.id = 'edit';
            //         // var div = this.previousSibling;
            //         div.contentEditable = false;
            //     })
            // })
        })

    })
});



// function createEditBtn() {
//     const editBtn = document.createElement("button");
//     editBtn.innerHTML = "edit";
//     editBtn.id = 'edit';
//     var onclick = editBtn.getAttribute("onclick");
//     document.getElementById("li").appendChild(editBtn);
// }

