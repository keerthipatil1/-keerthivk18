const button = document.getElementById("btn");

function sayHello() {
    let name = prompt("to do lists");
    console.log(name);

    if (name) {
        alert(`hello ${name}`);
    }
    else{
        alert("no name entered");
    }
}

button.addEventListener("click",sayHello);