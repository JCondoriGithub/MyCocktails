async function getAll() {

    let response = await fetch('api/cocktails');
    let arr = await response.json();
    console.log(arr);
    return arr;
}


async function createCards(arrayCocktails) {
console.log('createCards');

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
    cardTitle.appendChild(document.createTextNode(arrayCocktails[i].nome));
    cardBody.appendChild(cardTitle);

    const prepDefault = document.createElement('p');
    prepDefault.className = 'card-text';
    prepDefault.appendChild(document.createTextNode(arrayCocktails[i].preparazione.prepDefault));
    cardBody.appendChild(prepDefault);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = 'btn btn-primary';
    btn.appendChild(document.createTextNode('Dettagli'));
    btn.addEventListener("click", function() {
        showModal(arrayCocktails[i])
    });
    cardBody.appendChild(btn);

    divCard.appendChild(cardBody);
    document.getElementById('divCocktails').appendChild(divCard);
  }
}

createCards(getAll());


function deleteCards() {
  console.log('delete')
  const newDivCocktails = document.createElement('divCocktails');
  newDivCocktails.id = 'divCocktails';
  newDivCocktails.className = 'container mt-5';
  const oldDivCocktails = document.getElementById('divCocktails');
  document.getElementById('divCards').replaceChild(newDivCocktails, oldDivCocktails);
}

var modalWrap = null;
const showModal = (arrayCocktails) => {

    if (modalWrap != null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${arrayCocktails.nome}</h1>
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
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><br><b>Tipologia: </b>${arrayCocktails.tipologia}<hr><b>Tipo bicchiere: </b>${arrayCocktails.tipoBicchiere}<hr><b>Storia: </b>${arrayCocktails.storia}</div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><br><b>Ingredienti</b>${JSON.stringify(arrayCocktails.ingredienti)}<hr>${JSON.stringify(arrayCocktails.decorazione)}</div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0"><br><b>Metodo: </b>${arrayCocktails.preparazione.nome}<hr><b>Preparazione default: </b>${arrayCocktails.preparazione.prepDefault}<hr><b>Variante: </b>${arrayCocktails.preparazione.varianti.join('<br><b>Variante: </b>')}</div>
        </div>
        

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `;


    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
}


function submitData() {
console.log('submit');
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
    "nome":name,
    "tipologia":typology,
    "tipoBicchiere":glassType,
    "ingredienti":[{
      "nome":nameIngr1,
      "oz":oz1,
      "cl":cl1
    },
    {
      "nome":nameIngr2,
      "oz":oz2,
      "cl":cl2
    }],
    "preparazione":{
      "nome":method,
      "prepDefault":prepDefault,
      "varianti":[Variant1, variant2]
    },
    "decorazione":{
      nameDeco1:prepDeco1,
      nameDeco2:prepDeco2,
    },
    "tipoBicchiere":glassType,
    "tipologia":typology,
    "storia":history,
    "urlImg":"/img/prova_img1.png"
  }

  let dataSend = JSON.stringify(json);

  fetch('/api/cocktails', {method: 'POST', headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, body: dataSend}).then(

  deleteCards()).then(
  createCards());
}

