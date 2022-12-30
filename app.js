const counter = document.querySelectorAll(".counter");
const inkBtn = document.querySelector('.inkBtn');
const decBtn = document.querySelector('.decBtn')
const input = document.querySelector('input')

decBtn.addEventListener('click', function (){
    let now = Number(input.value);
    now-=1;
    input.value = now;
}
)

inkBtn.addEventListener('click', function (){
    let noww = Number(input.value);
    noww+=1;
    input.value = noww;
}
)