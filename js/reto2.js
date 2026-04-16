// =========================
// CÓDIGO DE AURA (RETO 2)
// =========================

// 1. Tus datos (puedes poner esto arriba con las variables del equipo)
const historyData = [
    { url: 'google.com', text: 'React documentation' },
    { url: 'google.com', text: 'Stack Overflow: async await' },
    { url: 'google.com', text: 'GitHub - my-repo' },
    { url: 'google.com', text: 'localhost:3000' },
    { url: 'google.com', text: 'How to center a div' },
    { url: 'google.com', text: 'npm registry' },
    { url: 'google.com', text: 'VS Code extensions' },
    { url: 'google.com', text: 'Coffee shops near me' },
    { url: 'google.com', text: 'How to fix critical server error' }, // CORRECTA
    { url: 'google.com', text: 'TypeScript handbook' },
    { url: 'google.com', text: 'Reddit programming' },
    { url: 'google.com', text: 'YouTube - coding tutorial' },
    { url: 'google.com', text: 'LinkedIn' },
    { url: 'google.com', text: 'Gmail' },
    { url: 'google.com', text: 'Twitter' },
    { url: 'google.com', text: 'Spotify' }
];

// 2. La función mágica que el código de tu equipo está buscando
function iniciarReto2() {
    // Buscamos tu contenedor dentro del HTML de tu equipo
    // IMPORTANTE: Asegúrate de que el HTML tenga id="history-grid" y no "listaPalabras"
    const gridContainer = document.getElementById('history-grid'); 
    
    // Limpiamos el grid por si el jugador reinicia el juego y vuelve a entrar
    gridContainer.innerHTML = "";

    // Construimos los botones
    historyData.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('history-btn');

        card.innerHTML = `
            <span class="url">${item.url}</span>
            <span class="query">${item.text}</span>
        `;

        card.addEventListener('click', () => {
            // Quitamos el color a todos primero
            document.querySelectorAll('.history-btn').forEach(b => b.classList.remove('active-error'));
            
            if (item.text === 'How to fix critical server error') {
                // ACERTÓ
                card.classList.add('active-error');
                
                // Integramos con el código del equipo: mostramos su pantalla de éxito
                setTimeout(() => { // Pequeño retraso para que se vea el botón rojo
                    mostrarPantalla(pantallaExito);
                }, 500); 

            } else {
                // FALLÓ
                // Integramos con el código del equipo: mostramos su pantalla de error
                mostrarPantalla(pantallaError);
            }
        });

        gridContainer.appendChild(card);
    });
}