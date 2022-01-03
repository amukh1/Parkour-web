console.log(document.cookie)

let circle = ['Site programmed and designed by amukh1.', 'Parkour is a sport that requires a lot of energy and agility.']

console.log('v1.2.0')
setInterval(credits, 4000);

function credits() {
    console.log('switching')
    // if(document.getElementById('eee').innerHTML == 'Parkour is a high speed intense game that requires a lot of energy and agility.'){

    //     document.getElementById('eee').innerHTML = 'Site programmed and designed by amukh1.'
    //     //    document.getElementById('eee').innerHTML = 'amu'
    // }else if(document.getElementById('eee').innerHTML == 'Site programmed and designed by amukh1.'){

    //     document.getElementById('eee').innerHTML = 'Parkour is a high speed intense game that requires a lot of energy and agility.'
        
    //     // document.getElementById('eee').innerHTML = 'park'
    // }
    let current = circle.indexOf(document.getElementById('eee').innerHTML)
    if(current == circle.length - 1){
        current = -1
    }
    document.getElementById('eee').innerHTML = circle[current + 1]
}