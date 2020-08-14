

for (let i=0; i<Class('elem').length; i++){

    let elem = Class('elem')[i]

    elem.addEventListener('mouseenter', () => {

        for (let j=0; j<Class('elem').length; j++){
            let elem2 = Class('elem')[j]

            if (i != j){
                elem2.classList.add('inactive')
            }
        }
    })

    elem.addEventListener('mouseleave', () => {

        console.log('bro')
        for (let j=0; j<Class('elem').length; j++){
            let elem2 = Class('elem')[j]

                elem2.classList.remove('inactive')
        }
    })
}

function Toggle(){
    Id('navfab').classList.toggle('active')
    Id('dark').classList.toggle('active')
    Class('main')[0].classList.toggle('active')
    Class('navbar')[0].classList.toggle('active')
    Class('header')[0].classList.toggle('active')
}

Id('navfab').onclick = Toggle
Id('dark').onclick = Toggle
Class('navbar')[0].onclick = Toggle