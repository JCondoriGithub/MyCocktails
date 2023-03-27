import { getAll, createCards, deleteCard, createJson, sendPut } from "./utils.js";

const arr = await getAll();
createCards(arr);


var modalWrap = null;
export const showModal = (cocktail) => {

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
          <button type="button" id="btnEdit" class="btn btn-success">Modifica</button>
          <button type="button" id="btnDelete" class="btn btn-danger" data-bs-dismiss="modal">Elimina</button>
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

    document.getElementById('btnEdit').addEventListener('click', function() {
      showModal2(cocktail)
    })

    document.getElementById('btnDelete').addEventListener('click', function() {
      deleteCard(cocktail.id);
    })

    var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
}


// modal form
var modalWrap = null;
export const showModal2 = (cocktail) => {

    if (modalWrap != null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Inserisci i nuovi dati del cocktail</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
          <form class="row g-3">
            <div class="col-md-4">
              <input type="text" class="form-control" id="name" placeholder="Nome cocktail" value="${cocktail.name}">
            </div>
            <div class="col-md-4">
              <select class="form-select" id="typology">
                <option selected disabled value="${cocktail.typology}">Tipologia</option>
                <option>Amaro</option>
                <option>Aspro</option>
                <option>Dolce</option>
                <option>Forte</option>
                <option>Fruttato</option>
                <option>Salato</option>
                <option>Soave</option>
              </select>
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control" id="glassType" placeholder="Tipo bicchiere" value="${cocktail.glassType}">
            </div>
            <div class="col-md-6 mb-2">
              <textarea class="form-control" id="history" rows="1" placeholder="Storia cocktail">${cocktail.history}</textarea>
            </div>
            <hr>
            <div id="divIngredients">

            </div>
            <hr>
            <div class="col-md-4">
              <select class="form-select" id="method" value="${cocktail.preparation.name}">
                <option selected disabled value="${cocktail.preparation.name}">Metodo</option>
                <option>Build</option>
                <option>Build_Layer</option>
                <option>Dry_shake</option>
                <option>Neat</option>
                <option>Shake_Strain</option>
                <option>Stir_Strain</option>
                <option>Throwing</option>
              </select>
            </div>
            <div id="divPreparations">

            </div>
            <hr>
            <div id="divDecorations">

            </div>
            
            <div class="modal-footer">
              <div class="col-12">
                <button class="btn btn-primary btn-lg" type="submit" id="btnSendData">Salva</button>
                <a href="/"><button type="button" class="btn btn-secondary btn-lg">Indietro</button></a>
              </div>
            </div>
          </form>
  
        </div>
      </div>
    </div>
  </div>
    `;

    document.body.append(modalWrap);

    //ingredients
    const divIngredients = document.getElementById('divIngredients');
    let ingrHtml = '';

    for(let i = 0; i < 2; i++) {
      
      ingrHtml += `

    <div class="col-md-5">
      <input type="text" class="form-control" id="nameIngr${i+1}" placeholder="Nome ingrediente" value="${cocktail.ingredients[i]? cocktail.ingredients[i].name : ''}" required>
    </div>
    <div class="col-md-3 mb-0">
      <input type="text" class="form-control" id="oz${i+1}" placeholder="OZ" value="${cocktail.ingredients[i]? cocktail.ingredients[i].oz : ''}" required>
    </div>
    <div class="col-md-3">
        <input type="number" class="form-control" id="cl${i+1}" placeholder="CL" value="${cocktail.ingredients[i]? cocktail.ingredients[i].cl : ''}" required>
    </div>
    `;
    }

    divIngredients.innerHTML = ingrHtml;

    //preparations
    const divPreparations = document.getElementById('divPreparations');
    let prepHtml = `
    
  <div class="col-md-8 mb-2">
    <textarea class="form-control" id="prepDefault" rows="3" placeholder="Preparazione">${cocktail.preparation.prepDefault}</textarea>
  </div>
  `;

    for(let i = 0; i < 2; i++) {
      
      prepHtml += `

    <div class="col-md-6 mb-2">
      <textarea class="form-control" id="variant${i+1}" rows="1" placeholder="Variante ${i+1}">${cocktail.preparation.variants[i]? cocktail.preparation.variants[i] : ''}</textarea>
    </div>
    `;
    }

    divPreparations.innerHTML = prepHtml;

    //decorations
    const divDecorations = document.getElementById('divDecorations');
    let decoHtml = '';

    let nameProp = Object.keys(cocktail.decorations);
    for(let i = 0; i < 2; i++) {

      decoHtml += `
    <div class="col-md-5">
      <input type="text" class="form-control" id="nameDeco${i+1}" placeholder="Nome decorazione" value="${nameProp[i]? nameProp[i] : ''}" required>
    </div>
    <div class="col-md-6 mb-2">
      <textarea class="form-control" id="prepDeco${i+1}" rows="1" placeholder="Preparazione">${cocktail.decorations[nameProp[i]]? cocktail.decorations[nameProp[i]] : ''}</textarea>
    </div>
    `;
    }

    divDecorations.innerHTML = decoHtml;

    
    document.getElementById('btnSendData').addEventListener('click', function() {
      let dataSend = createJson();
      sendPut(dataSend, cocktail.id);
    })

    var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
}

