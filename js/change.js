let buttonel=document.querySelector(".chan")

let mycolorel=document.querySelector(".mycolor")
let colors=["red","green","black","yellow","blue","gray"]

let i=0;

buttonel.onclick=function(){


mycolorel.style.backgroundColor=colors[i]
i++;


if(i==6){
    i=0;
}
}