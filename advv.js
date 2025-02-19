import name, { add,multiply } from "./calculator.js";

const product={
    name: "laptop",
    price: 25000,
    brand: "hp",
    details: function () {
        return `${this.brand} ${this.name} cost ${this.price}`;
    },
};
console.log(product.details());


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`My name is ${this.name}`);
};

const keerthi = new Person("keerthi", 10);
keerthi.greet(); 




const getData=new Promise((resolve,reject)=>{
    setTimeout(( ) => {
        let success = false;
        if (success) {
            resolve("Data fetched successfully");
        } else {
            reject("Error fetching data");

        }
    },2000);
});

getData
.then((response) => console.log(response))
.catch((error) => console.log(error));















async function fetchProducts(){
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data);

    }catch(error){
        console.log("error fetching data:",error);
    }
    
}
fetchProducts();