let myImages=document.getElementById("sliceshow")
let images=["images/team-1.jpg","images/team-2.jpg","images/team-3.jpg"]

let i=0

function sliceshow(){
    myImages.setAttribute(`src`,images[i])
    if(i==images.length-1){
        i=0
    }else{
        i++
    }
    
    setTimeout(function(){
        sliceshow()
    },2000)
}
sliceshow()
