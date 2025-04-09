function photographerTemplate(data) {
    const { name, portrait,city, country, price, tagline ,id } = data;

    const picture = `assets/photographers/portraits/${portrait}`;
    const link = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", link);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        a.appendChild(img);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(a);
        article.appendChild(h2);
        const p = document.createElement( 'p' );
        p.textContent = city+', '+country;
        p.setAttribute("class", "location");
        article.appendChild(p);
        const p2 = document.createElement( 'p' );
        p2.textContent = tagline;
        p.setAttribute("class", "tagline");
        article.appendChild(p2);
        const p3 = document.createElement( 'p' );
        p3.textContent = price+'€/jour';
        p3.setAttribute("class", "price");
        article.appendChild(p3);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}