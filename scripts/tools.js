const frontelement = document.querySelector("a.front")
if(frontelement){
    frontelement.addEventListener("click", e => {
    
        document.querySelector("p.skill").innerHTML = "HTML5, CSS3(SASS), Javascript ES6"

    });
}

const backelement = document.querySelector("a.backend")
if(backelement){
    backelement.addEventListener("click", e => {
        
        document.querySelector("p.skill").innerHTML = "PHP7, Node JS"

    });
}

const frameelement = document.querySelector("a.frame")
if(frameelement){
    frameelement.addEventListener("click", e => {
        
        document.querySelector("p.skill").innerHTML = "Bootstrap"

    });
}

const dataelement = document.querySelector("a.data")
if(dataelement){
    dataelement.addEventListener("click", e => {
        
        document.querySelector("p.skill").innerHTML = "XML, SQL"

    });
}

const card = document.querySelector("div.card")
if(card){
    card.addEventListener("mousemove", e => {

        card.style.transform = "scale(1.1)"
        card.style.transition = ".2s ease-in"
        document.querySelector(".content").blur(5)
        

    });
    
    card.addEventListener("mouseleave", e => {

        card.style.transform = "scale(1)"
        card.style.transition = ".2s ease-out"
        card.style.transform = "rotateY(0deg)"
        card.style.transform = "rotateX(0deg)"

    });
}

