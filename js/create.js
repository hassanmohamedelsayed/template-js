let rowsInput=document.getElementById(`rows`)
let colsInput=document.getElementById(`cols`)

let btn=document.querySelector(`button`)

btn.addEventListener(`click`,CreateTable)


function CreateTable(){
    let body=document.body;
    let table=document.createElement("table")

for(let i = 0; i < 2 ; i++){
let tr=document.createElement("tr")
table.appendChild(tr)

for(let e=0 ; e < 2 ; e++){
    let td=document.createElement("td")
    let txt=document.createTextNode("item txt")
    td.appendChild(txt)
    tr.appendChild(td)
}

}
body.appendChild(table)

}
CreateTable()