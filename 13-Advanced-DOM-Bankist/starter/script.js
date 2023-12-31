'use strict';

// Selection
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  /*for preventing default behaviour we pass event through function and 
  set the value*/
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* we use for_each instead of for loop, and here btnopenmodal is a 
nodelist bcz its the result of querySelectorAll*/
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////
// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // ClientRect basically used for viewport
  // Rectangle:
  // x is measured from left side,
  // y is measured from top,
  // height and width are element height and width
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); // here e is element which is target to btnScrollTo

  // current scroll position/ current btn position
  console.log('Current scroll(X/Y)', window.pageXOffset, window.pageYOffset); // current scroll information

  // we can also read the height and width of this view port
  console.log(
    'height/width viewport',
    // here height and width are not counting with the scroll bars. Its just dimension of the view port thats are available for the content and thats excludes scroll bars
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // here we pass only one argument
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, // currennt position + current scroll
  //   s1coords.top + window.pageYOffset // currennt position + current scroll
  // ); // here top count from view port not from document

  // if we want to scroll smothly than use same thing like up but in an object
  // here we use object
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, // currennt position + current scroll
  //   top: s1coords.top + window.pageYOffset, // currennt position + current scroll
  //   behavior: 'smooth',
  // });

  // up avobe both are old school method for old browser by calculating
  // we can use updated thing if the browser support
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////

// Event Delegation
// Page navigation

/* 
querySelectorAll will return a nodelist and then we can use them forEach
method in order to attach an event handler to each of the elements that are
in the nodelist 
*/

/* Its useful only for a few button/link/element but for more we use 
event delegation
*/

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // to avoid to go to anchor or link
//     const id = this.getAttribute('href');
//     console.log(id); // we get id/attribute in string
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation
/*
1. Add event listener to common parent element
2. Determine what element originated the event
*/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //console.log(e.target); // to see where the event occured
  e.preventDefault();
  // Match the event / Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault(); // to avoid to go to anchor or link
    const id = e.target.getAttribute('href'); // here e.target is mention where the click happen
    console.log(id); // we get id/attribute in string
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////
///////////////////////////

// Selecting, creating and deleting
//Selecting element
console.log(document.documentElement); // if we want to style entire page than always need to selecct document element
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); // this will return the first element that matches this selector.
const allSections = document.querySelectorAll('.section'); //use querySelectorAll to select all the class in same scope
console.log(allSections);

const callById = document.getElementById('section--1');
// here no need to select selector as like query selector
console.log(callById);

const allButtons = document.getElementsByTagName('button');
//in life collection or html collection, if we change anything it will updated immediately by using tagname. but in nodelist thats not happen
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); //life collection

//Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
// create a dom element and pass tagname
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

/* 
When we update style of html and css from js its worked as inline style. 
So styles set directly in the DOM. We can read or access inline style 
property from js file, but we cant access or read any style property 
which are defined in the html and css file.
*/
console.log(message.style.height); //for in_line style we cant read attribute from inside css_sheet
console.log(message.style.backgroundColor); //by inline we can read

//but if we want to read property from inside css file than use "getComputedStyle"
console.log(getComputedStyle(message)); // give us all information
console.log(getComputedStyle(message).height); // give specific info

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// can change custom property of css from js
// here "document.documentElement" means root property
document.documentElement.style.setProperty('--color-primary', 'orangered'); // we can change inbuilt attribute by this

// Attributes
// standard attribute list: src, class, altr, id, href etc
//only standrad attribute can read
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// can set attribute value also
logo.alt = 'Beautiful minimalist logo';

// Non-standard
// non standard attributes are self declared attribute(designer)
console.log(logo.designer); //this is not worked
console.log(logo.getAttribute('designer')); // its worked
logo.setAttribute('company', 'Bankist'); // set non standard attribute value

console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href); // absolute url
console.log(link.getAttribute('href')); //wrotted url in HTML or need relative one

const link1 = document.querySelector('.nav__link--btn');
console.log(link1.href);
console.log(link1.getAttribute('href'));

//Data attributes
//if any attribute start with data keyword ,its stored in a dataset.
console.log(logo.dataset.versionNumber); // after data-keyword use camelcase

//Classes have four methods
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

//Dont use bcz its override all the existing classes and also it allow us to only put one class
// logo.className = 'Ifti';

// An event is a signal that is generated by a certain DOM node.
// there are a lot of events in MDN java_script we can use.
// Mouse_Enter event is listening event
/* addEventListener is better than other:
1) in addEventListener allows us
to add multiple event listeners to the same event. If we add second function
in "onmouseenter" than it will override the first one. 
2) We can actually remove an event handler in case we dont need it anymore
*/
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');

//   //h1.removeEventListener('mouseenter'); //if you want to listen once than use remove in same scope
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// h1.onmouseenter = function (e) {
//   alert('onmoseenter: Great! You are reading the heading :D');
// };

// Event propagation
// Create random color
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},
  ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

