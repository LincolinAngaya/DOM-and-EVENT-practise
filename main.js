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