console.log(document.cookie)

let version = 'v1.2.1'

let circle = ['Site programmed and designed by amukh1.', 'Parkour is a sport that requires a lot of energy and agility.', `This is version ${version}`]

console.log(version)
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