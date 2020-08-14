// Initialize template

let id = window.location.search.substring(1, window.location.search.length)

let PAGE = E_DESIGN

switch (id){
    case 'sites':
        PAGE = E_SITES;
        break;
    case 'design':
        PAGE = E_DESIGN;
        break;
    case 'games':
        PAGE = E_GAMES;
        break;
    case 'contact':
        PAGE = E_CONTACT;
        break;
}

console.log(id)
let ELEMS = PAGE.elems
let STRING = ``
let MAST = Class('mast')[0]

MAST.firstElementChild.innerHTML = PAGE.title
MAST.lastElementChild.innerHTML = PAGE.blurb

// Add Elems
for (let i=0; i<ELEMS.length; i++){

    STRING += Elem(ELEMS[i])
}

Class('main')[0].innerHTML += STRING
