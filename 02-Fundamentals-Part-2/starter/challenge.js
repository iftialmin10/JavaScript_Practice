// const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;
// //test data 1
// let avgDolphins = calcAverage(44,23,71);
// let avgKoalas = calcAverage(65,54,49);
// console.log(avgDolphins,avgKoalas);


// const checkWinner = function(avgDolphins, avgKoalas){
//   if(avgDolphins >= (avgKoalas*2)){
//     console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
//   }
//   else if(avgKoalas >= (avgDolphins*2)){
//     console.log(`Kolas win (${avgKoalas} vs. ${avgDolphins})`);
//   }
//   else
//   console.log('no teams win');
// }
// checkWinner(avgDolphins, avgKoalas);

// //test data 2
// avgDolphins = calcAverage(85,54,41);
// avgKoalas = calcAverage(23,34,27);
// checkWinner(avgDolphins,avgKoalas);

//challenge 2
//const tip = function(billTip) return (bill*0.15);
// const calcTip = function(bill)
// {
//   return bill>50 && bill<300 ? bill * 0.15 : bill * 0.2;// ternary operator
// if (bill > 50 && bill<300)
// {
//   const tip = bill * 0.15;
//   console.log(tip);
//   return tip;
// }
// else {
//   const tip = bill * 0.20;
// console.log(tip);
// return tip;
// }

// }
// calcTip(100);

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const sum = function(bill, tip) {return (bill+tip);}
// const total = [sum(bills[0], tips[0]), sum(bills[1], tips[1]), sum(bills[2], tips[2])];
// //const total = [ (bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
// console.log(total);

//tutorial challenge
// const ifti = {
//   firstName : 'Al-Amin',
//   lastName : 'Ifti',
//   birthyear : 1997,
//   friends : ['Sayed','Sana','Mojo','Laila'],
//   hasDriverLicence : true,
//   calcAge : function(){
//     this.age = 2023-this.birthyear;
//     return this.age;
//   },
//   getSummary : function(){
//     return this.hasDriverLicence ? 'a' : 'no';
//   }
// };
// //console.log(ifti);
// //console.log(`${ifti.firstName} has ${ifti.friends.length} friends, and his best friend is called ${ifti.friends[1]}`);
// //console.log(`${ifti['firstName']} has ${ifti['friends'].length} friends, and his best friend is called ${ifti['friends'][1]}`);
// console.log(ifti.calcAge());
// console.log(ifti.age);//if need repitation
// console.log(`${ifti.firstName} is a ${ifti.calcAge()}-years old, and he has ${ifti.getSummary()} drivers licence`);

//challenge 3
// const MarkMiller = {
//   fullNmae : 'Mark Miller',
//   mass : 78,
//   height : 1.69,
//   calcBMI : function(){
//     this.bmi = this.mass/(this.height**2);
//     return this.bmi;
//   }

// }
// const JohnSmith = {
//   fullNmae : 'JohnSmith',
//   mass : 92,
//   height : 1.95,
//   calcBMI : function(){
//     this.bmi = this.mass/(this.height**2);
//     return this.bmi;

//   }

// }

// const markBMI = MarkMiller.calcBMI();
// const johnBMI = JohnSmith.calcBMI();

// if (markBMI > johnBMI){
//   console.log(`Marks BMI (${markBMI}) is higher than Johns (${johnBMI})!` );
// }
// else{
//   console.log(`Johns BMI (${johnBMI}) is higher than Marks (${markBMI})!` );
// }

//challenge 4
const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function(bill)
{
  return bill>50 && bill<300 ? bill * 0.15 : bill * 0.2;// ternary operator
}
for (let i=0; i<bills.length; i++)
{
  tips.push(calcTip(bills[i]));
  total.push(tips[i]+bills[i]);
  
}
console.log(bills, tips, total);

//bonus

const calcAverage = function(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
  sum += arr[i];

  }
  return sum/arr.length;
};
console.log(calcAverage([10,22,33]));
console.log(calcAverage(tips));
console.log(calcAverage(total));