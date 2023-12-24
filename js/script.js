let size = document.getElementById("size");

// 'screen' is de naam van een functie
window.onresize = screen;
window.onload = screen;
window.onchange = screen;

// Functie met de naam 'screen'
function screen() {
    const width = Number(window.innerWidth).toFixed(); 
    const height = Number(window.innerHeight).toFixed(); 

    // Schermgrootte (Breedte & hoogte)
    size.innerHTML = `Width: <span class='width'>${width}px</span> Height: <span class='height'>${height}px</span>`;
}
