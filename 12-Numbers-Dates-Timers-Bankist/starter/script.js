'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-03-25T17:01:17.194Z',
    '2023-03-29T23:36:17.929Z',
    '2023-03-30T10:51:36.790Z', //'2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // use else for more than 7 days then use exact date
  // we may also dont use else here, bcz after up above function are false then only existing code is execute
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0); //add 1 bcz in js number start from 0
    const year = date.getFullYear();

    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = ` 
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
  `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    //Decrease time by 1s
    time--;
  };

  // Set time to 5 minute
  let time = 20; // sec

  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // Fake Always Logged In
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// up above are for testing changes outside log in page

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date
    const now = new Date();
    // create a option object to see the date information in details
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    // const locale = navigator.language; // see the your browser local language
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); // in function parameter ('language_short_form-country')
    // use Intl.DateTimeFormat stand for namespace for international date format
    // up above need to pass into this function here is a so called local string by local language

    // replaced by up
    // //labelDate.textContent = now; // full information
    // // need day/month/year
    // const day = `${now.getDate()}`.padStart(2, 0); // padStar method need string for work and use for pad something and also set value
    // // .padStar(character_number, which number set first)

    // const month = `${now.getMonth() + 1}`.padStart(2, 0); //add 1 bcz in js number start from 0
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add tarnsfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString()); // use toISOString() method to convert the newly created object to string, here without this method date are show or behave as like object

      // Update UI
      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// all numbers are represented internally as floating point numbers

// console.log(23 === 23.0);

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // convert string to number
// console.log(+'23');

// console.log(+'23'); // when js sees the + operator , it will do type coercion . So it will automatically convert all the operands to numbers

// // parsing
// // number to string
// // parse function work like object property
// // here its work when string start with a number
// // remove unnecessary symbol that are not number
// // parse function has 2 argument (1st one is number , 2nd one is base(decimal, binaray))
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// // parse float
// // these two function are also so-called global function
// console.log(Number(parseInt('2.5rem')));
// console.log(Number(parseFloat('2.3rem')));

// // we can check not a number by Number object
// console.log(Number.isNaN(23));
// console.log(Number.isNaN('22')); // here also not a number but a regular value
// console.log(Number.isNaN(+'22x')); // try to convert into number but its not a number
// console.log(Number.isNaN(22 / 0)); //infinity is not a NaN

// // for checking a value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isFinite(23));
// console.log(Number.isFinite(20.1));
// console.log(Number.isFinite(20 / 0));

// // Math and rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// // both are same
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 8, 10, 55, 20));
// console.log(Math.max(5, 8, 10, '55', 20)); //coersion
// console.log(Math.max(5, 8, 10, '55px', 20)); // max is not a number here

// console.log(Math.min(5, 8, 10, 55, 20));

// // radious of circle
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// // random value between max and min value
// const randomInt = (max, min) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, -5));

// // Rounding integers(positive number)
// console.log(Math.trunc(22.3)); // works only for positive number

// console.log(Math.round(22.3));
// console.log(Math.round(22.9));

// console.log(Math.ceil(22.3));
// console.log(Math.ceil(22.9));

// console.log(Math.floor(22.3));
// console.log(Math.floor(22.9));

// // floor is better than trunc bcz its properly work with also negative value
// console.log(Math.trunc(-22.3));

// console.log(Math.floor(-22.3));

// // Rounding decimals
// // toFixed method used for value after decimal
// // inside operator values are primitives and primitives dont have method
// // behind scene js create boxing for that and basically boxing transform to a number object, then call the method on that object
// // once operation is finished it will convert it back to a primitive

// console.log((2.7).toFixed(0)); // here toFixed method return string value and also toFixed(value nedd after decimal)
// console.log((2.7).toFixed(3));
// console.log((2.367).toFixed(2));
// console.log(+(2.367).toFixed(2)); // here for convert to number use + operator instead of Number method

