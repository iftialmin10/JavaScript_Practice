'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   bookings.push(booking);
//   console.log(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

//passing argument value vs ref
// const flight = 'LH234';
// const ifti = {
//   name: 'ifti',
//   passport: 2437455684323,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH111'; //primitive value cant change
//   passenger.name = 'Mr. ' + passenger.name + ' Alamin'; //reference/object value can change

//   if (passenger.passport === 2437455684323) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, ifti);
// // console.log(flight);
// // console.log(ifti);

// //manipulate same object by different function
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(ifti);
// checkIn(flight, ifti);

//function accepting callback function
// low order function(bcz they work as like labour)
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' '); //here ... sprade the value
//   return [first.toUpperCase(), ...others].join(' '); //destructuring
// };

// //High-order function(bcz they are only command/order the labour, htey dont bother about labour work  )
// const transformer = function (str, fn) {
//   console.log(`Originl string: ${str}`);
//   console.log(`transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`); //function property(name)
// };

// transformer('JavaScript is the best', upperFirstWord); //call back function
// transformer('JavaScript is the best', oneWord); //call back function

// //JS uses callbacks all the time
// const high5 = function () {
//   console.log('👏');
// };
// document.body.addEventListener('click', high5);

// ['Ifti', 'Al', 'Amin'].forEach(high5); //each is property

//functioin returning function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// //arrow function
// const greet1 = greeting1 => name1 => console.log(`${greeting1} ${name1}`);

// greet1('yeas')('maria');
// const greeter = greet('Hey');
// greeter('Ifti');
// greeter('Alamin');

// //pass returning function parameter after 1st function parameter
// greet('Hello')('Kibti'); //(first para)(return para of fn)

// //the call and apply method
// const emirats = {
//   airline: 'Emirats',
//   iataCode: 'EM',
//   booking: [],
//   //book: function(){}
//   //enhanced object literal syntax (without having to write a function)
//   //its also object property
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// emirats.book(239, 'Ifti');
// emirats.book(635, 'Maria');
// console.log(emirats);

// const banglaAirlines = {
//   airline: 'BangAir',
//   iataCode: 'BA',
//   booking: [],
// };

// const book = emirats.book; //can possible bcz js has first class function
// //does not work
// //book(23, 'Sarah'); //here emirats this keyword use only for emirats object scope thats why this keyword not worked in regular function. But we can use this keyword manually/explictly by three method: call,apply and bind.

// //call method

// //book is the function name which one we want to use. Function is a kind of object. Object has method and also function has a method(call,apply& bind)
// book.call(banglaAirlines, 23, 'Sarah'); //(this keyword need point to that, argument1, argument2)
// console.log(banglaAirlines);

// book.call(emirats, 239, 'Jenifa');
// console.log(emirats);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   booking: [],
// };

// book.call(swiss, 583, 'Xara');
// console.log(swiss);

// //Apply method
// //apply method is same as call method. But main difference is does not receive a list of argument as example after this keyword. But instead it take an array of the argument.

// const flightData = [583, 'Shakib'];
// book.apply(swiss, flightData); //(this key point swiss, argument is an array)
// console.log(swiss);

// //modern js does not use apply method instead use sprade operator with call method

// book.call(swiss, ...flightData); //here sprade operator out the argument from an array

// //Bind method
// //bind method does not immediately call the function instead it returns a new function where this keyword bound.

// //we can also bind all the booking function for each airline by one argument passed

// const bookBA = book.bind(banglaAirlines); //(return a new function & here object name is this keyword & also store this function in a variable)
// const bookEM = book.bind(emirats);
// const bookSwiss = book.bind(swiss);

// bookBA(289, 'Abdullah'); //regular call function

// const bookBA23 = book.bind(banglaAirlines, 23); //here bookBA23 is a function &argument(first one is object/flightName which is preset the this keyword, 2nd one is number that we need/want to set)
// bookBA23('ifti almin'); //now function only need name remain are given before
// bookBA23('Hamza');

// //with Event Listeners
// emirats.planes = 300; //add new method
// emirats.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', emirats.buyPlane.bind(emirats));

// //Partial application
// // const addTax = (rate, value) => value + value * rate; //here order of the argument is important(which one is to preset value is set first/give 1st position, then remaining argument)
// // console.log(addTax(0.1, 300));

// // //preset one value
// // const addVAT = addTax.bind(null, 0.23); //here in this function no need to describe this keyword/object. For this reason we use null. Null means it would be any other value & also there are no this keyword/this
// // //upper function looks like
// // //addVAT = value => value + value*0.23 //(bcz we set rate)
// // console.log(addVAT(100)); //(here in addVAT function parameter we use only value bcz we already set the rate)
// // console.log(addVAT(23));

// //challenge of bind method (partial application) by arrow function
// const addTAX = rate => value => value + value * rate;
// console.log(addTAX(0.23)(100)); //here in arrow function (first one is first functioin argument/value)(2nd one is second function argument/value)

// // Regular function
// const addTAX1 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addTAX2 = addTAX1(0.23);
// console.log(addTAX2(100));

//Coding Challenge 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   option: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   //This generates [0,0,0,0].
//   answers: new Array(4).fill(0),

//   //Get answer in number thats why use Number(prompt())
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.option.join('\n')}\n(Write option number)`
//       )
//     ); // here \n use for next line & also option is array thats why we call join method to create them as string
//     console.log(answer);

//     //Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++; //here we use short circuiting as like if work. if 1st 2 value are true than last one execute

//     //console.log(this.answers); //array value in log

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(
//     type = 'array' // we use = for by default value from ES6
//   ) {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`); // for creating string and value from answers and join them by method
//     }
//   },
// };

// //poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll)); //here registerNewAnswer does not work bcz we are trying to read property join from poll object but here this point to .poll button bcz in eventhandler function this keyword will always point to the element to which it is attached. for avoiding this we use bind method set it to a object ,here poll.

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); //use call instead this keyword and also call use when we need a different this key and also we create object in call function

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//Immediately Invoked function
//In JavaScript a function executes once when we call the function, but we can immediately call the function. For that we dont store the function in a variable & also call the function just after the function

//Normal function
// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// //Invoked function
// (function () {
//   console.log('This will run immediately');
// })(); //here we wrapping the hole function as a expression and also call just after the function

// //in arrow function
// (() => console.log('This will run immediately'))();

//if we need variable private use than create them into a block

//Closures
//Closure is not a manual thing, it happens automatically in certain situation, we just need to recognize those situation
//closure makes a function remember all the variables that existed at the function's birthplace essentially
// Any function always has access to the variable environment of the execution context in which the function was created

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();

// console.dir(booker);

//[[]] this mean we cant access this value or scoped value

//Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //Re-assign f function
// h();
// f();
// console.dir(f);

// //Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000); //timer function/callback function, here (func(){executeable thing},timercount/mili_sec)

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// //closure does have priority over the scope chain.
// const perGroup = 1000; // after executing boardPassenger function , remain function execute in global scope and also can use global variable if the variable not found in the boardPassenger/main function variable environment. But if same variable are in main function scope and with also global scope then 2nd/ callback function use this variable from main function scope/parent scope bcz of chain scope.

// boardPassengers(180, 3);

//Challenge 2 Immediately Invoked Function Expression

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
