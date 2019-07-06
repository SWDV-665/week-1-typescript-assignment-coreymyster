var groceryItemName = [];
// Grocery classthat takes in thename of the itemand quantity purchased
var Grocery = /** @class */ (function () {
    function Grocery(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        // Pushes items to the global groceryItem array
        groceryItemName.push([this.item, this.quantity]);
    }
    return Grocery;
}());
// Loops through the groceryItemArray and outputs the name and quantity of items
function listGroceries() {
    for (var i = 0; i < groceryItemName.length; i++) {
        document.body.innerHTML += "<p>" + groceryItemName[i][0] + ": " + groceryItemName[i][1] + "</p>";
    }
}
// Creates objects in the Grocery class
var tomatoes = new Grocery("Tomatoes", 1);
var milk = new Grocery("Milk", 3);
var onions = new Grocery("Onions", 5);
var cilantro = new Grocery("Cilantro", 2);
// The function that displays the text output on the screen
listGroceries();
