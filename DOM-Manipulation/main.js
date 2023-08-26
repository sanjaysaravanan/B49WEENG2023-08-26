// document.body.innerHTML = '<h1>Hi B49WEENG</h1>';

// document.body.innerText = '<h1>Hi B49WEENG</h1>';


// Element Creation
const anchor = document.createElement('a');

anchor.innerText = 'Click Here';

// href attribute
anchor.setAttribute('href', 'https://guvi.in');

anchor.style.color = 'pink';

// Create Para element
const para = document.createElement('p');

para.innerText = 'Sample Paragraph Content';

// one way for class attribute
// para.setAttribute('class', 'bg-blue border-1');

para.classList.add('bg-blue', 'border-1');

para.classList.remove('border-1', 'bg-blue');

// const returnVal = document.body.appendChild(anchor, para);

const returnVal = document.body.append(anchor, para);

console.log(returnVal);


document.body.style.border = '2px solid greenyellow';

document.body.style.backgroundColor = 'green';


const h1 = document.getElementById('heading-one');

h1.style.color = 'white';


const elements = document.getElementsByClassName('border-1');

console.log(elements);

// convert the elements( HTMLCollection ) --> Array of elements

Array.from(elements).forEach((element) => {
  // element.innerText = 'Hello World!';
});

const element = document.querySelector('#heading-one');
console.log(element);

element.style.fontSize = '10px';

const elementTwo = document.querySelector('.border-1');
console.log(elementTwo);

const elem = document.querySelector('div > h2:nth-child(2)');
console.log(elem);

const ele = document.querySelector('div > h2 > p');
console.log(ele);


const elems = document.querySelectorAll('div');
console.log(elems);





