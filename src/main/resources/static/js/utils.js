import { showModal } from "./home.js";

export async function getAll() {

    let response = await fetch('api/cocktails');
    let arrayCocktails = await response.json();
    console.log(arrayCocktails);
    return arrayCocktails;
}


export function createCards(arrayCocktails) {

    for (let i = 0; i < arrayCocktails.length; i++) {

        const divCard = document.createElement('div');
        divCard.className = 'card mb-5';
        divCard.style.width = '18rem';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = arrayCocktails[i].urlImg;
        img.alt = 'immagine-prova';
        divCard.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.appendChild(document.createTextNode(arrayCocktails[i].name));
        cardBody.appendChild(cardTitle);

        const prepDefault = document.createElement('p');
        prepDefault.className = 'card-text';
        prepDefault.appendChild(document.createTextNode(arrayCocktails[i].preparation.prepDefault));
        cardBody.appendChild(prepDefault);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = 'btn btn-primary';
        btn.appendChild(document.createTextNode('Dettagli'));
        btn.addEventListener("click", function () {
            showModal(arrayCocktails[i]);
        });
        cardBody.appendChild(btn);

        divCard.appendChild(cardBody);
        document.getElementById('divCocktails').appendChild(divCard);
    }
}


function deleteAllCards() {

    const newDivCocktails = document.createElement('divCocktails');
    newDivCocktails.id = 'divCocktails';
    newDivCocktails.className = 'container mt-5';
    const oldDivCocktails = document.getElementById('divCocktails');
    document.getElementById('divCards').replaceChild(newDivCocktails, oldDivCocktails);
}


export async function deleteCard(id) {

    let response = await fetch('/api/cocktails/' + id, { method: 'DELETE' });

    if (response.status == 200) {

        alert('il cocktail è stato eliminato!');
        deleteAllCards();
        let arrayCocktails = await getAll();
        createCards(arrayCocktails);
    }
}