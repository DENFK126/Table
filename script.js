let sheetId = '1qQbqvW611HnFWNIhQv2Hjwhy4WPoNLJjaiOadj1EZ78'
let key = 'AIzaSyA2toE5jI2vvLt1xktPwbYKOYObjZFGgB8'
let listName = 'Денчик'
let url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${listName}?key=${key}`

let contentBlock =  document.querySelector('.content')

async function GetData(){
    let data = await fetch(url)
    let Json = await data.json()
    // console.log(Json)
    let convertedData = CovertToObject(Json.values)
    console.log(convertedData)
    convertedData.forEach(function(element){
        CreateBlock(element)
    })
}

function CovertToObject(jsonData){
    let formatedList = []
    for(let i = 1;i < jsonData.length; i++){
        let row = jsonData[i]
        let object = {}
        for(let j = 0;j < row.length; j++){
                object[jsonData[0][j]] = row[j]
        }
        //console.log(object)
        formatedList.push(object)
    }
    return formatedList
}

function CreateBlock(item){
    let block = `
    <div class="card">
        <div class="left">
            
            <h1 class="title">${item.ID_реплея}</h1>
            <p class="desc"><p>${item.Поражение_Победа}</p></p>
         </div>
        <div class="right">
            <div class="img" style="background-image:url(${item.игрок})"></div>
        </div>
        <div class="line"></div>
    </div>`
    contentBlock.innerHTML += block
}



GetData()

function dayNightTheme(){
    let date = new Date()
    let hour = date.getHours()
    if(hour >= 7 && hour<19){
        console.log('day theme')
    }
}
dayNightTheme()