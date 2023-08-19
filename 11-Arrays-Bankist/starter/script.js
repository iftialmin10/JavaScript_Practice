'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//whenever we need something to do then create a function for that and also pass the variable as argument not create global variable
const displayMovements = function (movement, sort = false) {
  //for start from a empty container
  containerMovements.innerHTML = ''; //here innerHTML & textContent both are same but textContent return only the value itself on the other hand innerHTML return everything including the html( all the html tag including)

  const movs = sort ? movement.slice().sort((a, b) => a - b) : movement; // here we use .slice method before .sort method bcz we need to create shallow copy of original array then we can sort the array

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    //for adding/attach this html onto the webpage use a method insertAdjacentHTML
    //select the class which i need to add this method
    //this method accept 2 argument
    // (1st one is which time we want to attach the html , 2nd is the string containing the HTML that we want to insert)
    containerMovements.insertAdjacentHTML('afterbegin', html); //(kind of sorting)
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0); // for storing data and also create a new property of object

  labelBalance.textContent = `${acc.balance}€`;
};

// Summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(depo => depo > 0)
    .reduce((acc, depo) => acc + depo, 0);
  labelSumIn.textContent = `${incomes}€`;

  const expense = acc.movements
    .filter(withDraw => withDraw < 0)
    .reduce((acc, withDraw) => acc + withDraw, 0);
  labelSumOut.textContent = `${Math.abs(expense)}€`; //here Math.abs use for absolute value

  const interest = acc.movements
    .filter(depo => depo > 0)
    .map(depo => (depo * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, depo) => acc + depo, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// //Computing UserName
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner //here acc.UserName create a new property in main
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    //console.log(userName);
  });
};

createUserName(accounts);
// console.log(accounts);

//refactoring
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event_Handler

// LogIn button

let currentAccount; //declare this globally bcz its needed in future
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  // optional chaining = ?.
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear input field
    inputLoginUsername.value = inputLoginPin.value = ''; //assignment operator work from right to left
    inputLoginPin.blur(); //use it for not focus

    // Updating UI

    updateUI(currentAccount);
  }
});

// Transfer Button
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // to avoid form defult reload
  const amount = Number(inputTransferAmount.value); //by default in string then convert to number
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  ); //use find method to pass full object/with other information to find more accurate value

  // for remove transfer to and amount value empty
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Updating UI

    updateUI(currentAccount);
  }
});

// Request Loan button
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});
// FindIndex is a cousin type method of find method , also work with  index
//Close button
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);
    // as like .indexOf(23)

    //Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }
});

// for preserve any value as state it is wise to describe it outside
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted); // here the state value is opposite of default value
  sorted = !sorted; // for flip method each time click
});

// const createUserName = function (name) {
//   const userName = name
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   console.log(userName);
// };

// createUserName('Ifti Alamin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//slice method: we can extract part of any array but without changing the original array.
//Slice method (1st,2nd) has 2 part. 1st one is extract start from and 2nd one is exrtact end point.
//if Slice(1) has only 1 value then its start from this point and end at the last
//Slice method dont muted the original array/string instead its create new thing
// for using it : variable.slice(index number)

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //Slice method
// console.log(arr.slice(2));
// console.log(arr.slice(1, 7)); //.slice(1,7) last parameter value is indicate the index with minus 1
// console.log(arr.slice(-2)); //-2 indicate the last 2 value
// console.log(arr.slice(1, -1)); //here last -index means except last index value
// console.log(arr.slice()); //shallow copy of original
// console.log([...arr]); //its also create a shallow copy but it means sprade the value or extract from the main array

// //Splice method
// //its work all most same as like slice method but difference is it change the original array thats mean mutated the array.
// //here splice extract the value delete them from main

// //console.log(arr.splice(2));
// console.log(arr.splice(-1)); //delete last array value
// console.log(arr);
// arr.splice(1, 3); //.splice(1st index, number of elem want remove)
// console.log(arr);

// //Reverse
// //mean start from last to first
// //Reverse method does actually mutated the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2); //main array also change

// //Concat
// // add 2 array
// const letters = arr.concat(arr2); //here 1st_array.cancat(2nd_array)
// console.log(letters);
// console.log([...arr, ...arr2]); //sprade operator does the same thing
// console.log(arr, arr2); //does not mutate the main array both of them(method)

