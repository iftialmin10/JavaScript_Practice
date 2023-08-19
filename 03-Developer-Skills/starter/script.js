// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '5';
// if (x === 5) console.log(5);
// const calcAge = birthYear => 2037 - birthYear;
// console.log('ohooo,,,,,u r so dum');

// (1) understanding the problem
// - how to log arrays value into a string ; done

// (2) Break down into sub-problems
// - is it possible to log days number from array index num bcz array num = days num
//- if temp 0 or - value than what : done
//- can i use loop here for input array value
//- what happen if tamplete literal used, yeas
//- but if array value increase than ??
//- how to change string sequence according to number of arrays
//- how to store array value
//- how can i use this "...()*C in () days" in a loop
//- how to write array output in a single line

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
// (1) understanding the problem
//- array transformed to string, separated by ...
//- what is about days : index +1

// (2) Break up into sub-problems
//- Transform array into string
//- transform each element to degree C
//- strings needs to contain day (index+1)
//- add ... between elements and start and end of string

const printForecast = function (arr) {
  let st = ''
  for (let i = 0; i < arr.length; i++) {
    st+= ` ${arr[i]}°C in ${i+1} days ...`;
    
  }
  console.log('...'+st);
};

printForecast(data2);
