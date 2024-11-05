const texto = [
    "...Lorem ipsum dolor sit amet",
    "...consectetur adipisicing elit.",
    "...Laudantium autem corrupti iure neque"
];

function modificarTexto() {
    const textoMovimiento = texto[Math.floor(Math.random() * texto.length)];
    document.getElementById('random').innerText = textoMovimiento;
}

setInterval(modificarTexto, 1800);