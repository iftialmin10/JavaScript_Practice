'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////
///////////////////////////

//Selecting element
console.log(document.documentElement); // if we want to style entire page than always need to selecct document element
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); //use querySelectorAll to select all the class in same scope
console.log(allSections);

const callById = document.getElementById('section--1');
console.log(callById);
const allButtons = document.getElementsByTagName('button'); //life collection, if we change anything it will updated immediately by using tagname.
console.log(allButtons);
//in html collection we manually delete change value automatically updated but in nodelist thats not happen

console.log(document.getElementsByClassName('btn')); //life collection

//Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div'); // create a dom element
message.classList.add('cookie-message');

// textContent and innerHTML both are used for set and read data

// message.textContent = 'We use cookie for improved functionality and analytics.'
message.innerHTML =
  'We use cookie for improved functionality and analytics. <button class  = "btn btn--close-cookie"> Got it!</button> ';

//header.prepend(message); // prepending basically adds element as the first child of this element(here header)
// we inserted element in dom
header.append(message); //use append for last child
//in dom element we move child through prepend and append
//header.append(message.cloneNode(true)); //clone same message and show them simultanously

//there two more things before and after , work before header or after header
//header.before(message);
//header.after(message);

// Delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //message.parentElement.removeChild(message);
  });

//Styles
//in line style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //for in_line style we cant read attribute from inside css_sheet
console.log(message.style.backgroundColor); //by inline we can read

//but if we want to read property from inside css file than use "getComputedStyle"
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered'); // we can change inbuilt attribute by this

// Attributes
//only standrad attribute can read
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// can change attribute value also
logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer); //this is not worked
console.log(logo.getAttribute('designer')); //its worked
logo.setAttribute('company', 'Bankist'); //change non standard attribute value

console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href); // absolute url
console.log(link.getAttribute('href')); //wrotted url in HTML

const link1 = document.querySelector('.nav__link--btn');
console.log(link1.href);
console.log(link1.getAttribute('href'));

//Data attributes
//if any attribute start with data keyword ,its stored in a dataset.
console.log(logo.dataset.versionNumber); // after data- keyword use camelcase

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

//Dont use bcz its override all value
logo.className = 'Ifti';
