const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const nxt = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

currActive = 1;

nxt.addEventListener('click', ()=>{
currActive ++;
// console.log(currActive);

if(currActive > circles.length){
    currActive = circles.length
}
// console.log(currActive);
update()
});

prev.addEventListener('click', ()=>{
    currActive -- ;
    // console.log(currActive);
    
    if(currActive < 1 ){
        currActive = 1
    }

    update()
    // console.log(currActive);
});

function update(){
    circles.forEach( (cir, indx)=>{
        if(indx < currActive){
            cir.classList.add('active')
        }else{
            cir.classList.remove('active')
        }
    });
    const actives = document.querySelectorAll('.active');

    // console.log(actives.length/ circles.length);
    progress.style.width = (actives.length -1) / (circles.length -1) *100 + '%';

    if(currActive === 1){
        prev.disabled = true;
    }else if (currActive === circles.length){
        nxt.disabled = true
    }else{
        prev.disabled = false;
        nxt.disabled = false
    }
}