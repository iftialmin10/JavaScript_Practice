'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1999) {
//       var millenial = true;
//       //creating new variable with same name as outer scopes variable
//       const firstName = 'alamin';

//       //reassign outer scopes variable
//       output = 'new output'; // new assign value of current scope
//       const str = `oh and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }
//     //console.log(str); out of if block
//     console.log(millenial); //avoid this variable type it occur bug
//     //console.log(add(2,3)) outside if block
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Ifti';
// calcAge(1997);

// variable environment

// console.log(me);
// //console.log(job);
// //console.log(year);

// var me = 'ifti'
// const job = 'Engineer'
// let year = 1997

// //function
// console.log(addDecl(2,3))
// //console.log(addExpr(2,3));
// console.log(addArrow); //as like variable
// //console.log(addArrow(2,3));

// function addDecl(a,b){
//   return a+b;
// }

// const addExpr = function(a,b){
//   return a+b;
// }

// var addArrow =(a,b) => a+b;

//example of fictional hoisting

// if (!numProduct) deleteShoppingCart();
// var numProduct = 15;

// //if (!numProduct) deleteShoppingCart();

// function deleteShoppingCart() {
//   console.log('All product deleted');
// }

// var z = 1;
// const y = 2;
// let x = 3;

//this keyword
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1999);

// const calcArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcArrow(1999);

// const ifti = {
//   name: 'alamin',
//   age: 1997,
//   calcAge : function () {
//     console.log(this);
//     console.log(2023 - this.age);
//   },
// };
// ifti.calcAge()

// const jerry ={
//   name: 'jerry',
//   age : 1999
// }
// jerry.calcAge = ifti.calcAge// borrow function for a object
// jerry.calcAge()

//regular function vs arrow function
//var name = 'Jenni'
// const ifti = {
//   name: 'alamin',
//   age: 1997,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.age);

//     //solution 1
//     // const self = this
//     // const isMillenial = function () {
//     //   //console.log(this);
//     //   //console.log(this.age >= 1981 && this.age <= 1996);
//     //   console.log(self.age >= 1981 && self.age <= 1996);
//     // };
//     const isMillenial = () => {
//       console.log(self.age >= 1981 && self.age <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`hey ${this.name}`); //here 'this' indicate global object window
//   },
// };

// ifti.greet();
// ifti.calcAge();


//primitive vs object

let nme ='alamin'
let oldName = nme
nme = 'ifti'
console.log(nme);
console.log(oldName);

const me ={
  nme : 'ifti',
  age : 23
}
const maria = me
console.log(maria);
console.log(me)
maria.nme = 'maria'
console.log(maria);
console.log(me)