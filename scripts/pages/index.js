async function getPhotographers() {
       
    const results = await fetch('./data/photographers.json');
    const data = await results.json();
    console.log('photographers', data);
    // et bien retourner le tableau photographers seulement une fois récupéré
    return data.photographers;
}

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