// //Join method
// //join all the alphabet with something between then use join method
// console.log(letters.join('-')); // .join('which symbol you want to add')

//At method
//if you want to see specific value from array then

// const arr = [23, 73, 84];
// console.log(arr[0]); //its bracket notation
// console.log(arr.at(0)); //both are mean that arr point at position ()/[]

// //getting the array last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1)); //negative index start counting from last

// //at method works on string also
// console.log('ifti alamin'.at(0));
// console.log('ifti alamin'.at(-1));

//Looping arrays _ for each method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //for of loop
// //for (const movement of movements)
// //for counter number/index we use entries, that means get if needed index with value
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 0}: you deposited ${movement}`);
//   } else if (movement < 0) {
//     console.log(`Movement ${i + 0}: you withdraw ${Math.abs(movement)}`); //for removing sign use Math.abs
//   }
// }

// //forEach loop method
// //Remember to use capital E for each
// // here forEach method require a callback function
// //technically forEach is a higher order function
// //does is to loop over the array and in each iteration it will execute this callback function
// //also as the forEach method calls this callback function in each iteration it will pass in the current element of the array as an argument

// console.log('-------forEach-------');
// movements.forEach(function (
//   mov,
//   i,
//   arr
//   //(curr ele, ind, arr)
//   // in callback function it passes cuurent element, index and entire array which one we looping // here variable names does not matter but order of variable matter // we can use 1 parameter or 2 or 3 what we need but follow order
// ) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 0}: you deposited ${mov}`);
//   } else if (mov < 0) {
//     console.log(`Movement ${i + 0}: you withdraw ${Math.abs(mov)}`); //for removing sign use Math.abs
//   }
// });

//in forEach loop there are no break scope, thats mean no break & continue option

// passing element as like
// 0: function(200)
// 1: function(450)
// 2: function(400)
// .......

// //forEach with Maps
// //Map have key and value
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set forEach
// set method avoid duplicate value

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`); // _ use in js for unnecessery value
// });
// //set method does not have key and index value only have value

//Coding challenge 2
// const checkDogs = function (dogsJulia, dogsKate) {
//   //console.log(dogsJulia);
//   const juliasCorrected = dogsJulia.slice();
//   juliasCorrected.splice(0, 1);
//   juliasCorrected.splice(-2);
//   console.log(juliasCorrected);
//   const totalDog = juliasCorrected.concat(dogsKate);
//   console.log(totalDog);
//   totalDog.forEach(function (dogAge, i) {
//     if (dogAge < 5) {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     } else {
//       console.log(`Dog number ${i + 1} is an adult and is ${dogAge} years old`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// //Data transformation by 3 methods: map, filter & reduce
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //MAP method
// //MAP return a new array containing the result of applying operation on all original array element
// const eurToUSD = 1.1;

// const movementsUSD = movements.map(function (
//   mov //here array.map(callback function(){})
// ) {
//   return mov * eurToUSD;
// });

// console.log(movements);
// console.log(movementsUSD);

// //By arrow function
// const movementsUSDArrow = movements.map(mov => mov * eurToUSD);
// console.log(movementsUSDArrow);

// //for of array
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUSD);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: you ${mov > 0 ? 'Deposited' : 'Withdraw'} ${Math.abs(
//       mov
//     )}`

//   //forEach method log by each line indivisually but .map log full thing in one array

//   //reference
//   //   if (mov > 0) {
//   //     return `Movement ${i + 0}: you deposited ${mov}`;
//   //   } else if (mov < 0) {
//   //     return `Movement ${i + 0}: you withdraw ${Math.abs(mov)}`;
//   //   }
// );

// console.log(movementsDescriptions);

//The filter method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// //By for of loop
// const depositFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositFor.push(mov);
//   }

//   //its a example of ternary operator
//   //mov > 0 ? depositFor.push(mov) : ' bjjbn';
// }

// const withdrawals = [];
// const withDrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withDrawals);

// The reduce method
//main benefit is accumulator
//Accumulator is like a snowball
//.reduce(function(1st is accumulator, 2nd current ele, index, array){ }, 0)(here 0 is the initial value of accumulator)
// accumulator hold the sum/ result of previous values
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

