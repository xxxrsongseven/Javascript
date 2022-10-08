let today= new Date();
let el= document.createElement('p');
el.textContent= today.toLocaleDateString();
document.body.appendChild(el);