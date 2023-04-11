function sideMenuShow () {
  document.getElementById('side-menu-page').classList.add('side-menu-show');
};

function sideMenuHide () {
  document.getElementById('side-menu-page').classList.remove('side-menu-show');
};

document.getElementById('hamburger-img').addEventListener('click', sideMenuShow);
document.getElementById('menu-close').addEventListener('click', sideMenuHide);

const projectImg = document.querySelector('#project-img');
const pageDown = document.querySelector('#page-down');
const pageUp = document.querySelector('#page-up');

const projectImgs = [
  './project-pic1.jpeg',
  './project-pic2.jpeg',
  './project-pic3.jpeg',
  './project-pic4.jpeg',
];

let currentImgIndex = 0;

function changePageDown () {
  currentImgIndex --;
  if (currentImgIndex === -1) {
    currentImgIndex = projectImgs.length - 1;
  }
  projectImg.src = projectImgs[currentImgIndex];
};

function changePageUp () {
  currentImgIndex ++;
  if (currentImgIndex === projectImgs.length - 1) {
    currentImgIndex = 0;
  }
  projectImg.src = projectImgs[currentImgIndex];
};

pageDown.addEventListener('click', changePageDown);
pageUp.addEventListener('click', changePageUp);

