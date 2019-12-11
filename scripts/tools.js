const frontelement = document.querySelector("a.front")
frontelement.addEventListener("click", function(){
   
    document.querySelector("p.skill").innerHTML = "HTML5, CSS3(SASS), Javascript ES6"

});

const backelement = document.querySelector("a.backend")
backelement.addEventListener("click", function(){
    
    document.querySelector("p.skill").innerHTML = "PHP7"

});

const frameelement = document.querySelector("a.frame")
frameelement.addEventListener("click", function(){
    
    document.querySelector("p.skill").innerHTML = "Bootstrap"

});

