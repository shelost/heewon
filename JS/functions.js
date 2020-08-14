function Id(arg){
    return document.getElementById(arg)
}

function Class(arg){
    return document.getElementsByClassName(arg)
}

function Tag(arg){
    return document.getElementsByTagName(arg)
}

function El(arg){
    return document.createElement(arg)
}

function TextNode(arg){
    return document.createTextNode(arg)
}

function Contains(el, arg){
    return el.classList.contains(arg)
}

function Add(elem, args){
    for (let i=0;i<args.length;i++){
        elem.appendChild(args[i])
    }
}

function Classes(elem, arg){

    var arr = arg.split(' ')

    for (let i=0;i<arr.length;i++){
        elem.classList.add(arr[i])
    }
}

function Translate(tag){
    switch(tag){

        case 'ps':
            return 'Photoshop';
        case 'ai':
            return 'Illustrator';
        case 'ae':
            return 'After Effects';
        case 'html':
            return 'HTML';
        case 'js':
            return 'JavaScript';
        case 'css':
            return 'CSS';
        case 'sass':
            return 'SASS';
        case 'vue':
            return 'Vue';
        case 'canvas':
            return 'Canvas';
        case 'blogger':
            return 'Blogger';
        case 'android':
            return 'Android';
        case 'java':
            return 'Java';

        case 'company':
            return 'Company';
        case 'school':
            return 'Extracurricular';
        case 'church':
            return 'Church';
        case 'me':
            return 'Recreational'

        default:
            return 'Tag';
    }
}

function Elem(object, landing){

    let elem = object

    let tags = `<div class = 'tags'>`

    for (let j=0; j<elem.tags.length; j++){
        tags +=
        `
        <p> ${Translate(elem.tags[j])} </p>
        `
    }

    if (landing){
        img =  ` <img src = './Assets/logos/${elem.image}.png' alt = 'Element Image' class = 'image'> `
    }else{
        img =  ` <img src = '../Assets/logos/${elem.image}.png' alt = 'Element Image' class = 'image'> `
    }

    tags += `</div>`

    let str =
    `
    <a href = '#'>
        <div class = 'elem ${elem.color}'>

            <div class = 'expo'>
                <h1> ${elem.title} <span> ${elem.date} </span> </h1>
                <p> ${elem.blurb} </p>
            </div>

    `
    + img +

    `
        <div class = 'tags'>
    `
    + tags +
    `
            </div>
        </div>
    </a>
    `

    return str;
}

function Card(object, landing){

    let elem = object

    let img;

    if (landing){
        img =  ` <img src = './Assets/logos/${elem.image}.png' alt = 'Element Image' class = 'image'> `
    }else{
        img =  ` <img src = '../Assets/logos/${elem.image}.png' alt = 'Element Image' class = 'image'> `
    }

    let str =
    `
    <a href = '#'>
        <div class = 'card ${elem.color}'>

            <h1> ${elem.title} </h1>
            <p> ${elem.blurb} </p>
            `
    + img +

    `
        </div>
    </a>
    `

    return str;
}