//samething in arrow function
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// //same thing in for of loop
// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// //Maximum value
// //reduce use for boiling down the array into just a one single array
// const maxValue = movements.reduce(
//   (maxV, currV) => (maxV < currV ? (maxV = currV) : (maxV = maxV)),
//   movements[0]
// );

// console.log(maxValue);

//Challenge 2
// const calcAverageHumanAge = function (ages) {
//   //part1
//   const dogAgeToHuman = ages.map(function (dogAge) {
//     let humanAge;
//     if (dogAge <= 2) {
//       humanAge = 2 * dogAge;
//     } else {
//       humanAge = 16 + dogAge * 4;
//     }
//     return humanAge;
//   });
//   console.log(dogAgeToHuman);

//   //part 2
//   const matureDog = dogAgeToHuman.filter(humanAge => humanAge > 18);
//   console.log(matureDog);

//   //part3
//   const average = matureDog.reduce(
//     (acc, age) => acc + age / matureDog.length,
//     0
//   );

//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

// Pipeline / Chaining method
// here we can also add another method after one method return and until the previous method return an array.
// map and filter method return array but reduce method not return an array only a single value
// for that we can also say that reduce method is the last method of the chain method
// its an amaizing thing but also have some drawback. If we got unexpected output we dont understand/get the bug in which method
// to solve this problem it would be good to check out the array in each of these different steps
// if we want to see that result of only this opoeration we can check out the current array in the next array method that has chained on that method
// remark about chaining:
// 1) we should not over use chaining , so we should optimize it bcz chaining tones of methods one after the other can cause a real performance issue if we have really huge array
//  if we have big chain of methods we should try to compress all the functionality that they do into asa little methods as possible
// look for opportunity to use less use of chain method
// 2) in JS its a bad practise to chain method that mutate the underlying original array as like splice/reverse method

// const eurToUSD = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     //console.log(arr);
//     return mov * eurToUSD;
//   })
//   //.map(mov => mov * eurToUSD)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// //Challenge 3
// const calcAverageHumanAge2 = ages =>
//   ages
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(dogAge => dogAge >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avgh1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// const avgh2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// console.log(avgh1, avgh2);

// //Find method:
// // We can use the find method to retrive one element of an array based on a condition
// // Find method give/ return boolean value thats mean true or false
// // Find method have one condition and 1 callback function
// // Find method not like to filter method bcz
// // Find method will actually not return a new array but it will only return the first element in the array that satisfies this condition.
// // By find method we can basically find an object in the array based on some property of that object

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis'); //here .find(function => then inside write required condition)
// console.log(account);

// //Samething but for of loop
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }

// Some Method
// Some method check the condition
// its return a true or false value through call back function
// When we see word like any then think about .somemethod
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// console.log(movements.some(mov => mov === -130));

// // Include method check also the equality
// console.log(movements);
// console.log(movements.includes(-130)); // include method check the value in the array

// // Every method is cousin method of some method
// // This method also return true/false value ,
// // But it works if all of the elements in the array satisfy the condition that we pass in.
// // In other word , if every element passes the test in our callback function only then the every method return true
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback function
// // Here, we can describe the function outside of argument and then just pass in the argument as like variable
// // By this we can easily use this function in different method
// // and also need to change something then change only one place

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Flat and FlatMap method
// flat method create array inside of an array, other value etc extract them and simly create new array with the all value
// no need to call back function

// const arr = [[1, 2, 3], [4, 5, 6, 7], 8, 9, 10];
// console.log(arr.flat());

// // Deeper nested
// const arrDepeer = [[[1, 2], 3], [4, [[5, 6], 7]], 8, 9, 10];
// console.log(arrDepeer.flat(3)); // we can also takes the element out by deepth leve element by .flat(deepth level = 1,2,3....) ,

// // Example from real life
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance);

// //we can chaining here to reduce length
// //flat
// const overAllBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance2);

// flatMap
// In flatMap here the condition is same as like flat
// const overAllBalance3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance3);

//Sorting
// By .sort() method
// its mutate the original array
//string
// const owners = ['Ifti', 'Alamin', 'Kibti', 'Alvie'];
// console.log(owners);
// console.log(owners.sort());
// console.log(owners);

//  number
// thats mean sorting method applicable only for string
// its work like 1st alphabet
// console.log(movements);
// console.log(movements.sort());
// console.log(movements);

