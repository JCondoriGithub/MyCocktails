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


export function createJson() {

    let name = document.getElementById('name').value;
    let typology = document.getElementById('typology').value;
    let glassType = document.getElementById('glassType').value;
    let history = document.getElementById('history').value;
    let nameIngr1 = document.getElementById('nameIngr1').value;
    let oz1 = document.getElementById('oz1').value;
    let cl1 = document.getElementById('cl1').value;
    let nameIngr2 = document.getElementById('nameIngr2').value;
    let oz2 = document.getElementById('oz2').value;
    let cl2 = document.getElementById('cl2').value;
    let method = document.getElementById('method').value;
    let prepDefault = document.getElementById('prepDefault').value;
    let Variant1 = document.getElementById('variant1').value;
    let variant2 = document.getElementById('variant2').value;
    let nameDeco1 = document.getElementById('nameDeco1').value;
    let prepDeco1 = document.getElementById('prepDeco1').value;
    let nameDeco2 = document.getElementById('nameDeco2').value;
    let prepDeco2 = document.getElementById('prepDeco2').value;

    const json = {
        "name": name,
        "typology": typology,
        "glassType": glassType,
        "ingredients": [{
            "name": nameIngr1,
            "oz": oz1,
            "cl": cl1
        },
        {
            "name": nameIngr2,
            "oz": oz2,
            "cl": cl2
        }],
        "preparation": {
            "name": method,
            "prepDefault": prepDefault,
            "variants": [Variant1, variant2]
        },
        "decorations": {
        },
        "glassType": glassType,
        "tipology": typology,
        "history": history,
        "urlImg": "/img/prova_img1.png"
    }

    json.decorations[nameDeco1] = prepDeco1;
    json.decorations[nameDeco2] = prepDeco2;

    if(Object.keys(json.decorations) == "") {
        json.decorations = null;
        console.log('si');
    }
    
    console.log(json);
    return JSON.stringify(json);
}


export async function sendPost(dataSend) {

    let response = await fetch('/api/cocktails', {
        method: 'POST', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: dataSend
    });

    if (response.status == 200) {
        alert("il cocktail è stato salvato!");
    }
}

export async function sendPut(dataSend, id) {
	
    let response = await fetch('/api/cocktails/' + id, {
        method: 'PUT', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: dataSend
    });

    if (response.status == 200) {
        alert("il cocktail è stato aggiornato!");
    }
}