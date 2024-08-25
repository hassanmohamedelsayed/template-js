title=document.querySelector(`.title`);
turn="x"
let squqre=[]

function end(num1,num2,num3){
title.innerHTML=`${squqre[num1]}winner`;
document.getElementById(`item`+num1).style.background=`#000`
document.getElementById(`item`+num2).style.background=`#000`
document.getElementById(`item`+num3).style.background=`#000`

setInterval(function(){title.innerHTML+=`.`},1000);
setTimeout(function(){location.reload()},4000)

}

function winner(){
for(let i=1; i<10; i++){
squqre[i]=document.getElementById(`item`+i).innerHTML
}
if(squqre[1]==squqre[2]&&squqre[2]==squqre[3]&& squqre[1] !=``){

end(1,2,3)
}else if(squqre[4]==squqre[5]&&squqre[5]==squqre[6]&& squqre[4] !=``){
end(4,5,6)
}else if(squqre[7]==squqre[8]&&squqre[8]==squqre[9]&& squqre[9] !=``){
end(7,8,9)
}else if(squqre[1]==squqre[4]&&squqre[4]==squqre[7]&& squqre[7] !=``){
end(1,4,7)
}else if(squqre[2]==squqre[5]&&squqre[5]==squqre[8]&& squqre[8] !=``){
end(2,5,8)
}else if(squqre[3]==squqre[6]&&squqre[6]==squqre[9]&& squqre[6] !=``){
end(3,6,9)
}else if(squqre[1]==squqre[5]&&squqre[5]==squqre[9]&& squqre[5] !=``){
end(1,5,9)
}else if(squqre[3]==squqre[5]&&squqre[5]==squqre[7]&& squqre[3] !=``){
    end(3,5,7)
}

}



function game(id){
    let hassan=document.getElementById(id)
if(turn==="x" &&hassan.innerHTML==``)
{
    hassan.innerHTML="x"
    turn="o"
    title.innerHTML=`o`
}
else if(turn==="o" &&hassan.innerHTML==``){
    hassan.innerHTML="o"
    turn="x"
    title.innerHTML="x"
}
winner();
}





