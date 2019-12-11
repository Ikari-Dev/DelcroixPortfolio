/*import Item from '../scripts/Item'

let items = []
let item = new Item("Project 1", "some description", "../ressources/font.jpg", "#", "#")
items.push(item)*/

function itemCreate(imgurl = "../ressources/font.jpg", projname = "Project Name",
 projdesc = "Project description, it can be teck, language or whatever, because is it funny to write some description for some project..."){

    let divItem = document.createElement("div")
    divItem.classList.add("item")
    let img = document.createElement("img")
    img.setAttribute("src",imgurl)
    let divInfo = document.createElement("div")
    divInfo.classList.add("info")
    let htrois = document.createElement("h3")
    htrois.innerText = projname
    let pdesc = document.createElement("p")
    pdesc.innerText = projdesc
    let divlink = document.createElement("div")
    divlink.classList.add("link")
    let linkun = document.createElement("a")  
    linkun.classList.add("linkproj")
    linkun.setAttribute("href", "#")
    linkun.innerText = "Code"
    let linkdeux = document.createElement("a")
    linkdeux.classList.add("linkproj")
    linkdeux.setAttribute("href", "#")
    linkdeux.innerText = "Live"

    divInfo.appendChild(htrois)
    divInfo.appendChild(pdesc)
    divInfo.appendChild(divlink)
    divlink.appendChild(linkun)
    divlink.appendChild(linkdeux)
    divItem.appendChild(img)
    divItem.appendChild(divInfo)
    let currentdiv = document.querySelector(".container")
    currentdiv.appendChild(divItem)

}

function cleancontainer(){
    let container = document.querySelector(".container")
    container.innerHTML = ""
}


const listtraining = document.querySelector("a.training")
listtraining.addEventListener("click", function(){

    cleancontainer()

    for(let i=0;i<3;i++){
        itemCreate()
    }

})

const listpersonnal = document.querySelector("a.personnal")
listpersonnal.addEventListener("click", function(){
   
    cleancontainer()

    for(let i=0;i<5;i++){
        itemCreate()
    }

})