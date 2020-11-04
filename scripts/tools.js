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
        
        document.querySelector("p.skill").innerHTML = "Bootstrap, Vue.JS(VUEX)"

    });
}

const dataelement = document.querySelector("a.data")
if(dataelement){
    dataelement.addEventListener("click", e => {
        
        document.querySelector("p.skill").innerHTML = "XML, SQL"

    });
}

const tools = document.querySelector("a.tools")
if(tools){
    
    tools.addEventListener("click", e => {
        
        document.querySelector("p.skill").innerHTML = "WebPack, Git, Linux, VSCode, Browser DevTools"

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


const toggleLang = document.querySelector("a.facebook")
if(toggleLang){
    toggleLang.addEventListener("click", e => {
        /*switch (toggleLang.innerHTML) {
            case "FR":
                toggleLang.innerHTML = "EN"
                break;
            
            case "EN":
                toggleLang.innerHTML = "JAP"
                break;

            case "JAP":
                toggleLang.innerHTML = "FR"
                break;
        
            default:
                toggleLang.innerHTML = "FR"
                break;
        }*/
        changeLang(toggleLang.innerHTML.toLocaleLowerCase)
    })
}

function changeLang(filename){
    let path = "../data/"
    let ext = ".json"
    let file = path.concat(toggleLang.innerHTML.toLocaleLowerCase(), ext)
    fetch(file)
    .then(response => response.json())
    .then(json => {
        console.log(json.home);
        const data = document.querySelector("a.data");
        if(data){
            data.innerHTML = json.about.data
        }

        const tools = document.querySelector("a.tools");
        if(tools){
            tools.innerHTML = json.about.Tools
        }

        const skill = document.querySelector("p.skill");
        if(skill){
            skill.innerHTML = json.about.prefill
        }

        const titleinfo = document.querySelector("h3.titleinfo");
        if(titleinfo){
            titleinfo.innerHTML = json.about.subInfo
        }

        const info = document.querySelector("p.word");
        if(info){
            info.innerHTML = json.about.info
        }

        if(document.title == "School"){
            const address = document.getElementsByClassName('address');
            if(address){
                address[0].innerHTML = json.school.licence.address
                address[1].innerHTML = json.school.dut.address
                address[2].innerHTML = json.school.sti2d.address
            }

            const intitule = document.getElementsByClassName('intitule');
            if(intitule){
                intitule[0].innerHTML = json.school.licence.name
                intitule[1].innerHTML = json.school.dut.name
                intitule[2].innerHTML = json.school.sti2d.name
            }

            const infos = document.getElementsByClassName('info');
            if(infos){
                infos[0].innerHTML = json.school.licence.info
                infos[1].innerHTML = json.school.dut.info
                infos[2].innerHTML = json.school.sti2d.info
            }

            const a = document.getElementsByClassName('lienformation');
            if(a){
                for(let i = 0; i < a.length ; i++) {
                    a[i].innerHTML = json.school.licence.detail
                }    
            }
        }
    });
}

