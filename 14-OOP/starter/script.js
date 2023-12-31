'use strict';

// /*
// When we call constructor function by new keyword, there are four things happen
// 1. New {} is created
// 2. function is called, this = {} object
// 3. {} linked to prototype
// 4. function automatically return {} object

// */

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   /**Instance method
//   Never create method inside of a constructor function
//   Instead use prototypes and prototypes inheritance
//   Constructor is not a js feature. It develops by developer and we simply
//   use this.
//   */

//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const ifti = new Person('Ifti', 1997);
// console.log(ifti);

// // const maria = new Person('Maria', 2002);
// // console.log(maria);

// // console.log(ifti instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };

// Person.hey();
/*
 Rule: Whatever object is calling the method, will be the this keyword
inside of that function. So there this keyword indicate the full construction
function
 */

////////////////////////////////////
// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
//   /*
//   this keyword is set to the object that is calling the method.
//   */
// };

// maria.calcAge();
// ifti.calcAge();
// /*
// Any object always has access to the methods and properties from its prototypes.
// here maria and ifti are object and calcAge is their prototype.
// */

// console.log(ifti.__proto__);
// // we can confirm that by __proto__. {} linked to prototype

// console.log(ifti.__proto__ === Person.prototype);
// /*
//  prototype of the ifti object is essentially the prototype property of the
//  constructor function. Prototype is not Person(constructor) property but instead
//  it is what gonna be used as the prototype of all the objects that are created
//  with the person constructor function.
// */

// // We can use builtin method to check the prototype of which object
// console.log(Person.prototype.isPrototypeOf(ifti));
// console.log(Person.prototype.isPrototypeOf(maria));
// console.log(Person.prototype.isPrototypeOf(Person));
// // Honest name: .prototypeOfLinkedObjects

// // We can als0 set property on the prototype, its not just method
// Person.prototype.species = 'Homo Sapiens';
// console.log(ifti.species, maria.species); // we can inherit it from prototype

// // We can check which property of object is own and which one is inherit
// console.log(ifti.hasOwnProperty('firstName'));
// console.log(ifti.hasOwnProperty('species'));
// console.log(Person.hasOwnProperty('calcAge'));

// console.log(ifti.__proto__);

// // Object.prototype (top of prototype chain)
// console.log(ifti.__proto__.__proto__);
// console.log(ifti.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 5, 8, 5, 8, 5, 9, 3, 1, 7]; // new Array = []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(x => x + 1);

// Coding challenge 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// console.log(car1);

// const car2 = new Car('Mercedes', 95);
// console.log(car1);

// // test data car1
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.brake();
// car1.brake();

// // // test data car2
// car2.accelerate();
// car2.accelerate();
// car2.accelerate();
// car2.brake();
// car2.brake();
// car2.brake();

// ES6 class for prototypal inheritance

// Class expression
// const PersonCl = class{}

// // Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // here we added method outside of the constructor function
//   // Instance methods
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   // classes have also setters and getter method

//   // get age() {
//   //   return 2037 - this.birthYear;
//   // }

//   // we use getters and setters for data validation
//   // Set a property that already exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     /*
// here we got error message bcz setter and constructor function both try to
// set 'fullname' value at a same time. For avoiding this issue we rename
// our setter variable and after that we use get method
// */ else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method for class
//   // This static methods are not available on the instances.
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// const alvie = new PersonCl('Alvie Ishrak', 2002);
// console.log(alvie);
// // alvie.calcAge();
// //console.log(alvie.age);
// // console.log(alvie.__proto__ === PersonCl.prototype);

// // // Manually add method
// // // PersonCl.prototype.greet = function () {
// // //   console.log(`Hey ${this.firstName}`);
// // // };

// alvie.greet();
// console.log(alvie);

// PersonCl.hey();

// /*
// Characteristics of class:
// 1. Classes are NOT hoisted
// We can use class before they declare in code.

// 2. Classes are first-class citizens
// We can pass them into function and also return them from function. Its possible
// bcz classes are special type of function

// 3. Classes are executed in strict mode
// If we didnt activate it for our entire script, all the code that is in the
// class will be executed in strict mode.
// */

// // Setters and getters
// /*
//  every object in js has two feature and they are getter and setter properties.
//  We call these special properties assessor properties and while the more
//  normal properites are called data properties. So getters and setters are
// basically function that get and set a value so as the name says.
//  */
// const account = {
//   owner: 'Ifti',
//   movements: [200, 100, 200, 300, 550],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   // setters function need atleast one parameter
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// // Dont use
// // account.latest(50)
// // its a method but we need property thats why use below process
// account.latest = 50;
// console.log(account.movements);

// Object.create
// Its use least
// Normally create object as like constructor(capital_name)
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// Create new object and connect with prototype
// const alamin = Object.create(PersonProto); //Object.create(passing_prototype)
// // 'PersonProto' is the prototype of the new object 'alamin' linked each other

// console.log(alamin);

// // added property
// alamin.name = 'Alamin';
// alamin.birthYear = 2002;
// alamin.calcAge();

// console.log(alamin.__proto__ === PersonProto);

// const asha = Object.create(PersonProto);
// asha.init('Asha', 2002);
// console.log(asha);
// asha.calcAge();

// // Challenge 2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speedUS) {
//     this.speed = speedUS * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS); // getting value from get speedUS

// ford.accelerate();
// ford.accelerate();
// ford.brake();

// ford.speedUS = 50;
// console.log(ford);

// Inheritance between class
// Using constructor function:
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
