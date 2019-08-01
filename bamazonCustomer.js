// Set up an array as a stand-in for a persistent database
const inventory = [
    { item_id: 0, product_name: 'televisions', dept_name: 'electronics', price: 399.99, stock_quantity: 17 },
    { item_id: 1, product_name: 'flip flops', dept_name: 'clothing',  price: 9.99, stock_quantity: 52 },
    { item_id: 2, product_name: 'dictionaries', dept_name: 'recreation',  price: 24.99, stock_quantity: 747 },
    { item_id: 3, product_name: 'chairs', dept_name: 'home and garden',  price: 59.99, stock_quantity: 57 },
    { item_id: 4, product_name: 'oil paints', dept_name: 'recreation',  price: 24.99, stock_quantity: 72 },
    { item_id: 5, product_name: 'lawn mowers', dept_name: 'home and garden',  price: 159.99, stock_quantity: 7 },
    { item_id: 6, product_name: 'leather belts', dept_name: 'clothing',  price: 29.99, stock_quantity: 798 },
    { item_id: 7, product_name: 'picture frames', dept_name: 'home and garden',  price: 19.99, stock_quantity: 45 },
    { item_id: 8, product_name: 'fidget spinners', dept_name: 'recreation',  price: .99, stock_quantity: 2345 },
    { item_id: 9, product_name: 'glassware sets', dept_name: 'home and garden',  price: 12.99, stock_quantity: 57 },
]
// When a database is made, this variable can be set to equal the database contents.

function stockDisplay() {
    for (let x = 0; x < inventory.length; x++) {
        console.log(JSON.stringify(obj, null, 2));
    }
    itemChoiceMenu();
}

function itemChoiceMenu() {
    console.log("Select the ID of the item you would like to buy.");
    process.stdin.on('data', (input) => {
        let itemChoice = input.trim();
        if (itemChoice < 0 || itemChoice > 9) {
            console.log("This is not a valid ID, sorry.");
            itemChoiceMenu();
        }
        else {
            amountChoiceMenu();
        }
    })
}

function amountChoiceMenu() {
    console.log("How many units would you like to purchase?");
    process.stdin.on('data', (input) => {
        let amountChoice = input.trim();
        if (amountChoice > inventory[itemChoice].stock_quantity) {
            console.log("Sorry, we don't have that many in stock.");
            amountChoiceMenu();
        }
        else {
            inventory[itemChoice].stock_quantity -= amountChoice;
            // When the database is made, this can be applied to the database itself rather than the array.
            console.log("Congratulations on your purchase of " + amountChoice + inventory[itemChoice].product_name + "! Your total is " + (amountChoice * inventory[itemChoice].price) + ".");
            stockDisplay();
        }
    });
}

stockDisplay();