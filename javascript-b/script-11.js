// Get the button element
const myButton = document.getElementById("myButton");


// Add event listener to button
myButton.addEventListener('click', e => {
    // Access properties of the event object
    console.log(e.target.id);        // ID of clicked element
    console.log(e.target.classList); // CSS class(es) of clicked element
});


document.getElementById('myNewButton').addEventListener('click', () => {
    console.log('Button clicked');
});

document.getElementById('inner').addEventListener('click', () => {
    console.log('Inner div clicked');
});

document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer div clicked');
});

// **** STOPPING PROPAGATION ****

document.getElementById('myNewButton').addEventListener('click', e => {
    console.log('Button clicked - no parent event triggered');
    e.stopPropagation(); // Stops the event from bubbling up
});

.btn {
   font-size: 16px; margin: 5px; border-radius: 5px; padding: 10px 20px;
   cursor: pointer; border: none; color: white
}

.btn-blue { background-color: #007BFF; }
.btn-green { background-color: #28a745; }
.btn-red { background-color: #dc3545; }
.btn-purple { background-color: #6f42c1; }