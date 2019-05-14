// Your code goes here

// 1
const headerImg = document.querySelector('header img');
headerImg.addEventListener('mouseover', e => {
  e.target.classList.toggle('dim');
});

// 2
headerImg.addEventListener('mouseout', e => {
  e.target.classList.toggle('dim');
});

// 3
const body = document.querySelector('body');
body.addEventListener('copy', e => {
  alert('CTRL+C or right click to select text and copy detected.');
});

// 4
const stopNav = document.querySelectorAll('.nav-link');
stopNav.forEach(navLink => {
  navLink.addEventListener('click', e => {
    e.preventDefault();
    e.target.classList.toggle('error');
  });
});

// 5
const welcome = document.querySelector('.welcome');
welcome.addEventListener('mouseover', e => {
  e.target.style.color = 'red';
});

// 6
const img = document.querySelectorAll('img');
img.forEach(indImg => {
  indImg.addEventListener('dblclick', e => {
    e.target.style.display = 'none';
  });
});

// 7
const h2 = document.querySelectorAll('h2');
h2.forEach(indH2 => {
  indH2.addEventListener('mouseover', e => {
    e.target.style.color = 'skyblue';
  });
});

// 8
const textContent = document.querySelectorAll('.text-content');
textContent.forEach(p => {
  p.addEventListener('contextmenu', e => {
    e.preventDefault();
    e.target.style.textDecoration = 'line-through';
  });
});

// 9
