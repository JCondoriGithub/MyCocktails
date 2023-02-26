function addCard() {

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
  console.log(dataSend);
  fetch('/api/cocktails', {method: 'POST', headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, body: dataSend});

}
