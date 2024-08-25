// function clock(){
// let date=new Date();
// let hours=date.getHours();
// let minutes=date.getMinutes();
// let seconds=date.getSeconds();
// let flag="Am"
// if(hours==0){
// hours=12
// }
// if(hours> 12){
// hours=hours-12
// flag="Pm"
// }

// if(hours<10)hours="0"+hours
// if(minutes<10)minutes="0"+minutes
// if(seconds<10)seconds="0"+seconds
// document.querySelector(`.clock`).innerHTML=`${hours}:${minutes}:${seconds}:${flag}`

// setTimeout(function(){
//     clock()
// },1000)
// }
// clock()

function clock(){
let date=new Date();
let hours=date.getHours();
let miuntes=date.getMinutes();
let seconds=date.getSeconds();
let flag="Am"

if(hours==0){
    hours=12
}
if(hours>12){
    hours=hours-12
    flag="Pm"
}
if(hours<10)hours="0"+hours
if(miuntes<10)hours="0"+miuntes
if(seconds<10)seconds="0"+seconds
document.querySelector(`.clock`).innerHTML=`${hours}:${miuntes}:${seconds}:${flag}`

setTimeout(function(){
    clock()
},1000)
}
clock()
