// sorting method with callback function

// return < 0, A, B = 450 , -400 (keep order) (return negative value)
// return > 0, B, A = 450, 400 (switch order) (return positive value)

// Ascending
// here .sort(current value, next value)
// We try to return something negative or positive value which one we need

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

// Other way
// movements.sort((a, b) => a - b);
// console.log(movements);

// Descending

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// console.log(movements);

// movements.sort((a, b) => b - a);
// console.log(movements);

// More ways of creating and filling arrays
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

// // fill method
// // Empty array + fill method
// // this method mutate the original array
// const x = new Array(7); //this create number of empty array
// console.log(x);

// //x.fill(1); //this will fill the array with this number
// // besides this value we want to fill with and also specify where we want it to start to fill with index

// //x.fill(1, 3); //.fill(1st which value we want fill with , 2nd which index start from to end)
// x.fill(1, 3, 5); // here .fill(value, starting index, final index) final index is not be included in the array
// x.fill(1);
// console.log(x);

// arr.fill(26, 5, 7);
// console.log(arr);

// // Array.from
// // recreate from 1st programtic array
// // here we dont use Array.from as a method on an array but on a array constructor
// //here Array is a function and on this function .from() is a method

// const y = Array.from({ length: 7 }, () => 1); //we first pass in an object with the property in argument, 2nd argument is a mapping function as like callback function
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1); // i = index will vary from between 0-6. Here we use _ instead of cur bcz its mean that we dont use this variable , this is only for work need
// console.log(z);
// // Array.from 2nd argument is a mapping callback function

// // 100 times roll dice

// const random = Math.trunc(Math.random() * 100 + 1);
// const finalRandom = Array.from({ length: 100 }, (_, random) => random + 1);
// console.log(finalRandom);

// // if we want to use Nodelist(document.querySelectorAll('.class_name')) as like Array.from , then first convert the Nodelist to array by this method

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', '')) //its a mapping function which transform that initial array to an array exactly as we want it
//   );
//   // we can now remove euro sign by

//   console.log(movementsUI);

//   // Another way of convertion Nodelist to array
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')]; //spread the result of this querySelectorAll() in an new array
//   // 1st one is better
// });

// Array method practise

// Ex. 1)

//const bankDepositSum = accounts.map(acc => acc.movements).flat(); // 1st simplify the all array then convert them into a single array

//Alternative way
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements) // here we out all the value from the object then place it in a new array
//   .filter(mov => mov > 0) //here filter use for positive value
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// Ex. 2)
// here we 1st check deposit greater than 1000 by filter and .length indicate the total deposit
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// Another way

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // prefixed ++ operator
// let a = 10;
// console.log(a++); //here after varible ++ operator increase value but return the previous value
// console.log(++a); //here befor ++ increase the value also return the increase value
// console.log(a);

// Ex. 3) goal of this exercise is create object
// const sum = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // In an arrow function the value is only automatically, so implicitly returned when we dont have a function body with curly braces
//       // but here we have function with curly braces , so therefore we have to explicitly, so to manually return the accumulator from the function, so we need to return accumulator
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   ); // here initial value of sums(accumulator) are an object properties

// console.log(sum);

// same solution but in an another way

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 } //create brand new object by reduce method
//   );
// console.log(deposits, withdrawals);

// Ex. 4)
// this is a nice title => This Is a Nice Title
// const convertTitle = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' '); // here .map create original array again and then follow the function inside and .slice(1) means from array index 1 to last are remain same
//   return capitalize(titleCase); // here we again capatalize the string(titleCase) by calling again capatalize function
// };
// console.log(convertTitle('this is a nice title'));
// console.log(convertTitle('this is a Long title but not too long'));
// console.log(convertTitle('and here is another title with an EXAMPLE'));

// Challenge 4)

const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob'],
  },

  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda'],
  },

  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },

  {
    weight: 32,
    curFood: 340,
    owners: ['Michael'],
  },
];

// Task 1)
// here every object is like array element and if we need the value of those object then use (cur.x)

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//task 2)
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah')); // includes give us true or false value
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// task 3)
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// task 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// task 5
// whenever we see any word then think about some method
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// task 6
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// task 7
console.log(dogs.filter(checkEatingOkay));

// task 8
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
