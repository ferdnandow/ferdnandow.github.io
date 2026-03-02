// SAMPLE DATA
const products = [
    { id: 1, name: "Keyboard", price: 49.99, available: true },
    { id: 2, name: "Mouse", price: 25.50, available: false },
    { id: 3, name: "Monitor", price: 199.99, available: true },
    { id: 4, name: "Headset", price: 89.00, available: true },
    { id: 5, name: "Webcam", price: 59.90, available: false },
    { id: 6, name: "USB Hub", price: 29.99, available: true },
    { id: 7, name: "Laptop Stand", price: 34.95, available: true },
    { id: 8, name: "Microphone", price: 120.00, available: false },
    { id: 9, name: "Chair", price: 249.99, available: true },
    { id: 10, name: "Desk Lamp", price: 39.99, available: true }
];

const productList = document.getElementById("productList");

function createRow(product) {
    const availabilityText = product.available ? "Available" : "Unavailable";
    const availabilityColor = product.available ? "text-green-400" : "text-red-400";

    const row = document.createElement("div");

    // Assign product ID to row
    row.id = `row-${product.id}`;

    row.className =
        "bg-gray-800 rounded-xl shadow-md p-4 hover:bg-gray-700 transition";

    row.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 items-center">
            
            <!-- ID -->
            <div class="text-gray-400 md:text-gray-300">
                <span class="md:hidden font-semibold">ID: </span>${product.id}
            </div>

            <!-- Name -->
            <div class="font-semibold text-accentBlue text-lg">
                ${product.name}
            </div>

            <!-- Price -->
            <div>
                <span class="md:hidden font-semibold">Price: </span>
                $${product.price.toFixed(2)}
            </div>

            <!-- Availability -->
            <div class="${availabilityColor}">
                <span class="md:hidden font-semibold">Status: </span>
                ${availabilityText}
            </div>

            <!-- Button -->
            <div>
                <button 
                    id="btn-${product.id}" 
                    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition w-full md:w-auto"
                    onclick="showProductId(${product.id})"
                >
                    View ID
                </button>
            </div>
        </div>
    `;

    return row;
}

function showProductId(id) {
    alert(`Product ID: ${id}`);
}

// RENDER
products.forEach(product => {
    const row = createRow(product);
    productList.appendChild(row);
});
