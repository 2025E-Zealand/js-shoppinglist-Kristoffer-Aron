//Write your Javascript code here
console.log("Shoppinglist")

function plus(a,b){
    console.log("Hello from plus function");
    return a+b;
}

let result = plus(2,3);
console.log(result);

function gregory(a, id, text){
    let findId = document.getElementById("list");
    let node = document.createElement("li");
    node.setAttribute("id", id);
    node.setAttribute("class", a);
    let textNode = document.createTextNode(text);
    findId.appendChild(node);
    node.appendChild(textNode);
}
gregory("healthy", "5", "Milk");

function findNode(id, type){
    let node = document.getElementById(id);
    node.style.color = "red";
    node.style.backgroundColor = "black";
    node.style.fontSize = "30px";
    node.style.fontWeight = "bold";

    let nynode = document.createElement(type);
    nynode.innerText = "New Node";
    nynode.style.color = "blue";
    
    node.appendChild(nynode);

    return node;
}

// let newnode = findNode("list", "li");
// console.log("New node is :");
// console.log(newnode);

// console.log(plus(2,3));

// function minus(a,b){
//     return a-b;
// }
// console.log(minus(2,3));

// function multiply(a,b){
//     return a*b;
// }
// console.log(multiply(2,3));

// function divide(a,b){
//     return a/b;
// }
// console.log(divide(2,3));