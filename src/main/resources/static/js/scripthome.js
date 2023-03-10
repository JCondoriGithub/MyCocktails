async function getAll() {

    let response = await fetch('api/cocktails');
    let arr = await response.json();
    console.log(arr);
    return arr;
}

async function createCards() {

  let arrayCocktails = await getAll();

  for(let i = 0; i < arrayCocktails.length; i++) {

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
    btn.addEventListener("click", function() {
        showModal(arrayCocktails[i]);
    });
    cardBody.appendChild(btn);

    divCard.appendChild(cardBody);
    document.getElementById('divCocktails').appendChild(divCard);
  }
}

createCards();


function deleteCards() {

  const newDivCocktails = document.createElement('divCocktails');
  newDivCocktails.id = 'divCocktails';
  newDivCocktails.className = 'container mt-5';
  const oldDivCocktails = document.getElementById('divCocktails');
  document.getElementById('divCards').replaceChild(newDivCocktails, oldDivCocktails);
}


var modalWrap = null;
const showModal = (cocktail) => {

    if (modalWrap != null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${cocktail.name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Anagrafica</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Ingredienti</button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Preparazione</button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><br><b>Tipologia: </b>${cocktail.typology}<hr><b>Tipo bicchiere: </b>${cocktail.glassType}<hr><b>Storia: </b>${cocktail.history}</div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><br><b>Ingredienti</b><br><div id="divIngredients"></div><div id="divDecorations"></div></div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0"><br><b>Metodo: </b>${cocktail.preparation.name}<hr><b>Preparazione default: </b>${cocktail.preparation.prepDefault}<hr><b>Variante: </b>${cocktail.preparation.variants.join('<br><b>Variante: </b>')}</div>
        </div>
        

        </div>
        <div class="modal-footer">
          <a href="/edit/cocktail"><button type="button" class="btn btn-outline-success">Modifica</button></a>
          <button type="button" class="btn btn-danger" onclick="deleteCard(${cocktail.id})">Elimina</button>
        </div>
      </div>
    </div>
  </div>
    `;

    document.body.append(modalWrap);

    for(let i = 0; i < cocktail.ingredients.length; i++) {

      const divIngr = document.createElement('div');

      const bName = document.createElement('b');
      bName.appendChild(document.createTextNode('nome: '));
      divIngr.appendChild(bName);

      const spanName = document.createElement('span');
      spanName.appendChild(document.createTextNode(cocktail.ingredients[i].name));
      divIngr.appendChild(spanName);

      const bOZ = document.createElement('b');
      bOZ.appendChild(document.createTextNode('oz: '));
      divIngr.appendChild(bOZ);

      const spanOZ = document.createElement('span');
      spanOZ.appendChild(document.createTextNode(cocktail.ingredients[i].oz));
      divIngr.appendChild(spanOZ);

      const bCL = document.createElement('b');
      bCL.appendChild(document.createTextNode('cl: '));
      divIngr.appendChild(bCL);

      const spanCL = document.createElement('span');
      spanCL.appendChild(document.createTextNode(cocktail.ingredients[i].cl));
      divIngr.appendChild(spanCL);

      document.getElementById('divIngredients').appendChild(divIngr);
    }

    let namedec = Object.keys(cocktail.decorations);
    namedec.forEach(element => {
      
      const divPrep = document.createElement('div');

      const nameElem = document.createElement('span');
      nameElem.appendChild(document.createTextNode(element));
      divPrep.appendChild(nameElem);

      const valueElem = document.createElement('span');
      valueElem.appendChild(document.createTextNode(cocktail.decorations[element]));
      divPrep.appendChild(valueElem);

      document.getElementById('divDecorations').appendChild(divPrep);
    });

    var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
}


async function deleteCard(id) {
  
  let response = await fetch('/api/cocktails/'+id, {method: 'DELETE'});

  if(response.status == 200) {
    deleteCards(),
    createCards();
  }
}
