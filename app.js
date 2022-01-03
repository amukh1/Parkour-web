console.log(document.cookie)

console.log('v1.0.0')
let jj = 'amu'
setInterval(credits, 6000);

function credits() {
    console.log('switching')
    let doc = document.getElementById("eee").innerHTML
    if(jj == 'park'){
        jj = 'amu'
        doc = 'Site programmed and designed by amukh1.'
    }else if(jj == 'amu'){
        jj = 'park'
        doc = 'Parkour is a high speed intense game that requires a lot of energy and agility.'
    }
}