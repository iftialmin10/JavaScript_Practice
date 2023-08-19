//function
// function describeCountry(country, population, capitalCity)
// {
//   console.log(country,population,capitalCity);
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }
// const locate = describeCountry('Bangladesh', 160, 'Dhaka');
// console.log(locate);
// const locate1 = describeCountry('Portugal', 150, 'Lisbon');
// console.log(locate1);

//function declaration vs expression
//  function percentageOfWorld1(population)
//  {
//   return `China has ${population} million people, so its about ${(population/7900)*100}% of the world population`;
//  }
//  const percentageofpopu = percentageOfWorld1(1441);
//  console.log(percentageofpopu);

//  //function expression
//  const percentageOfWorld2 = function(population){
//   return `China has ${population} million people, so its about ${(population/7900)*100}% of the world population`;
//  }
//  const percentageofpopu2 = percentageOfWorld2(1550);
//  console.log(percentageofpopu2);

 //arrow function
//  const percentageOfWorld3 = population => `China has ${population} million people, so its about ${(population/7900)*100}% of the world population`;
//  const percentageofpopu3 = percentageOfWorld3(1550);
//  console.log(percentageofpopu3);

//function calling other function
// const percentageOfWorld1 = function(population){
//     //console.log(`China has ${population} million people, so its about ${(population/7900)*100}% of the world population`);
//     return (population/7900)*100;
//    }
   
//    const describePopulation = (country, population) => {
//     const calcpopupercen = percentageOfWorld1(population);
// const countryInfo = `${country} has ${population} million people, which is about ${calcpopupercen}% of the world`;
// return countryInfo;
// }

// const countryInformation = describePopulation('China', 1441);
// const countryInformation1 = describePopulation('Portugal', 10);
// const countryInformation2 = describePopulation('USA', 332);
// console.log(countryInformation, countryInformation1, countryInformation2);

//intro array

// const populations = [160,141,16,30];
// console.log(populations.length ===4);
// const percentageOfWorld1 = function(population){
//         return (population/7900)*100;
// }
// const percentages = [percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[populations.length-1])];
// console.log(percentages);

//array operation method
// const neighbours = ['India','Myanmar','China'];
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// console.log(neighbours.length);
// if (neighbours.includes('Germany'))
// {
// console.log('This country is neighbour');
// }
// else console.log('Probably not a central European country :D');
// console.log(neighbours.indexOf('India'));
// neighbours[0] = 'Modi of India';
// console.log(neighbours);

//introduction to object
// const myCountry ={
//   country : 'Bangladesh',
//   capital : 'Dhaka',
//   language : 'Bangla',
//   population : 160,
//   neighbours : ['Myanmar', 'India', 'Chin'],
//   describe : function(){
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
//   },
//   checkIsland : function(){
//     return this.isIsland = this.neighbours.length === 0 ? true : false;
//   }
// };
// console.log(myCountry);

// //Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
// myCountry.population += 2;
// console.log(myCountry);
// myCountry.population -= 2;
// console.log(myCountry);

// //object method
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

//Iteration: for loop
// for (let i = 1; i<51 ; i++){
//   console.log(`Voter number ${i} is currently voting'`);
// }

//looping Arrays, Breaking and Continuing

// const populations = [160,141,16,30];
// const percentages2 = [];
// const percentageOfWorld2 = function(population){
//   return (population/7900)*100;
//  }
// for (let i = 0; i<populations.length; i++){
//   const perc = percentageOfWorld2(populations[i]);
//   percentages2.push(perc);
//    }
   
// console.log(percentages2);

// //for comparing
// const percentages = [percentageOfWorld2(populations[0]),percentageOfWorld2(populations[1]),percentageOfWorld2(populations[2]),percentageOfWorld2(populations[populations.length-1])];
// console.log(percentages);

//looping backwards and looping in loops
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// for (let i=0; i<listOfNeighbours.length; i++){
//   //console.log(`${listOfNeighbours[i]}`);
// for (let j=0; j<listOfNeighbours[i].length; j++){
//   console.log(`Neighbour: ${(listOfNeighbours[i])[j]}`);
// }
// }

//The while loop
const populations = [160,141,16,30];
const percentages2 = [];
const percentageOfWorld2 = function(population){
  return (population/7900)*100;
 }

 let i = 0
while(i<populations.length){
  const perc = percentageOfWorld2(populations[i]);
  percentages2.push(perc);
  i++;
}
// for (let i = 0; i<populations.length; i++){
//   const perc = percentageOfWorld2(populations[i]);
//   percentages2.push(perc);
//    }
   
console.log(percentages2);