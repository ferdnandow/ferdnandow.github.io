// === CALLBACK FUNCTIONS AS DATA RECEIVERS ===

/* The 'main function accepts a parameter named 'callback' 
But it already **has** the data (userName) for the callback to work with */
function fetchUserAndGreet(callback) {
    let userName = "Fernando";
    callback(userName);
}

// Two callback functions that will receive data (name) from the 'main' function
const sayHello = userName => console.log(`Hello: ${userName}`);
const sayGoodbye = userName => console.log(`Goodbye: ${userName}`);

// Calling the 'main' function
fetchUserAndGreet(sayHello);    // Outputs: "Hello, Fernando"
fetchUserAndGreet(sayGoodbye);  // Outputs: "Goodbye, Fernando  "



// Creating an array with objects
const arrUsers = [
    { firstName: "Maria", age: 25, city: "New York" },
    { firstName: "Bob", age: 30, city: "Los Angeles" },
    { firstName: "Charlie", age: 35, city: "Chicago" }
];

/* Create anonymous function expression to use as callback */    
const displayUserAnon = function(user) {
    console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);
}

/* .forEach() is a built-in array method that accepts 
a callback function as an argument */
arrUsers.forEach(displayUserAnon);