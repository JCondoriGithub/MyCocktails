import { getAll, createCards, deleteAllCards } from "./utils.js";

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

export async function deleteCard(id) {

    let response = await fetch('/api/cocktails/' + id, { method: 'DELETE' });

    if (response.status == 200) {

        alert('il cocktail è stato eliminato!');
        deleteAllCards();
        let arrayCocktails = await getAll();
        createCards(arrayCocktails);
    }
}