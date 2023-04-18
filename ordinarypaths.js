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
  'images/project-pic1.jpeg',
  'images/project-pic2.jpeg',
  'images/project-pic3.jpeg',
  'images/project-pic4.jpeg',
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

const submitForm = document.querySelector('.regi-form');
const thanksBox = document.querySelector('.thanks-box');

function submitFormHandler (event) {
    event.preventDefault();
    thanksBox.classList.add('thanks-box-show');
}

submitForm.addEventListener('submit', submitFormHandler);