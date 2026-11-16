'use strict';
const names = ['John', 'Paul', 'Jones'];

let listItems = '';
for (const name of names) {
  listItems += `<li>${name}</li>`;
}

document.querySelector('#target').innerHTML = listItems;
