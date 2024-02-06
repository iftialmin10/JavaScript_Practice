'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// neighbour country:
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${Object.values(
                data.languages
              )}</p>
              <p class="country__row"><span>💰</span>${
                Object.values(Object.values(data.currencies)[0])[0]
              }</p>
            </div>
          </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

// AJAX call

// const getCountryData = function (country) {
//   // XML request
//   // create XML request and store in variable
//   // request is an object
//   const request = new XMLHttpRequest();

//   // request.open('type_of_http_request', 'URL from Public_API_Link in string');
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   /*
// here we basically send off the request and that request then fetches the
// data in the background. Here this process is not the result, instead it
// means background process called asynchronous.
// */
//   request.send(); //Use send method to send the request to this API_URL

//   /*
// Instead, register a callback function on the request object for the load
// event and after fetching done load event execute.
// */
//   request.addEventListener('load', function () {
//     /*
//    Use responseText to store arrived/received data, here data return in
//    JSON format therefore we need to parse them from string to object. But
//    for well looked we destructure them in to an array.
// */
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     /*
//   Note: after destructuring we get object. From object if we need something
//   those are direct object property then simply use
//   main_object_name.property_name(data.capital) but if we need something
//   those are not direct property or sub property then use
//   main_object_name.sub_object_name.property_name(data.flags.svg)
// */
//     const html = `
//   <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${Object.values(
//               data.languages
//             )}</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(Object.values(data.currencies)[0])[0]
//             }</p>
//           </div>
//         </article>
//   `;

//     // adding html file
//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('bangladesh');
// getCountryData('portugal');
// getCountryData('pakistan');
// getCountryData('australia');
// getCountryData('usa');

// const getNeighbourCountryData = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country-
//     renderCountry(data);

//     // Get neighbour country-2
//     const [neighbour] = data.borders; // destructure for getting 1st element
//     console.log(neighbour);

//     // checking share border/neighbour
//     if (!neighbour) return;

// AJAX call country 2
/*
    here we call AJAX again because neighbour country info depends on 
    first AJAX or first country and also we need a callback function inside
    a callback function.
    */
//     const request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);

//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getNeighbourCountryData('bangladesh');
//getNeighbourCountryData('portugal');
//getNeighbourCountryData('pakistan');
//getNeighbourCountryData('bharat');
//getNeighbourCountryData('australia');

/*
callback hell: Basically callback hell is when we have a lot of nested 
callback in order to execute asynchronous task in sequence and in fact 
this happens for all asynchronous task which are handled by callbacks and
not for AJAX call
*/

// Callback_hell example:
// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('2 sec passed');
//     setTimeout(() => {
//       console.log('3 sec passed');
//       setTimeout(() => {
//         console.log('4 sec passed');
//         setTimeout(() => {
//           console.log('5 sec passed');
//           setTimeout(() => {
//             console.log('6 sec passed');
//             setTimeout(() => {
//               console.log('7 sec passed');
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// AJAX call through fetch API function
// const request = fetch('https://restcountries.com/v3.1/name/bangladesh');
// console.log(request);

/*
fetch function return promise and then we handle that promise using 'then' 
method. then to actually read the data from the response, we need to call 
the json method on that response object. Then this itself will also return
a promise. Since this is a promise we can then again call the then method 
on that.
*/
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//       // it will be a new promise thats why we again use 'then'

//       /*
//      here response is an object and is a method that is attached to
//      response object. Response object comming from fetch function. JSON
//      function is also an asynchronous function that means it will also
//      return a new promise.
// */
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]); //  renderCountry(data[array_index])
//     });
// };

// Simplified version of fetch function
// const getCountryData = function (country) {
//   // 1st AJAX call through fetch function Parent country
//   fetch(`https://restcountries.com/v3.1/name/${country}`) // fetch API
//     .then(response => {
//       if (!response.ok)
//         /*
//       here new error is a constructor function in which we send error msg
//       and use 'throw' keyword which will immediately terminate the current
//       function.
//       */
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     }) // receive response. "then" method always return promise
//     .then(data => {
//       renderCountry(data[0]); // handle response

//       //const neighbour = data[0].borders[0];
//       const neighbour = 'dhkjlf';

//       if (!neighbour) return;

//       // 2nd AJAX call neighbour country
//       // always return the promise and handle it outside the callback function
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       response.json();
//     })
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥${err.message}. Try again `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// this function also return fetch function

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       /*
//        error manually through to the callback function 'then' and that
//        will immediately reject this promise. and then that rejected promise
//        will travel down to the chain until it is eventually caught somewhere
//        */
//       console.log(data[0]);
//       renderCountry(data[0]); // handle response

//       let neighbour;
//       if (Object.hasOwn(data[0], 'borders')) {
//         neighbour = data[0].borders[0];
//         console.log(neighbour);
//       }

//       // here we manually throw error and at the end of the chain we catch error
//       else throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       // catch method call when promise rejected
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥${err.message}. Try again `);
//     })
//     .finally(() => {
//       /*
//       We use this method for something that always needs to be happen,
//       no matter the result of the promise .
//       The finally method take a callback function we defined always be
//       called whatever happens with the promise, No matter if the promise
//       is fulfilled or rejected
//       */
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

//  getCountryData('dhjbhjk');
//getCountryData('brazil');

// Coding challenge #1
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=110090349240682e15714416x23142`
//   )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);

//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch(err => {
//       console.error(`${err.message} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥${err.message}. Try again `);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// The Event loop example:
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// /*'promise.resolve()' basically allow us to build a promise, so to create
// a promise that is immediately resolved.*/

// Promise.resolve('Resolveed promise 2').then(res => {
//   for (let i = 0; i < 100000; i++) console.log(res);
// });

// console.log('Test done');

// Building promises
/*
 'new Promise' is a special kind of object in js. Promise constructor 
 takesexactly one argument that is called executor function. 'New promise'
 return a promise status as like fetch function.
*/
// const lotteryPromise = new Promise(function (resolve, reject) {
//   // resolve and reject indicate function which is executor function

//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰'); // resolve is a fulfilled promise
//     } else {
//       reject(new Error('You lost your money 💔')); // reject is a unsuccess promise and 'new Error()' show us in more details
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = seconds => {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// // Upper callback hell resolved by promisifying
// wait(1)
//   .then(() => {
//     console.log('1 sec passed');
//     return wait(1);
//   })
//   .then(() => console.log('2 sec passed'))
//   .then(() => console.log('3 sec passed'))
//   .then(() => console.log('4 sec passed'));

// Callback_hell example:
// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('2 sec passed');
//     setTimeout(() => {
//       console.log('3 sec passed');
//       setTimeout(() => {
//         console.log('4 sec passed');
//         setTimeout(() => {
//           console.log('5 sec passed');
//           setTimeout(() => {
//             console.log('6 sec passed');
//             setTimeout(() => {
//               console.log('7 sec passed');
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// created fulfilled and rejected value immediately
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// Promisifying the GEOlocation API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=110090349240682e15714416x23142`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);

//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch(err => {
//       console.error(`${err.message} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥${err.message}. Try again `);
//     });
// };

// btn.addEventListener('click', whereAmI);

/*
// Coding challenge 2
//Part-1
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Images not found'));
    });
  });
};

let currentImage;

createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => (currentImage.style.display = 'none'))
  .catch(err => console.error(err));
**/
