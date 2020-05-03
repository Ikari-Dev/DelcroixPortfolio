
let itemsPersonnal = []
let itemsTraining = []
let item = new Item("L2 Project", "Second year project, we had to create a site on any theme using certain technology.", "../ressources/siteL2.png", "https://github.com/Ikari-Dev/L2WebProject", "https://ikari-dev.github.io/L2WebProject/")
itemsTraining.push(item)

function itemCreate(imgurl = "../ressources/font.jpg", projname = "Project Name",
 projdesc = "Project description, it can be teck, language or whatever, because is it funny to write some description for some project...",
 linkcode = "#", linklive = "#"){

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
    linkun.setAttribute("href", linkcode)
    linkun.innerText = "Code"
    let linkdeux = document.createElement("a")
    linkdeux.classList.add("linkproj")
    linkdeux.setAttribute("href", linklive)
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

const listpersonnal = document.querySelector("a.personnal")
const listtraining = document.querySelector("a.training")
listtraining.addEventListener("click", function(){

    cleancontainer()

    listpersonnal.classList.remove("active")
    listtraining.classList.add("active")

    itemsTraining.forEach(element => {
        itemCreate(element.img, element.name, element.description, element.linkCode, element.linkLive)
    });

})

listpersonnal.addEventListener("click", function(){
   
    cleancontainer()
    
    listtraining.classList.remove("active")
    listpersonnal.classList.add("active")

    /*for(let i=0;i<5;i++){
        itemCreate()
    }*/
    
    itemsPersonnal.forEach(element => {
        itemCreate(element.img, element.name, element.description, element.linkCode, element.linkLive)
    });
    

})