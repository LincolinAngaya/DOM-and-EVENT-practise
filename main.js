const btn = document.querySelector('.btn')
const myform = document.querySelector('#my-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userlist = document.querySelector('#users')
myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = '<h3>please enter all fields!!!</h3>'
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        userlist.appendChild(li)
    }
    //clear fields
    nameInput.value = '';
    emailInput.value = '';
}
//add newelement in a dom
var para = document.createElement('p');

// para.className = "paragraph"
// para.id = "paragraph1"
// para.setAttribute('title', 'this is my paragraph')

// var headingText = document.createTextNode('this is my first paragragh')
// para.appendChild(headingText)
// console.log(headingText)
// var body = document.querySelector('body')
// var container = document.querySelector('container')
// body.insertBefore(para, container)

//replacing child
var head = document.createElement('h2')
var node = document.createTextNode('javascript for denior')
head.appendChild(node)

var body = document.querySelector('header')
var h1 = document.querySelector('h1')
body.replaceChild(head, h1);