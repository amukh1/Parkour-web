console.log(document.cookie)

setInterval(credits, 3000);

function credits() {
    console.log('switching')
    let doc = document.getElementById("eee").innerHTML
    if(doc == 'Parkour is a high speed intense game that requires a lot of energy and agility.'){
        doc = 'Site programmed and designed by amukh1.'
    }else if(doc == 'Site programmed and designed by amukh1.'){
        doc = 'Parkour is a high speed intense game that requires a lot of energy and agility.'
    }
}