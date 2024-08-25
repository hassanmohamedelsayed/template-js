let myInput=document.querySelector("#myInput")
let myButton=document.querySelector("#btn")

myButton.onclick=function(){
    if(myButton.getAttribute(`data-text`)=="show"){
        myInput.setAttribute(`tybe`,`text`)
        myButton.setAttribute(`data-text`,`hide`)
        myButton.innerHTML="Hide"
    }else{
        myInput.setAttribute(`tybe`,`password`)
        myButton.setAttribute(`data-text`,`show`)
        myButton.innerHTML="show"
    }
}


// mybtn.onclick=function(){
//     if(mybtn.getAttribute(`data-text`)=="show"){
//         myInput.setAttribute(`tybe`, `text`)
//         mybtn.setAttribute(`data-text`, `hide`)
//         mybtn.innerHTML="Hide"
//     }else{
//         myInput.setAttribute(`tybe`,`password`)
//         mybtn.setAttribute(`data-text`,`show`)
//         mybtn.innerHTML="show"
//     }
// }










