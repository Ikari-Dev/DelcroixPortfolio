
let itemsPersonnal = []
let itemsTraining = []
let item = new Item("Projet L2", "Projet de L2, créer un site web avec des contraintes technologiques(JS, HTML, CSS(Sass), CGI).", "../ressources/siteL2.jpg", "https://github.com/Ikari-Dev/L2WebProject", "https://ikari-dev.github.io/L2WebProject/")
let item1 = new Item("Pictionnary", "Projet foundation, travail sur frameworks css et sur l'UI(JS, HTML, CSS(Foundation+Sass)).", "../ressources/training.jpg", "https://github.com/Ikari-Dev/UI-Training-1", "https://ikari-dev.github.io/UI-Training-1/")
let item2 = new Item("DungeonSeeker3", "Projet personnel, création d'un jeu video JS avec utilisation du frameworks Vue.js(JS, HTML, CSS(sass), Vue.js(VueX)).", "../ressources/dungeonSeeker.jpg", "https://github.com/Ikari-Dev/DungeonSeeker3", "")
let item3 = new Item("MangaList", "Projet personnel, création d'une bibilotheque de manga (HTML5, CSS3(SASS), JS ES6).", "../ressources/mangalist.jpg", "https://github.com/Ikari-Dev/MangaList", "https://ikari-dev.github.io/MangaList/")
itemsTraining.push(item)
itemsPersonnal.push(item1)
itemsPersonnal.push(item2)
itemsPersonnal.push(item3)

function itemCreate(imgurl = "../ressources/font.jpg", projname = "Project Name",
 projdesc = "Project description, it can be teck, language or whatever, because is it funny to write some description for some project...",
 linkcode = "#", linklive){

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
    if(linklive == ""){
        linkdeux.style.display = "none"
    }
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
    
    itemsPersonnal.forEach(element => {
        itemCreate(element.img, element.name, element.description, element.linkCode, element.linkLive)
    });
    

})