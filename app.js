console.log(document.cookie)

let version = 'v1.5.2'

let circle = ['The study of movement', 'This website was made for one of my favorite games. They choose some other guys website over mine.', 'Site programmed and designed by amukh1#9613', 'Parkour is a sport that requires a lot of energy and agility.', `This is version ${version}`]

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

function useless(e) {
console.log(e)
let target = e.innerHTML
window.location.href = `https://parkour.amukh1.dev/${target}`
}

function byebye() {
    document.getElementById('move').style.top = '100px'
    document.getElementById('move').style.opacity = '0'
    display = 'none'
    window.scrollBy(0, 1000);
}