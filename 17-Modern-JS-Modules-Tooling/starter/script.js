// Importing module
// import {
//   addToCart,
//   totalCost as price,
//   tq,
//   shippingCost,
// } from './shoppingCart.js'; // './' indicate root directory

// addToCart('Apple', 10);
// console.log(shippingCost);

// console.log(price, tq);

//console.log('Importing module');

/*
 through '*' sign we can import all the value from exported module and 
 store then in a name_space object start with capital letter and also we 
 can access value as like object property
*/

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Mangoe', 20);
// console.log(ShoppingCart.totalCost);

// We can use default and named export all together
// never mixed both of them in same module
// import sum, { addToCart, totalCost as price, tq } from './shoppingCart.js';
// sum('Burger', 5);
// console.log(price, tq);

// Default export
// import sum,  from './shoppingCart.js';

// sum('Burger', 5);

// Mixed with both of two export
// import sum, { cart } from './shoppingCart.js';

// sum('Burger', 5);
// sum('Pizza', 3);
// sum('Cake', 4);

// console.log(cart);

// Top level await:
/*
 To using top-level await we need to declare 'module' key in html file. 
 After declaring 'module' it starts working everywhere in the all module. 
 So that after using await it activated also for remaining part and pause 
 them until await resppponse back. Sometimes its harmful to wait for 
 fetching long or big data
*/
// console.log('Start fetching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('Loading');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1) };
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

// The module pattern
/*
The module pattern main goal is to encapsulate functionality to have private 
data and to exppose a public API and all that things is achieving by using 
a function. Becuase function give us private data by default and also allow 
us to return values, which can become our public API

 */

// generate Object by function return
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from suppplier`);
//   };

//   // by using return we create object and store this object in a variable
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// // Access Object property
// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('Mango', 23);
// //ShoppingCart2.orderStock('Pizza', 32);

// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// CommonJS module available for Node.JS
// Export
// export.addToCart = function(product, quantity){
//   cart.push({ product, quantity });
//   cart.push({ product, quantity });
//       console.log(
//         `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//       );
// }

// // Import
// const {addToCart} = require('./shoppingCart.js')
