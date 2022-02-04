'use strict';

const modalBtnOpenFirst = document.querySelector('.btn1');
const modalBtnOpenSecond = document.querySelector('.btn2');
const modalBtnOpenThird = document.querySelector('.btn3');
// modalBtnOpenThird.textContent="Varsha";

const modalWindowFirst = document.querySelector('.detail1');
const modalWindowSecond = document.querySelector('.detail2');
const modalWindowThird = document.querySelector('.detail3');

// console.log(modalWindowThird);

const modalBtnCloseFirst = document.querySelector('.close1');
const modalBtnCloseSecond = document.querySelector('.close2');
const modalBtnCloseThird = document.querySelector('.close3');

const overlay = document.querySelector('.overlay');

//function
const openModelOverlay = function(){
    overlay.classList.remove('hidden');
}

const closeModelOverlay = function(){
    overlay.classList.add('hidden');
}



// first box open
modalBtnOpenFirst.addEventListener('click', function() {
    modalWindowFirst.classList.remove('hidden');
    openModelOverlay();      
});

// second box open
modalBtnOpenSecond.addEventListener('click', function() {
    modalWindowSecond.classList.remove('hidden');
    openModelOverlay();
});

// third box open
modalBtnOpenThird.addEventListener('click',function(){
   modalWindowThird.classList.remove('hidden');
    openModelOverlay();

});




//close first box
modalBtnCloseFirst.addEventListener('click', function() {
    modalWindowFirst.classList.add('hidden');
    closeModelOverlay();
});

// close second box
modalBtnCloseSecond.addEventListener('click',function(){
    modalWindowSecond.classList.add('hidden');
    closeModelOverlay();
});

//close third box
modalBtnCloseThird.addEventListener('click', function(){
    modalWindowThird.classList.add('hidden');
    closeModelOverlay();
});





