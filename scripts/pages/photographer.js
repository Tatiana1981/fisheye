//Mettre le code JavaScript lié à la page photographer.html
function getUrlParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    return id;
}
async function getMedia() {
    const id = getUrlParam();
    const results = await fetch('../data/photographers.json');
    const json = await results.json();
    const medias = json.media.filter((media) => media.photographerId === parseInt(id));
    const photographer = json.photographers.filter((photographer) => photographer.id === parseInt(id))[0];
    return {medias, photographer};  
}
async function init() {
    // Récupère les datas des photographes
    const {medias, photographer} = await getMedia();
    console.log(medias, photographer);
}

init();


