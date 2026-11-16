const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');

trigger.addEventListener('mouseenter', () => {
  target.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseleave', () => {
  target.src = 'img/picA.jpg';
});