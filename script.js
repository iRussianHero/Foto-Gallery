let fotoQty = 6;
let containerFoto = document.getElementById("chooseFoto");

for (let i = 0; i < fotoQty; i++) {
    let element = document.createElement("input");
    element.setAttribute("type", "radio");
    element.setAttribute("id", i);
    containerFoto.appendChild(element);
    console.log(element);
}