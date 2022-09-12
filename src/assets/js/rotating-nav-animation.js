// import { container } from "webpack";

const open = document.getElementById('open');
const close = document.getElementById('close');
const conatiner = document.querySelector('.container');
// console.log(conatiner);

open.addEventListener('click', () => conatiner.classList.add('show-nav'));

close.addEventListener('click', function(){
    conatiner.classList.remove('show-nav');
    console.log("Close ==>click");
    // console.log(conatiner);
})