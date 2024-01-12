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

// Object.create:
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
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const man = new Person('Kib', 2006);

// const Student = function (firstName, birthYear, course) {
//   /*
//   we can call function and set this keyword by using "call" method and
//   also we should pass this keyword in para meter.
//   */
//   Person.call(this, firstName, birthYear);

//   this.course = course;
// };

// /*
// connect two constructor function through 'object.create()' method.
// Note: we should write this method before we add any more
// prototype / method. If we added object.create() after other method then
// object.cretae() override the method/property that we had already added.
// */
// // Linking prototype
// Student.prototype = Object.create(Person.prototype); //Here 'object.create()' will return an empty object and also help to find parent class

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const ifti = new Student('Ifti', 2002, 'CSE');

// console.log(ifti);
// ifti.introduce();
// ifti.calcAge();
// man.calcAge();

// // In prototype the object is the last thing after that we will get null
// console.log(ifti.__proto__);
// console.log(ifti.__proto__.__proto__);
// console.log(ifti.__proto__.__proto__.__proto__);
// console.log(ifti.__proto__.__proto__.__proto__.__proto__);

// console.log(ifti instanceof Student);
// console.log(ifti instanceof Person);
// console.log(ifti instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// Challenge 3
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

// const EV = function (make, speed, charge) {
//   // Used call method to inherit the parent class
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Linking prototype
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// /*
// There are two method with same name calling accelerate. In JS when there are
// two methods or properties with the same name in a prototype chain, then the
// first one that appears in the chain is the one thats gonna be used. This
// is also true for the scope chain. Here in EV class first appear
// accelerator method that is override the parent class accelerator method.

// */

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.brake();
// tesla.chargeBattery(20);

// console.log(tesla);

// tesla.accelerate();

// tesla.brake();

// Inheritance between classes through ES6

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// /*
// To inherite classes we only need two ingredients. 1st we need "extends"
// parent class name and 2nd we need the super function which is also the
// parent constructor.
// */
// // If we no need to add new method in child class then we dont need to
// //bother writing a constructor method in the child class.
// class StudentCl extends PersonCl {
//   //extends keyword connect to prototype
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear); // Always it needs to happen first!
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   // override parent class property. Noted child class method override the parent class
//   // Prototype chaining goes down to up, child to parent
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const marzia = new StudentCl('Marzia Akhter', 2012, 'CSE');
// marzia.introduce();
// marzia.calcAge();

// Inheritance between classes through 'object.create()'
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const sarah = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto); // PersonProto is the prototype of StudentProto

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear); // we inherit init method from parent class and call it.

//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jara = Object.create(StudentProto); // StudentProto is the prototype of jara and also PersonProto is a parent proto of jara in prototype chain
// jara.init('Jara', 2010, 'CSE');
// jara.introduce();
// jara.calcAge();

// Another class example:
/*
In ES6 class we can add more properties as we want but dont need to all pass or
inputted them through constructor function
*/

/*
There are eight different kinds of fields and methods but here we work with four
1) Public fields/properties: 
2) Private fields/properties
3) Public methods
4) Private methods
There is also the static version.
*/

// class Account {
//   // 1) Public fields(instances)
//   /*
//  Public field: In public field declaration there no need to declare
//  variable with const and let. They are gonna be present on all the
//  instances that we are creating through the class, so they are not on the
//  prototype.
// */
//   local = navigator.language;

//   // 2) Private fields(instances)
//   /*
//   Private fields: According this we can declare private property with
//   # symbol
//   */
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     // protected  property by (_) make it unique
//     this.#pin = pin;
//     //this._movements = [];

//     //this.local = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods:

//   // Public Interface (API)
//   // Below methods are prototype
//   getMovements() {
//     //if we use method then it will not be override
//     return this.#movements;
//   }

//   /*
//   Note: If we dont use 'return this' then our method dont return anything
//   and after that if we try chaining over method then it will get nothing to
//   chain with.
//   */
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val)) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   /* 4) Private Methods:
//   they are very useful to hide the implementation details from the outside.
//   At present Private methods are not implemented '#' in google chrome or
//   any browser, Bcz it behaves like a field instead private methods.
//   So until browser will not supported private method, we need to use '_'
//   for private methods.
// */
//   //#approveLoan(val) {
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Ifti', 'BDT', '2222');

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(100);
// //acc1._approveLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);
// console.log(acc1.pin);
// Account.helper(); //static methods are used only for main object where its created/declared
// // acc1.helper(); // its not accessible

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// //console.log(acc1.#approveLoan(1000)); //private method are not available in google.

// //Chaining methods:
// /*
// For chaining we have to do is to return the object itself at the end of a
// method that we want to be chainable
// */
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// // here we call method again and again and again onto 'acc1' object by
// // returning again again and again.

// console.log(acc1.getMovements());

// Coding Challenge -4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian.accelerate();

//chaining method
rivian.accelerate().accelerate().chargeBattery(50).brake().accelerate();
