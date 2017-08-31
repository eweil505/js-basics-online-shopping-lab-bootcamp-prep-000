// We've started you off with a `cart` variable that points at an empty array. There are five functions that you'll
// have to code in order to create a working shopping cart:
// 1. The `addToCart()` function accepts one argument, the name of an item.
//     + Use that passed-in string to create a new object representing the item. The object should consist of one
//     key-value pair in which the key is the item's name and the value is a randomly-generated price:
//     `{ itemName: itemPrice }`. As more items are added, the `cart` should start to look something like this:
//     `[ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }]`.
//     + The price of each item should be a randomly-generated integer between 1 and 100.
//       * ***HINT***: Look into `Math.random()` and `Math.floor()`.
//     + If you're struggling to create a new object from the item name, remember that ES6 provides a nifty way
//     to dynamically set the keys in an object literal. That is, it allows the use of variables as keys.
//     + Upon the successful addition of a new item to the cart, the function should print
//     `<itemName> has been added to your cart.` to the console and then `return` the updated `cart`.
// 2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart,
//  printing out the contents as one long, coherent statement in this format: `In your cart, you have bananas at
//  $17, pancake batter at $5, and eggs at $49.`
//     + If the cart is empty, the function should instead print out `Your shopping cart is empty.`
//     + ***Note***: Pay close attention to the syntax above. The printed statement should be a single sentence
//     that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes
//     according to how many items the cart contains:
//       * 1 item — `In your cart, you have bananas at $17.`
//       * 2 items — `In your cart, you have bananas at $17 and pancake batter at $5.`
//       * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
// 3. The `total()` function accepts no arguments, iterates through the `cart` array, and returns the
// current total value of the items in the cart.
// 4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
//     + If the cart does not contain a matching item, the function should print out `That item is not in
//     your cart.` and return the unchanged cart.
//     + If the item *is* present in the cart, the function should remove the object from the cart and then
//     return the updated cart.
//     + ***HINT***: Check each object's key (the name of the item) to see if it matches the parameter,
//     then remove it if it matches. You might find [hasOwnProperty]
// 5. The `placeOrder()` function accepts one argument, a credit card number.
//     + If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
//     + If a card number is received, the function should print out `Your total cost is $71, which will
//     be charged to the card 83296759.` (where `71` is the value returned by `total()` and `83296759`
//     is the credit card number passed to `placeOrder()`). Then, it should empty the `cart` array.


var cart = [];

function addToCart(item) {
 var price = Math.round(Math.random() * 100);
 var newItem = {};
 newItem[item] = price;
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var cart = getCart();
  var result = "In your cart, you have"
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length >= 1) {
    for (var i = 0; i < cart.length; i++) {
      var thisItem = cart[i];

      for (var k in thisItem) {
        var itemName = k;
        var itemPrice = thisItem[k];
      }

      if (i === 0 && cart.length > 3) {
        result += ` ${itemName} at $${itemPrice},`;
      } else if (i >= 0 && i < cart.length - 1 && cart.length > 1){
        result += ` ${itemName} at $${itemPrice}, and`
      } else {
        result += ` ${itemName} at $${itemPrice}.`
      }

  }
    return result;
  }
}

function getCart() {
  return cart;
}

function setCart(c) {
  var cart = c;
  return cart;
}

// function getItemPrice(obj) {
//   var thisKey = null;
//   for (var k in obj) {
//     thisKey = k;
//   }
//   return itemPrice = obj[thisKey];
// }
//
// function getItemName(obj) {
//   var thisKey = null;
//   for (var k in obj) {
//     thisKey = k;
//   }
//   return itemName = thisKey;
// }

function total() {
  var total = 0;
  var cart = getCart();
  for (var i = 0; i < cart.length; i++) {
    var itemPrice = getItemPrice(cart[i]);
    total += itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var cart = getCart();
  for (var i = 0; i < cart.length; i++) {
      var itemName = getItemName(cart[i]);
        if (itemName === item) {
        cart.splice(i, 1)
        return cart;
      }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var result = ``
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total();

    result += `Your total cost is $${totalCost}, which will be charged to
    the card ${cardNumber}.`
  }
  setCart([]);
  return result;
}

function setCart(c) {
  cart = c;
  return cart;
}
