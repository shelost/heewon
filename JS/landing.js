let PAGE = E_HOME
let ELEMS = PAGE.elems

for (let i=0; i<ELEMS.length; i++){

    let str = ``

    for (let j=0; j<ELEMS[i].length; j++){
        if (i==0){
            str += Elem(ELEMS[i][j], true)
        }else{
            str += Card(ELEMS[i][j], true)
        }
    }

    Class('elems')[i].innerHTML = str
}

