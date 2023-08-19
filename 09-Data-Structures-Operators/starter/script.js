'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  //console.log(flight);
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(48);
  console.log(output);
}

// Data needed for first part of the section
const weekdays = ['Friday', 'Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs'];

const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[0]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,
  //in ES6 no need to function keyword
  orderDelivery({ time = '20:00', mainIndex = 0, address, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and
       ${this.mainMenu[mainIndex]} will be delivered to ${address} at
        ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//coding Challenge4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n'); //divide string by '\n' (next line)
//   for (const [i, row] of rows.entries()) { //entries means index & value
//     const [first, second] = row.toLowerCase().trim().split('_');
//     //console.log(row, first, second);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// const names = function (caseName) {
//   const n = caseName.split('_');
//   console.log(n);
//   const camelCase = [];
//   for (const camel of n) {
//   }
// };

// 'underscore_case'
// ' first_name'
// 'Some_Variable'
// '  calculate_Age'
// 'delayed_departure'

// //String has split and join   method
// console.log('a+very+nice+string'.split('+')); //also include in a array
// console.log('Ifti Alamin'.split(' '));

// const [firstName, lastName] = 'Ifti Alamin'.split(' ');
// //console.log(firstName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     //namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     //same result
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('maria kibtia');
// capitalizeName('ifti al amin');

// //padding strinig= fill up the string length with desired symbol, letter or....
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '*')); //.padstart(total length value, 'filling word/symbol') = fill start from 1st
// console.log('ifti'.padStart(20, '&').padEnd(30, '%')); //padEnd = remaining length are fill with end word/symbol

// //real life example of padding
// const maskCreditCard = function (number) {
//   //const str = String(number);
//   const str = number + ''; // concatenated a string make all thing into string
//   const last = str.slice(-4);
//   //console.log(last);
//   return last.padStart(str.length, '*'); //str.length = total number of * before last.padStart
// };
// console.log(maskCreditCard(12121321313));
// console.log(maskCreditCard(51655112646));
// console.log(maskCreditCard(456578787));

// //repeating string
// const message2 = 'Bad weather...All departure dalayed';
// console.log(message2.repeat(5)); //.repeat(the number u want repeat)

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line${'✈'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(11);
// planesInLine(15);
// //Working with string
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[1]);
// console.log('B737'[1]); //we can also see the value of string in line log
// console.log(airline.length);
// console.log('B737'.length); //can also see the length of string in same line

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); //case sensitive & search by word also

// //extract string from a specific positin
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// //we can also specify the last word instead of index(extract)
// console.log(airline.slice(0, airline.indexOf('r')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2)); //last 2 word extract
// console.log(airline.slice(1, -1)); //cut 1st & last

// //small exercise booking airplane seat
// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('Its middle seat');
//   else console.log('Its corner Seat');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('25A');
// checkMiddleSeat('7E');

//string method convert to object method , work as object but before return again convert into string
// console.log(new String('alamin'));
// console.log(typeof new String('alamin'));
// console.log(typeof new String('alamin').slice(1));

// //lowercase uppercase
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('alamiN'.toUpperCase());

// //Fix capitalization in name
// const passenger = 'iftIAlmiN';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1); //look like array index
// console.log(passengerCorrect);

// //Comparising emails
// const email = 'ifti73@io';
// const logInEmail = ' Ifti73@IO \n';

// //normal way
// const lowerEmail = logInEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// // pro way
// const normalizedEmail = logInEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing string
// const priceGB = '238,3%';
// const priceUS = priceGB.replace('%', '$').replace(',', '.'); //here 1st value replace to 2nd value
// console.log(priceUS);

// const annoucement =
//   'All passengers come to the boarding door 23. Boarding door 23!';
// console.log(annoucement.replace('door', 'gate'));
// console.log(annoucement.replaceAll('door', 'gate')); //replace is case sensative

// //regular expression
// console.log(annoucement.replace(/door/g, 'gate')); //g stands for global

// //Booleans & checked string matched
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.includes('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the New Airbus family');
// }

// //practise & here always try to convert string to lowercase ,its easy to compare
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('gun') || baggage.includes('knife')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome to the abroad');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// //Maps Iteration
// const question = new Map([
//   ['question', ' What is the best programming language in the world??'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct', 3],
//   [true, 'Correct🥳'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// // console.log(answer);

// // console.log(question.get(question.get('Correct') === answer));

// //Convert Map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values( )]);

//demo answer
// if( answer === 3){
//   console.log(question.get(true));
// }
// else{
//   console.log(question.get(false));
// }

