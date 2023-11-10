const apiKey = "B15OaiU0xuBDqslIShznzBKOQOLq2pXw"

const termino = document.querySelector(".termino");
const buscador = document.querySelector(".buscar");
const resultados = document.querySelector(".resultados");



buscador.addEventListener( "click" , () => {
    resultados.innerHTML = "";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termino.value}&limit=9`
    const peticion = fetch(url);

    peticion
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((respuesta) => {
            respuesta.data.forEach(elemento => {
                const urlImg = elemento.images.original.url;
                const img = document.createElement("img");
                img.src = urlImg;
                resultados.appendChild(img);
            })
        })
        .catch((error) => {
            console.log("Error!!");
        });
})

