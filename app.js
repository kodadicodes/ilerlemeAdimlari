const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++ ;
    if (currentActive > progress.length){
        currentActive = progress.length;
    }
    updete();
})
prev.addEventListener('click', () => {
    currentActive-- ;
    if (currentActive < 1){
        currentActive = 1;
    }
    updete();
})
function updete() {
 //circle parametresi mevcut döngü adımındaki daireyi temsil ederken, index parametresi o dairenin dizindeki konumunu temsil eder.
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active') ;
        }
    })
    const actives = document.querySelectorAll('.active');


    progress.style.width = (actives.length -1) / (circles.length -1) *100 + '%';
    if (currentActive===1){
        prev.disabled = true;
    }else if (currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