// //Sets and Maps
// const orderSet = new Set([
//   'Burger',
//   'Pizza',
//   'Mojito',
//   'Momo',
//   'Burger',
//   'Mojito',
//   'Juice',
// ]);
// //use of set
// console.log(orderSet);
// console.log(new Set('ifti AlAmin'));
// console.log(orderSet.size);
// console.log(orderSet.has('Mango')); //serch something in set
// console.log(orderSet.has('Burger'));
// orderSet.add('Bread');
// orderSet.delete('Pizza');
// //orderSet.clear() //all clear
// console.log(orderSet);
// for (const order of orderSet) console.log(order);
// //Example
// const staff = ['Owner', 'Manager', 'labour', 'Manager', 'Owner'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique); //total invidiual rank

// console.log(new Set(staff).size);
// console.log(new Set('iftialamin').size); //unique value in this string

// //use of Maps
// const rest = new Map();
// rest.set('name', 'Hazi Idris');
// rest.set(1, 'Bhola, sadar');
// console.log(rest.set(2, 'Western, para'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 5;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //clever thought but not use all time

// console.log(rest.has('categories'));
// rest.delete(1); //delete by 1st value or key
// //rest.clear();
// console.log(rest);
// console.log(rest.size);

// const arr =[1, 2]
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr)); //thats not work though same but work in variable , they are not exactly the same in heap

// //for loop over object
// //property name
// const properties = Object.keys(openingHours) //properties are in array
// console.log(properties);

// //console.log(`We are open on ${properties.length} days`);
// let openStr = `We are open on ${properties.length} days :`

// for (const day of properties){
//   openStr += `${day},  `
// }
// console.log(openStr);

// //property values
// const values = Object.values(openingHours)
// console.log(values);

// //Entire object
// const entries =Object.entries(openingHours)
// console.log(entries);

// //[key, value]
// for( const [day, {open,close}] of entries){
//   console.log(`On ${day} we open at ${open} and close at${close}`);
// }

//optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //with optional chaining object
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //example
// const days = ['Friday', 'Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs'];
// for (const day of days) {
//   //console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'Off for that day'; //nullish operator instead of OR operator
//   console.log(`on ${day}, we open at ${open}`);
// }

//Optional chaining in Method
// console.log(restaurant.order?.(0,1)?? 'Method does not exist');
// console.log(restaurant.orderBurger?.(0,1) ?? 'Method does not exist');

// //Chaining in Array
// const users  = [{name: 'Ifti', email: 'ifti@gmail'}]
// console.log(users[0]?.email ?? 'User array empty');

// //for of loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`); //this give index with element
// }

//Logical assignment operator
// const rest1 ={
//   name : 'Bakery shop',
//   owner : 'Hazi'
// }
// const rest2 ={
//   name : 'Fast food shop',
//   numGuest : 0
// }
//OR assignment operator optimized
// rest1.numGuest = rest1.numGuest || 10
// rest2.numGuest = rest2.numGuest || 10

// rest1.numGuest ||= 10
// rest2.numGuest ||= 10

//extra output in same log for object
// rest1.owner ||= 'No owner'
// rest2.owner ||= 'No Owner'

//nullish assignment operator(null or undefined)
// rest1.numGuest ??=10
// rest2.numGuest ??=10

// //AND assignment operator
// //rest1.owner = rest1.owner && '<Anonymous>'
// rest1.owner &&= '<Anonymous>'
// rest2.owner &&='<>'

// console.log(rest1);
// console.log(rest2);

// //nullish: null and undefined (NOT 0 or '')
// restaurant.numGuest = 0;
// const guest2 = restaurant.numGuest || 'No guest'
// console.log(guest2); //guest2

// const guest = restaurant.numGuest?? 10
// console.log(guest);

// //use any data type, return any data type & short-circuiting
// console.log('----OR----');
// console.log('ifti' || 6);
// console.log('' || 'ifti');
// console.log(0 || true);
// console.log(undefined || null);

// console.log(undefined || 0 || null || 73 || 'Ifti' || '');

// restaurant.numGuest = 23;
// // const guest1 = restaurant.numGuest ? restaurant.numGuest : 'No Guest';
// // console.log(guest1);

// //const guest2 = restaurant.numGuest || 'No guest'
// console.log(restaurant.numGuest || 'No guest'); //guest2

// console.log('----AND----');
// console.log(0 && 5);
// console.log('ifti' && 73);
// console.log('Hello' && 73 && 'ifti' && null);

// //practical example
// restaurant.orderPizza &&
//   restaurant.orderPizza('Mushroom', 'chees', ' Capsicum');

// //1) destructuring
// //spread , because on right side of =
// const arr = [1, 2, ...[4, 5]];
// console.log(arr);

// //rest, bcz on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 6, 7];
// console.log(a, b, others);

// const [pizza, burger, , ...other] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, burger, other);

// //object
// const { thu, ...weekdays } = restaurant.openingHours; //here thu store into its own new object
// console.log(weekdays);

// //2) function
// const add = function (...numbers)//make the spread to array
//  {
//   //console.log(...numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x=[5,9,30]
// add(...x)//spread the value

