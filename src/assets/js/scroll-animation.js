const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
// checkBoxes()
function checkBoxes() {
//  console.log(window.innerHeight / 5 *4);
const triggerBottm = Math.floor(window.innerHeight / 5 * 4)
// console.log(triggerBottm);

boxes.forEach( box =>{
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottm){
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    }
})

}