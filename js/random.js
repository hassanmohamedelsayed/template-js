let btn=document.querySelector("#btn")
btn.addEventListener(`click`,ranfombg);

function ranfombg(){
    document.body.style.backgroundColor=`#`+ Math.random().toString(16).slice(2,8)
}