// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finishing fetching users');

const shippingCost = 10;
export const cart = [];

// named export
const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// We can export multiple values by named export

const totalCost = 15;
const totalQuantity = 20;

export { totalCost, totalQuantity as tq, shippingCost, addToCart };

// Default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
