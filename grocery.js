var Grocery = /** @class */ (function () {
    /*item: string;
    quantity: number;*/
    function Grocery(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.item = item;
        this.quantity = quantity;
    }
    return Grocery;
}());
function showList(groceryItem) {
    return groceryItem.item + ": " + groceryItem.quantity;
}
var newItem = new Grocery("Tomatoes", 3);
var newItem2 = new Grocery("Onions", 5);
var newItem3 = new Grocery("Milk", 1);
var newItem4 = new Grocery("14.5oz Chickpeas", 2);
document.body.textContent = showList(newItem);
