console.log(document.cookie)

console.log('v1.0.0')
setInterval(credits, 6000);

function credits() {
    console.log('switching')
    if(document.getElementById('eee').innerHTML == 'Parkour is a high speed intense game that requires a lot of energy and agility.'){

        document.getElementById('eee').innerHTML = 'Site programmed and designed by amukh1.'
        //    document.getElementById('eee').innerHTML = 'amu'
    }else if(document.getElementById('eee').innerHTML == 'Site programmed and designed by amukh1.'){

        document.getElementById('eee').innerHTML = 'Parkour is a high speed intense game that requires a lot of energy and agility.'
        
        // document.getElementById('eee').innerHTML = 'park'
    }
}