//get element

let inputele=document.getElementById("input")
let btnel=document.getElementById("btn")
let msgel=document.getElementById("msg")

btnel.onclick=function(){
    let inputvalue=inputele.value;
msgel.innerHTML=inputvalue
inputele.value=""
}
