//strict keyword for bug
// 'use strict';
// const condi = true;
// let condi2 = false;
// if (condi1) 
// {
//   condi2 = true;
// }
// if (condi2) console.log('yes they follow strict rule');


//function
// function logger ()
// {
//   console.log("no element");
// }
// logger ();
// function blender(mint , lemonade)
// {
//   console.log(mint, lemonade);
//   const juice =`here we get ${mint} mint, and ${lemonade} lemonade`;
//   return juice;
// }

// function blender(mint , lemonade, orenge)
// {
//   console.log(mint, lemonade, orenge);
//   const juice =`here we get ${mint} mint, and ${lemonade} lemonade and also ${orenge} orenge`;
//   return juice;
// }

// const glass = blender(5,6,4);
// console.log(glass);

//function declaration
// const add = sum(5,6);
// console.log(add);
// function sum(num1, num2)
// { 
//   console.log(num1, num2);
//   return num1 +num2;;
// }
// const add = sum(5,6);
// console.log(add);

//function expression

// const add = function (num1,num2){
//   console.log(num1, num2);
//   return num1 +num2;
// }
// const sum = add(5,6)
// console.log(sum);

//arrow function for single line
// const age = birthyear => 2097-birthyear;
// //const year = age(1997);
// console.log(age(1997));

//arrow function for multi line
// const age = (byear , sum) =>{
//   const calcAge = 2097-byear;
//   const add = calcAge + sum;
//   return add;
// } 
// console.log(age(1997, 100 ));

//function in function
function cutter(fruit)
{
  return fruit * 4 ;
}

function blender(mint , lemonade, orenge)
{
  console.log(mint, lemonade, orenge);
  const mint_piece = cutter(mint);
  const lemonade_piece = cutter(lemonade);
  const orenge_piece = cutter(orenge);
  const juice =`here we get ${mint_piece} mint, and ${lemonade_piece} lemonade and also ${orenge_piece} orenge`;
  return juice;
}
console.log(blender(4,5,6))