//Validación texto
function validarEntrada(texto) {
    return /^[a-z\s]+$/.test(texto);
}

//Encriptar
const btnEncrip = document.getElementById('btnEncrip');
btnEncrip.addEventListener('click', encripTexto);

function encripTexto(e) {
    e.preventDefault();
    let inputTexto = document.getElementById("input").value;

    if (!validarEntrada(inputTexto)) {
        alert("Ingresa un texto en la casilla indicada solo con letras minusculas y sin tildes.");
        return
    }

    var textoEncrip = inputTexto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("output").textContent = textoEncrip
    const element = document.querySelector('.outputPackage');
        element.style.opacity = '0%';
        element.style.transition = '250ms';
}

//Desencriptar
const btnDecrip = document.getElementById("btnDecrip");
btnDecrip.addEventListener('click', decripTexto)

function decripTexto(e) {
    e.preventDefault();
    let inputTexto = document.getElementById("input").value;

    if (!validarEntrada(inputTexto)) {
        alert("Ingresa un texto en la casilla indicada solo con letras minusculas y sin tildes.");
        return
    }

    let textoDecrip = inputTexto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById("output").textContent = textoDecrip;
    const element = document.querySelector('.outputPackage');
    element.style.opacity = '0%';
    element.style.transition = '250ms';
}

//Copiar
const btnCopiar = document.getElementById('btnCopiar');
btnCopiar.addEventListener('click', copiar)

function copiar(e) {
    e.preventDefault();
    let textoResultado = document.getElementById("output").textContent;
    if (!textoResultado) {
        alert("Ingresa un texto en la casilla indicada para comenzar a encriptar o desencriptar.");
        return;
    }
    navigator.clipboard.writeText(textoResultado);
}