// changing color
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   /*for testing color we need to change "href='#section'" to "href='#'"*/
//   console.log('Link', e.target, e.currentTarget);
//   // e.target is indicating element where was event created and also shown them on parent side also
//   // e.currentTarget is indicating the current element not the children element.
//   console.log(e.currentTarget === this);
//   // e.currentTarget and this keyword are same. Both are pointing the element on which the EventListener is attached to

//   // We can also stop propagation
//   // That means that the event the event never arrived at those elements.
//   e.stopPropagation();
//   // This is not the proper step to stop the propagation, its only for emergency
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
//   // e.currentTarget is indicating the current element not the children element.
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);
// });

// // DOM traversing
// const h1 = document.querySelector('h1');

// // Going Down: child
// console.log(h1.querySelectorAll('.highlight'));
// /*
// here highlight is direct element of the h1. Outside of h1 other children
// elements are not selected though they matched by their name.
// */

// console.log(h1.childNodes); // by this we can read all the children under this parent

// //if we need only text element or children then use ".innerhtml or .textContent"
// // they are use only for direct child
// console.log(h1.children);

// //Selecting First and last element
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode); // direct parent
// console.log(h1.parentElement);

// // closest method search closest parent
// // closest method works like queryselector or queryselectorall

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // find closest parent element that has header class and customized it

// h1.closest('h1').style.background = 'var(--gradient-primary)'; // h1 is the own closest parent

// // Going sideways: siblings
// // direct sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// // They are nodes
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // can also read all children to moving up the parent first then access the children
// console.log(h1.parentElement.children);

// // can store children element inside an array and can also loop over them
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// Building tabbed

// bad practise
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

// instead use event delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove activate classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

// refactoring
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    // now time to change opacity
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// bind return a new function
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation

const initialCoords = section1.getBoundingClientRect();

console.log(initialCoords);

// Scroll is an event work at window
// Scroll event should  be avoided for firing every time
window.addEventListener('scroll', function () {
  console.log(window.scrollY); // here "scrollY" means we measure distance from top of the window to current scroll position

  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// Sticky navigation: Intersection observer API

// function
/* This callback function will get called each time that the observed 
element or target element is intersecting the root element at the 
threshold that we defined */

// const obsCallback = function (entries, observer) {
//   // here entries are actually an array of the threshold entries

//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// // object
// // target element intersecting with view port.
// const obsOption = {
//   // 1st declare root
//   root: null, // our target element to intersect. We can give target value or alternative null

//   // 2nd declare threshold
//   threshold: [0, 0.2],
//   /* 10% this basically the percentage of intersection at which the
//   observer callback will be called . here threshold at the percentage that
//   we want to have visiable in our root or viewport*/
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1); // here section1 is target element

//const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // null means entire viewport
  threshold: 0, // 0 means when 0% visiable of header
  rootMargin: `-${navHeight}px`,
  /* rootMargin work for pixel. we set value for the target element height
  if our website have different pages with different pixel size than we 
  dont declare manually */
}); // new IntersectionObserver(callbackfunction, option object)
headerObserver.observe(header);

// Reveal sections
/// const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  //destructuring
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  /* Unobserve:
  when we visit or observe all the section or portion and no need to repeat
  observe again then we simply use unobserve */
  observer.unobserve(entry.target); // unobserve(which element should be unobserve)
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

/* we use forEach whenever we want to do something which does not involve 
creating a new array*/
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
// here we select all the element specially which have data-src attribute

const loadImg = function (entries, observer) {
  const [entry] = entries;

  // guard clause
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');

  // slider.style.transform = 'scale(0.3) translateX(-800px)';
  // // translateX() means start from left position
  // slider.style.overflow = 'visible';

  // s = slide num, i = index num
  // transform is a css attribute
  // translateX will basically move them to next position 100%
  // one single slide or image is 100%
  // second image start from 100%, second image start from 200% .......
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`)); // first index is 0
  // 0%, 100%, 200%, 300%

  // Functions
  const createDots = function () {
    slides.forEach(function (
      _,
      i // if we want to ignore or dont interested to any parameter than use "-"
    ) {
      // can add direct html code in js using "insertAdjacentHTML"
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class ="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    // first deactivate all the slide then activated the needed one
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // controled slider by keyboard
  document.addEventListener('keydown', function (e) {
    // normal way
    if (e.key === 'ArrowLeft') prevSlide();
    // chaining process
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      //console.log(slide);
      // if our container name and dataset name are same then we can declare in that way
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

//DOM content loaded
/*This event is fired by the document as soon as the HTML is completely 
parsed. Which means that the HTML has been downloaded and been converted 
to the DOM tree. This event not wait for images and other external 
resources to load. Its just HTML and JS need to be loaded
 */
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

//
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// //unload event is created immediately before a user is about to leave a page.
// // this event asked user to 100% sure that they want to leave the page
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = 'message';
// });

//
