// let form = document.querySelector('form');
// let inputOne = document.querySelector(".number1")
// let inputTow = document.querySelector(".number2")
// let answer = document.querySelector(".answer")
// let histori =document.querySelector(".histori")
// let submit = document.querySelector(".submit")
// form.addEventListener("click", function(e){
//     e.preventDefault()

// })
// let myData = {}
// let i = 0
// submit.addEventListener("click",function(){
//     i=localStorage.getItem("i")
//     valueOne = inputOne.value
//     valueTwo =inputTow.value
//     if(valueOne !== ""&& valueTwo !== ""){
//     let result = valueOne  * valueTwo
//     let p = document.createElement("p")
//     let pContent = document.createTextNode(valueOne +" * "+valueTwo+ " = "+result)
//     answer.appendChild(p)
//     p.appendChild(pContent)
//     inputOne.value= ""
//     inputTow.value= ""
//     myData[valueOne +" * "+valueTwo] = result
//     jsonData=JSON.stringify(myData)
//     localStorage.setItem("answers", jsonData)
//     }else{
//         inputOne.value= ""
//         inputTow.value= ""
//     }
//     i++
//     localStorage.setItem("i",i)

// })

// let allData = localStorage.getItem("answers")
// allData = JSON.parse(allData)
// console.log(allData)
// myData={...allData}

// for(let j in allData){
//     let p = document.createElement("p")
//     let pContent = document.createTextNode( j +" = "+allData[j])
//     p.appendChild(pContent)
//     answer.appendChild(p)
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



// for(let j =0 ; j<localStorage.length;j++){
//     let keyt=localStorage.key(j)
//     let allData = localStorage.getItem(keyt)
//     myAnswers.push(allData)
//     let myDatas =[]
//     let myData = {}
//     myData.keyt = allData
//     myDatas.push =myData
//     let jsonData = JSON.stringify(myDatas)
//     let datas = JSON.parse(jsonData)
//     let p = document.createElement("p")
//     let pContent = document.createTextNode(allData)
//     p.appendChild(pContent)
//     answer.appendChild(p)
// }





let form = document.querySelector('form');
let inputOne = document.querySelector(".number1")
let inputTow = document.querySelector(".number2")
let answer = document.querySelector(".answer")
let histori =document.querySelector(".histori")
let submit = document.querySelector(".submit")

form.addEventListener("click", function(e){
    e.preventDefault()
})


let myData = {}
submit.addEventListener("click", function(){
    let valueOne = inputOne.value
    let valueTwo = inputTow.value
    if(valueOne !== ""&& valueTwo !==""){
        let result = valueOne * valueTwo
        let p = document.createElement("p")
        let pContent = document.createTextNode(`${valueOne} * ${valueTwo} = ${result}`)
        p.appendChild(pContent)
        answer.appendChild(p)
        myData[`${valueOne} * ${valueTwo} `]=result
        let jsonData = JSON.stringify(myData)
        localStorage.setItem("data", jsonData)
        console.log(myData)
    }else{
        alert("error")
    }
    inputOne.value =""
    inputTow.value =""
})

let allData = localStorage.getItem("data")
allData = JSON.parse(allData)
myData = {...allData}
for(let x in allData){
    let p = document.createElement("p")
    let pContent = document.createTextNode(`${x} = ${allData[x]}`)
    p.appendChild(pContent)
    answer.appendChild(p)
}
console.log(allData)