// restaurant.orderPizza('mushroom','onion', 'chees')
// restaurant.orderPizza('mushroom')

//spreading array
// const arr = [4, 5, 6];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArray = [1, 2, ...arr];
// console.log(newArray);
// console.log(...newArray);
// const newMenu = [...restaurant.mainMenu, 'Momo'];
// console.log(newMenu);
// console.log(...newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// console.log(...menu);

// //iterable: arrays, string, maps, sets, not object
// const str = 'ifti';
// const letters = [...str, ' ', 'A'];
// console.log(letters);
// console.log(...str);
//console.log(`${...str}`); dont work sprade operator in template literal

//sprader for function
// const ingredient = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredient);
// restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
// restaurant.orderPasta(...ingredient);

//object copy as like array
// const newRestaurant = { foundIn: 1999, ...restaurant, founder: 'ifti' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Hazi Idris'
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //destructuring object in function parameter
// restaurant.orderDelivery({
//   time: '24',
//   address: 'western para',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //destructuring object
// const { name, categories, openingHours, locatins } = restaurant;
// console.log(name, categories, openingHours);

// restaurant.orderDelivery({
//   time: '22:00',
//   mainIndex: 2,
// });
// //set default value to avoiding undefined
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //mutating object variable
// let a = 5;
// let b = 6;
// const obj = { a: 5, b: 7, c: 4 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //normal array retrieve
// const arr = [4, 5, 6, 7];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];
// const k = arr[3];
// console.log(x, y, z, k);

// //array single line retrieve
// const [a, b, c, d] = arr;
// console.log(a, b, c, d);

// const [m, , n] = arr;
// console.log(m, n);

// //array retrieve from an object
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //swap value  with data structure
// // const temp = main;
// // main = second
// // secondary = main
// // console.log(main,secondary);

// //swap variable destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// //receive 2  return value from a function
// const [starterCourse, mainCourse] = restaurant.order(2, 1);
// console.log(starterCourse, mainCourse);

// //nested destructuring for array
// const nested = [4, 7, [8, 9, 3]];
// const [o, , [, q, r]] = nested;
// console.log(o, q, r);

// //set default value by 1
// const [g = 1, h = 1, i = 1] = [5, 4];
// console.log(g, h, i);

//challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Gnarby'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Challenge 3
const gameEvents = new Map([
  [17, ' ⚽ Goal'],
  [36, ' 🔁 Substitution'],
  [47, ' ⚽ Goal'],
  [61, ' 🔁 Substitution'],
  [64, ' 🟨 Yellow Card'],
  [69, ' 🟥 Red Card'],
  [70, ' 🔁 Substitution'],
  [72, ' 🔁 Substitution'],
  [76, ' ⚽ Goal'],
  [80, ' ⚽ Goal'],
  [92, ' 🟨 Yellow Card'],
]);

// //1
// const events = [...new Set(gameEvents.values())]; //unpack by sprade operator(...)
// //console.log([...gameEvents.values()]);
// console.log(events);

// //2
// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// //3
// console.log(`An Event happened, on average, every ${90/gameEvents.size} minutes`);

// //bonus
// const time = [...gameEvents.keys()].pop()//last value out from array
// console.log(time);
// console.log(`An Event happened, on average, every ${time/gameEvents.size} minutes`);

// //4
// for (const [key, value] of gameEvents) {
//   //ternary operator
//   const half = key<=45? 'First' : 'Second'
//   console.log(`[${half} Half] ${key}: ${value}`);
//   //if else
//   if (key <= 45) {
//     console.log(`[First Half] ${key}: ${value}`);
//   } else if (key > 45) {
//     console.log(`[Second Half] ${key}: ${value}`);
//   }
//}

// Challenge 2
// task1
// const score = [...game.scored];
// console.log(score);

// for (const [ind, ele] of score.entries())
//   console.log(`Goal ${ind + 1} : ${ele}`);

// //task2
// const value = Object.values(game.odds);
// console.log(value);
// let sum = 0;
// for (const num of value) {
//   sum += num;
// }
// const avgOdd = sum / value.length;
// console.log(avgOdd);

// //task3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// //task4
// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   console.log(player);
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1); //++ = if name comes double or again else name = 1
// }
// console.log(scorers);

// //task1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //task2
// const [gk, ...fieldPlayer] = game.players[0];
// console.log(gk, fieldPlayer);

// //task3
// //const allPlayers = [game.players[0] + game.players[1]];
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //task4
// const a = ['Thiago', 'Coutinho', 'Perisic'];
// const players1Final = [...a, ...players1];
// console.log(players1Final);
// //task5 nested
// //const {team1, x: draw, team2}= game.odds
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, team2, draw);
// //task6
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// //printGoals('Davis', 'Muller','Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //task7
// team1<team2 && console.log('Team 1 is more likely to win');
// team1>team2 && console.log('Team 2 is more like to win');
