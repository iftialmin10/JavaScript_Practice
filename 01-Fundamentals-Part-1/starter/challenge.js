/*
const massMark = 78;//95
const heightMark = 1.69;//1.88
const massJhon = 92;//85
const heightJhon = 1.95;//1.76

const markBMI = massMark/heightMark ** 2;
const jhonBMI =massJhon/heightJhon **2;

// const markBMI = massMark/(heightMark * heightMark) ;
// const jhonBMI =massJhon/(heightJhon *heightJhon);

let markHigherBMI = markBMI > jhonBMI;
console.log(markBMI, jhonBMI, markHigherBMI);

if(markBMI > jhonBMI)
{
  //console.log("Mark's BMI is higher than Jhon's!!");
  console.log(`Mark's BMI ${markBMI} is higher than Jhon's ${jhonBMI}!!`);
}
else
{
  console.log("Jhon's BMI is higher than Mark's!!");
}
*/

/*
let DolphinAvgScore = (96+108+89)/3;
let KolasAvgScore = (88+91+110)/3;

console.log(`Dolphin average score ${DolphinAvgScore}`);
console.log(`Kolas average score ${KolasAvgScore}`);

if (DolphinAvgScore > KolasAvgScore)
{
  console.log("Dolphin's team win the trophy");
}
else if (DolphinAvgScore < KolasAvgScore)
{
  console.log("Kolas team win the trophy");
}
else
{
  console.log("Draw");
}


//Bonus 1
const dolphinscore = 97+112+101;
const kolasscore = 109+95+106;
console.log(dolphinscore);
console.log(kolasscore);

if (dolphinscore > kolasscore && dolphinscore >= 100)
{
  console.log("Dolphin team win");
}
else if(dolphinscore < kolasscore && kolasscore >= 100)
{
  console.log("Kolas team win");
}

//Bonus 2

else if (dolphinscore === kolasscore && dolphinscore >= 100 && kolasscore >= 100)
{
  console.log("Match draw");
}
else 
{
  console.log("No teams win the trophy");
}
*/

//challenge 4
const bill = 50;
const tip = bill >= 50 && bill <=300 ? (bill * (15/100) ): (bill * (2/100));
console.log(tip);
const total_bill = bill + tip;
console.log(`The bill was ${bill} the tip was ${tip} and the total bill ${total_bill}`);