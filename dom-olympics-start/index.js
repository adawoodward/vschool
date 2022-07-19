// Feel free to change .style or use .name or .header classes from the CSS file.

// document.getElementById("myDIV").className += " class1 class2";
// document.getElementById("myDIV").className = "newStyle";
// const att = document.createAttribute("class");
// att.value = "democlass";
// document.getElementsByTagName("h1")[0].setAttributeNode(att);


// var newName = document.createElement("li")
// newName.textContent = powerRangers[i]
// rangersList.append(newName)

// const para = document.createElement("p");
// para.innerHTML = "This is a paragraph.";
// document.getElementById("myDIV").appendChild(para);

// var text = document.querySelector("#header").textContent
// document.querySelector("#paragraph").textContent = text

var myHeader = document.getElementById("header")
// var myHeader = document.createElement("h1");
myHeader.innerHTML += "JavaScript Made This!!"

var p = document.createElement("p");
p.id = 'secondHeader';
myHeader.appendChild(p);
var span = document.createElement("span");
span.innerHTML = "Ada";
span.style.color = "peachpuff";
myHeader.style.textAlign = "center";
myHeader.style.fontSize = "25px";

var p = document.getElementById("secondHeader");
p.appendChild(span);

p.innerHTML += " wrote this Javascript!";


// document.getElementById('clear-button').setAttribute('onclick', function() {clearAll});

// document.getElementById('clear-button').onclick = function() {clearAll()};


// function clearAll() {
//     messages = document.getElementsByClassName("messages")
//     for (div of messages) {
//         div.value = ' '
//     }
// }


var clearBtn = document.getElementById('clear-button');
var messages = document.getElementsByClassName("messages");
messages.id = 'messages';

var onclick = clearBtn.getAttribute("onclick");

clearBtn.setAttribute('onclick', 'doFunction()');
clearBtn.onclick = function() {doFunction();}

function doFunction() {
    // document.getElementsByClassName("messages").value = "";
    document.getElementsByClassName("messages")[0].innerHTML = "";
}



// if (typeof(onclick) != "function") {
//     clearBtn.setAttribute('onclick', 'doFunction()');
// } else {
//     clearBtn.onclick = function() {
//         doFunction();
//         onclick();
//     };
// }




// clearBtn.addEventListener("click", () => {
//     document.getElementsByClassName("messages").innerText = "";
// });

// clearBtn.onclick = function() {
//     document.getElementsByClassName("messages").innerHTML = "";
// };



// text.innerHTML += "<span>Ada</span>";

// var text = "Ada wrote this";

// var p = "Ada wrote this Javascript"
// p.append(text);
// text.innerHTML += "<span>" + "Ada" + "</span>"

// var myName = "Ada";

// var myName = document.createElement("span");
// myName.className = 'name';
// myName.value = "Ada";
// myName.textContent = "Ada";
// myName.id = 'nameId';
// myName.innerHTML = "Ada";

// console.log(myName);

// var myName = document.getElementById("nameId");

// myName.innerHTML += "Ada wrote this";
