
/*let A= (5+3)
if (A===8)
 
 console.log(55+10-52+100-50);

 let a= 5;
 console.log(a);

 //declare variable
 let elderbro= "Ifti";
 let littlebro="Ala";
 let littlesis="Kib";

 console.log(elderbro);
 console.log(littlebro);
 console.log(littlesis);
 */

 /*
 let java = true;
 console.log(java);
 console.log("java");
 console.log(typeof java);
 console.log(typeof true);
 console.log(typeof 55);
 console.log(typeof "Hello");

 let undef;
 console.log(typeof undef);
 undef = null;//value change without changing the variable name
 console.log(typeof undef);
*/

//const var let
/*const country = "Bangladesh";
country = "BD"; //not accepted

const a; //undefined variable not accepted

var ab = 5; //
ab = 6;
*/


/*const BirthYear = "1997";
console.log(Number(BirthYear) + 20);
console.log(Number('ifti') , typeof NaN);//NaN is Not a Number

let n= '1' + 1;
n = n-1;
console.log(n);
*/

//truthy & falsy
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));

const string = '';
if(string)
{
  console.log("Truthy value");
}
else
{
  console.log("Falsy value");
}
*/

//equility operator
/*
const age = 18;
if (age===18) console.log("you r adult & also strict ");
else if(age == 18) console.log("you r adult but loose");

const Name = String(prompt("Enter your name"));
if(Name === 'ifti') console.log(`Hello ${Name}`);
else if(Name === 'maria') console.log(`Hello ${Name}`);
else if(Name !== 'alavie') console.log('Why not Alavie');
*/

//Logical operator
/*
const A= true;
const B = false;
const C = false;
console.log(A && B);
console.log(!B);
console.log(A || B);
console.log(A && B || C);
*/

//switch case
/*
const day = 'Thursday';

switch (day)//function
{
  case 'friday':
    console.log('Jummah Mubarak');
    break;
    case 'saturday' :
      console.log('Its office time');
      break;
      case 'sunday':
        case 'monday' :
          console.log('two days');
          break;

          default :
          console.log('all value are false');
}
*/

//another way in if else
const day = 'friday';

if(day === 'friday')
{
  console.log('Jummah Mubarak');
}
else if (day === 'saturday')
{
  console.log('working day');
}
else if (day === 'sunday' || day ==='monday')
{
  console.log('two days');
}
else
{
console.log('all value are false');
}