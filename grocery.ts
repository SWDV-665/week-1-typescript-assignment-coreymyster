let groceryItemName = [];

// Grocery classthat takes in thename of the itemand quantity purchased
class Grocery {
  item : string;
  quantity: number;

  constructor(item: string, quantity: number) {
    this.item = item;
    this.quantity = quantity;

    // Pushes items to the global groceryItem array
    groceryItemName.push([this.item, this.quantity]);
  }
}

// Loops through the groceryItemArray and outputs the name and quantity of items
function listGroceries() {
  for (let i = 0; i < groceryItemName.length; i++) {
    document.body.innerHTML += `<p>${groceryItemName[i][0]}: ${groceryItemName[i][1]}</p>`
  }
}

// Creates objects in the Grocery class
let tomatoes = new Grocery("Tomatoes", 1);
let milk = new Grocery("Milk", 3);
let onions = new Grocery("Onions", 5);

// The function that displays the text output on the screen
listGroceries();
