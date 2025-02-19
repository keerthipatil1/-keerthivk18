//selecting by id
const title=document.getElementById("title");
console.log(title);
console.log(title.textContent);

//selecting by class
const paragraphs = document.getElementsByClassName("description");
console.log(paragraphs);
console.log(paragraphs[0].textContent);

//selecting by Tagname
const listItems=document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[0].textContent);

//using queryslector
const firstParagraph=document.querySelector(".description");
console.log(firstParagraph);
console.log(firstParagraph.textContent);

//using queryselectorAll
const allListItems=document.querySelectorAll("li");
console.log(allListItems);
allListItems.forEach((item)=>console.log(item.textContent));

const title1  = document.getElementById("title");
title.textContent="Updated DOM Title";
title.style.color="pink";
title.style.backgroundColor="black";
title.classList.add("somthing");

const list=document.getElementById("list");
const newItem=document.createElement("li");
newItem.textContent="item 3";
list.appendChild(newItem);

const firstItem=document.querySelector("#list li");
list.insertBefore(newItem,firstItem);

const button = document.getElementById("btn");

function sayHello() {
    
    let Butifulname = prompt("enter a new task");
    console.log(Butifulname);
    let Butifulname11 = prompt("task1");
    console.log(Butifulname);

    if (Butifulname) {
        alert(`good morning ${Butifulname}`);
    }
    else{
        alert("no name entered");
    }
}


button.addEventListener("click",sayHello);
//button.removeEventListener("click",sayHello);



localStorage.setItem("username","keerthi");
console.log(localStorage.getItem("username"));
localStorage.removeItem("username");
localStorage.clear();

sessionStorage.setItem("token","keerthi");
console.log(sessionStorage.getItem("token"));
sessionStorage.removeItem("token");

const user= {name:"keeru",age:20};
localStorage.setItem("user",JSON.stringify(user));

const storedUser=JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);
{
    let num=2;
    const num1=3;

    console.log(num);
    console.log(num1);
}
