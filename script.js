let fotoQty = 6;
let containerFoto = document.getElementById("chooseFoto");
let navBar = document.getElementById("navBar");
let foto = document.getElementById("pic");
let radioBtn = document.getElementsByTagName('input');
let chooseFoto = document.getElementById('chooseFoto');
let countFoto = 1;
let play = false;
let playTimer;

createRadioBtn();
changeRadioBtn();

chooseFoto.addEventListener('click', (event)=> {
    countFoto = event.target.id;
    console.log(event.target.id);
    changeRadioBtn();
    changeFoto();
});

navBar.addEventListener("click", (event)=> {
    switch(event.target.id) {
        case 'toStart':
            countFoto = 1;
            changeFoto();
            break;
        case 'back':
            if (countFoto > 1) {
                countFoto--;
                changeFoto();
            }
            break;
        case 'play':
            if (play === false) {
                play = true;
                playTimer = setInterval(playGallery, 3000);
            } else if (play === true){
                play = false;
                clearInterval(playTimer);
                console.log(1);
            }
            break;
        case 'forward':
            if (countFoto < fotoQty) {
                countFoto++;
                changeFoto();
            }
            break;
        case 'toEnd':
            countFoto = fotoQty;
            changeFoto();
            break;
        default:
            break;
    }
});

function playGallery() {
    if (countFoto >= 1 && countFoto <= fotoQty) {
        changeFoto();
        countFoto++;
    }
    else {
        countFoto = 1;
    }
};

function changeFoto(){
    foto.src = "./files/" + countFoto + ".jpg";
    changeRadioBtn();
};

function createRadioBtn(){
    for (let i = 0; i < fotoQty; i++) {
        let element = document.createElement("input");
        element.setAttribute("type", "radio");
        element.setAttribute("id", i+1);
        containerFoto.appendChild(element);
    }
};

function changeRadioBtn() {
    for (let i = 0; i < fotoQty; i++) {
        radioBtn[i].checked = '';
    }
    radioBtn[countFoto-1].checked = 'true';
}