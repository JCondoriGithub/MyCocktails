async function getAll() {

    let response = await fetch('api/cocktails');
    let arr = await response.json();
    console.log(arr);
    return arr;
}

let allCocktails = getAll();

async function createCards() {

    const arrayCocktails = await allCocktails;

    for(let i = 0; i < arrayCocktails.length; i++) {

        const card = document.createElement('div');
        card.innerHTML = `

        <div class="card mb-5" style="width: 18rem;">
            <img src="${arrayCocktails[i].urlImg}" class="card-img-top" alt="immagine-cocktail">
            <div class="card-body">
                <h5 class="card-title">${arrayCocktails[i].nome}</h5>
                <p class="card-text">${arrayCocktails[i].preparazione.prepDefault}</p>
                <a href="#" class="btn btn-primary">Dettagli</a>
            </div>
        </div>`;

        document.getElementById('divCocktails').appendChild(card);
    }


    //for(let i = 0; i < arrayCocktails.length; i++) {

        /*const divRow = document.createElement('div');
        divRow.className = 'row';

        const div = document.createElement('div');
        div.className = 'col';*/ 

        /*const divCard = document.createElement('div');
        divCard.className = 'card';
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
        cardTitle.appendChild(document.createTextNode(arrayCocktails[i].nome));
        cardBody.appendChild(cardTitle);

        const prepDefault = document.createElement('p');
        prepDefault.className = 'card-text';
        prepDefault.appendChild(document.createTextNode(arrayCocktails[i].preparazione.prepDefault));
        cardBody.appendChild(prepDefault);

        const btn = document.createElement('a');
        btn.className = 'btn btn-primary';
        btn.appendChild(document.createTextNode('Dettagli'));
        cardBody.appendChild(btn);

        divCard.appendChild(cardBody);
        /*div.appendChild(divCard);
        divRow.appendChild(div);*/
        //document.getElementById('divCocktails').appendChild(card);
    //}
}

createCards();