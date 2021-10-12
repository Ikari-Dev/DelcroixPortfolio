let radio = document.querySelectorAll(".formation")

for(let i = 0; i <= 3; i++){
    radio[i].addEventListener("click", (e) => {
        for (let j = 0; j <= 3; j++){
            if(i != j){
                radio[j].checked = false
            }
        }
        let cards = document.querySelectorAll(".card")
        cards.forEach(element => {
            if(element.classList.contains(radio[i].id)){
                element.style.display = "block"
            }
            else {
                element.style.display = "none"
            }
        });
    })
}