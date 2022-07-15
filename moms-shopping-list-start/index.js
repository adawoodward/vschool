// Part 1 - A user will be able to add list items to the pre-built `ul` using the pre-built form
// Part 1 - New list items should have the same format as the `li`'s that come with the git repo
// Part 2 - A user will be able to delete items using an items delete button
// github changed

document.getElementById("title").setAttribute("type", "text");
title.setAttribute('type', 'text');

const input = document.getElementById("title")

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
   
    let div = document.createElement("div");
    div.textContent = x;
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    li.append(div, editBtn, removeBtn);

    removeBtn.addEventListener('click', function() {
        var li = this.parentNode;
        li.remove()
    })

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
    })
});


