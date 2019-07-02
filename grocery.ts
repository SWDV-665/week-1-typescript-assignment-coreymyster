class Grocery {
  /*item: string;
  quantity: number;*/

  constructor(
    public item: string,
    public quantity: number
  ) {
    this.item = item;
    this.quantity = quantity;
  }
}

function showList(groceryItem: Grocery) {
  return `${groceryItem.item}: ${groceryItem.quantity}`
}


let groceryList = new Grocery();

let newItem = new Grocery("Tomatoes", 3);
let newItem2 = new Grocery("Onions", 5);
let newItem3 = new Grocery("Milk", 1);
let newItem4 = new Grocery("14.5oz Chickpeas", 2);


document.body.textContent = showList(newItem);
