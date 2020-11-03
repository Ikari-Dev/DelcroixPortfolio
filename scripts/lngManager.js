fetch("../data/fr.json")
  .then(response => response.json())
  .then(json => {

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

    let address = document.getElementsByClassName('address');
    if(address){
        address[0].innerHTML = json.school.licence.address
        address[1].innerHTML = json.school.dut.address
        address[2].innerHTML = json.school.sti2d.address
    }

    let intitule = document.getElementsByClassName('intitule');
    if(intitule){
        intitule[0].innerHTML = json.school.licence.name
        intitule[1].innerHTML = json.school.dut.name
        intitule[2].innerHTML = json.school.sti2d.name
    }

    let infos = document.getElementsByClassName('info');
    if(infos){
        infos[0].innerHTML = json.school.licence.info
        infos[1].innerHTML = json.school.dut.info
        infos[2].innerHTML = json.school.sti2d.info
    }

    let a = document.getElementsByClassName('lienformation');
    if(a){
        for(let i = 0; i < a.length ; i++) {
            a[i].innerHTML = json.school.licence.detail
       }    
    }

    

  });