/*
// Reminder operator %
// its simply return the reaminder of a division
console.log(5 % 2); //5 = 2*2+1 here 1 is reminder
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

// Check even or odd
const evenNum = val =>
  val % 2 === 0 ? `${val} is even number` : `${val} is odd number`;

console.log(evenNum(10));
console.log(evenNum(15));
console.log(evenNum(100));
console.log(evenNum(23));

// another way return only true or false
const isEven = val => val % 2 === 0;
console.log(isEven(10));
console.log(isEven(15));
console.log(isEven(100));
console.log(isEven(23));

// color at every 2/3 lines

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0,2,4,6
    if (i % 2 === 0) row.style.backgroundColor = 'lime';
    //0,3,6,9
    if (i % 3 === 0) row.style.backgroundColor = 'coral';
  });
});

// Numaric separation
//  js ignore numaric sperator
// 274,451,000,555

const diameter = 274_451_000_555;
console.log(diameter);

const transferFee1 = 15_00; // 15tk 00 coin
const transferFee2 = 1_500; // 1 thousand 5 hundreed
// they are meaning same but indicate different thing

// numaric separator are illegal in first,last and the after and before decimal point
const PI = 3.14_15;
console.log(PI);

// if we try to convert string to a number then its not work
console.log(+'23000'); //(Number('23000))
console.log(+'2300_0'); //its not work

// BigInt
// its a primitive data type
// numbers store in 64 bits thats means 1 & 0 to represent a number
// 53 bits are used for represent number and rest of the decimal point and the sign

console.log(2 ** 53 - 1);

// its also stored in number namespace
console.log(Number.MAX_SAFE_INTEGER);

// they are unsafe number
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

// BigInt stands for Big integer
// with n
console.log(256485654415246456884631351n); //here n transform number to the Big integer number
// with BigInt function
console.log(BigInt(256485654415246456884631351));

// BigInt never do anything with regular number only with BigInt number
console.log(1000000n + 10000000n);

const huge = 20216846548674684n;
const num = 25;
//console.log(huge * num); // thats not possible
console.log(huge * BigInt(num));

// Exception for comparision operator and plus operator when working with string
console.log(20n > 15);
console.log(20n === 20); // no coercion for ===
console.log(typeof 20n);
console.log(20n == 20); //coercion for ==

// string
console.log(huge + 'exception for string');

// Division
console.log(11n / 3n);
console.log(11 / 3);
*/

/*
// Creating dates and time
// 1st date constructor
const now = new Date();
console.log(now);

// 2ns way is to parse the date from a date string
// automatically parse the time based on that date string
console.log(new Date(' Mar 28 2023 '));

// also can manually set the time and date
console.log(new Date('Aug 15, 1997'));
console.log(new Date('Aug 15, 2023'));

// we can access from movements
console.log(new Date(account1.movementsDates[1]));

// can show year,day, date , time(hour, minute, seceond)
console.log(new Date(2037, 10, 19, 15, 23, 5)); //year, month(count from 0 in js), day, hour, minute, second

console.log(new Date(0)); //unix start
// can now jump to later days also

console.log(new Date(3 * 24 * 60 * 60 * 1000)); // this number is called timestamp
*/

// this is special type of object
// working with dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

// get any iteam of value from date variable
console.log(future.getFullYear()); //(variable_name.get_method_name)
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); // day is day of the week ,here 0 is the sunday
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // international standard

// get timestamp by mili_second
console.log(future.getTime());
// reverse this number
console.log(new Date(2142235380000));

// if u want to know present timestamp value
console.log(Date.now());

// we have also set method as like get method
// by set method we can set value
future.setFullYear(2040); // set year (variable.method(set_value))
console.log(future);
*/

// Calculation with dates
// for calculation use timeastamp for converting in miliSec then do calc
// after calc we convert miliSec again into day,hour,minute etc

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // convert returned value(milisec) to days

// const days1 = calcDaysPassed(new Date(2037, 3, 10), new Date(2037, 3, 4));
// console.log(days1);

// Internationalization Numbers
const num = 384894685.84894;

// Currency are not declare locale but can manually

const option = {
  style: 'currency', // also have currency and percent
  unit: 'celsius',
  currency: 'EUR',
  //useGrouping: false, // use for no separation
};

console.log('US:  ', new Intl.NumberFormat('en-US', option).format(num));
console.log('BN:  ', new Intl.NumberFormat('bn', option).format(num));
console.log('Germany:  ', new Intl.NumberFormat('de-DE', option).format(num));
console.log('Syria:  ', new Intl.NumberFormat('ar-SY', option).format(num));

// locale from the browser
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

// in js we have 2 timers
// 1 is timeout(set timeout) timer & 2nd is stop watch timer

// its a call back function
/*
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'spinach'
); //setTiemout(1st argument which is register for fututre use, 2nd argument is time in milisec, after 3rd argument all the values are asisgn like argument and also pass those argument in function parameter)
//here we dont call this function ourself but we pass this as argument to set time out
console.log('waiting......');
// this mechanism is called asynchronous js
*/
// we can also cancel the timeout function
const ingredients = ['olives', ''];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients //here we extract the value from an array
);
console.log('waiting......');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// 2nd one is setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// clock
// setInterval(function () {
//   const now = new Date();
//   const hour1 = now.getHours();
//   const min1 = now.getMinutes();
//   const sec1 = now.getSeconds();
//   console.log(`${hour1}hour: ${min1}min: ${sec1}sec`);
// }, 1000);
