var toggledSidenav = 0;

function openSideNav(i) {
  if (toggledSidenav == 0) {
    if (window.matchMedia('(max-width: 600px)').matches) {
      document.getElementById("mySidenav").style.width = "125px";
      document.getElementById('cursorright').style.right = "100px";
      switch (i) {
        case 0:
          document.getElementById("openSideNavTodos").style.right = "49px";
          break;
        case 1:
          document.getElementById("openSideNavOnomatopeias").style.right = "15px";
          break;
        case 2:
          document.getElementById("openSideNavObjetos").style.right = "45px";
          break;
        case 3:
          document.getElementById("openSideNavBaloes").style.right = "49px";
          break;
        default:

      }
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById('cursorright').style.right = "225px";
      switch (i) {
        case 0:
          document.getElementById("openSideNavTodos").style.right = "184px";
          break;
        case 1:
          document.getElementById("openSideNavOnomatopeias").style.right = "150px";
          break;
        case 2:
          document.getElementById("openSideNavObjetos").style.right = "180px";
          break;
        case 3:
          document.getElementById("openSideNavBaloes").style.right = "184px";
          break;
        default:

      }
    }

  } else {
    document.getElementById("mySidenav").style.width = ""; //"250px";
    document.getElementById('cursorright').style.right = "";
    document.getElementById("openSideNavTodos").style.right = ""; //"184px";
    document.getElementById("openSideNavObjetos").style.right = "";
    document.getElementById("openSideNavOnomatopeias").style.right = "";
    document.getElementById("openSideNavBaloes").style.right = "";
  }
  toggledSidenav = !toggledSidenav;
}
var onomatopeias = [
'Efeitos-sonoros1T.jpg',
'Efeitos-sonoros2T.jpg',
'Efeitos-sonoros3T.jpg',
'Efeitos-sonoros4T.jpg',
'ono10T.jpg',
'ono11T.jpg',
'ono12T.jpg',
'ono13T.jpg',
'ono14T.jpg',
'ono15T.jpg',
'ono16T.jpg',
'ono17T.jpg',
'ono18T.jpg',
'ono19T.jpg',
'ono1T.jpg',
'ono20T.jpg',
'ono21T.jpg',
'ono22T.jpg',
'ono23T.jpg',
'ono24T.jpg',
'ono25T.jpg',
'ono26T.jpg',
'ono28T.jpg',
'ono29T.jpg',
'ono34T.jpg',
'ono35T.jpg',
'ono36T.jpg',
'ono37T.jpg',
'ono38T.jpg',
'ono3T.jpg',
'ono40T.jpg',
'ono41T.jpg',
'ono4T.jpg',
'ono5T.jpg',
'ono6T.jpg',
'ono7T.jpg',
'ono8T.jpg',
'onomatopeiaT.jpg'
];
var objetos = [
"personagem10.jpg",
"personagem10TL.jpg",
"personagem11.jpg",
"personagem12.jpg",
"personagem13.jpg",
"personagem14.jpg",
"personagem15.jpg",
"personagem16.jpg",
"personagem17.jpg",
"personagem1.jpg",
"personagem1TL.jpg",
"personagem2.jpg",
"personagem2T.jpg",
"personagem3.jpg",
"personagem4.jpg",
"personagem4T.jpg",
"personagem5.jpg",
"personagem6.jpg",
"personagem7.jpg",
"personagem7TL.jpg",
"personagem8.jpg",
"personagem9.jpg",
"pessoa12.jpg",
"pessoa1.jpg",
"pessoa2.jpg",
"pessoa3.jpg",
"pessoa4.jpg",
"pessoa5.jpg"
];
var baloes = [
"baloons10T.jpg",
"baloons11T.jpg",
"baloons13T.jpg",
"baloons14T.jpg",
"baloons1T.jpg",
"baloons2T.jpg",
"baloons3T.jpg",
"baloons4T.jpg",
"baloons5T.jpg",
"baloons6T.jpg",
"baloons7T.jpg",
"baloons8T.jpg",
"baloons9T.jpg"
];
function limpaItens() {
  var offset = document.getElementById("bottomoffset");
  var bandeja = document.getElementById("mySidenav");
  var itens = bandeja.childNodes;
  while(itens[2] != offset){
    bandeja.removeChild(itens[2]);
  }
}
function listaOnomatopeias() {
  limpaItens();
  for (var i = 0; i < onomatopeias.length-1; i += 2) {
    adicionaItem("img/onomatopeias/" + onomatopeias[i],"img/onomatopeias/" + onomatopeias[i+1]);
  }
  if (onomatopeias.length % 2 != 0) {
    adicionaItem("img/onomatopeias/" + onomatopeias[onomatopeias.length-1],"img/onomatopeias/" + onomatopeias[onomatopeias.length-1]);
  }
}
function listaObjetos() {
  limpaItens();
  for (var i = 0; i < objetos.length-1; i += 2) {
    adicionaItem("img/objetos/" + objetos[i],"img/objetos/" + objetos[i+1]);
  }
  if (objetos.length % 2 != 0) {
    adicionaItem("img/objetos/" + objetos[objetos.length-1],"img/objetos/" + objetos[objetos.length-1]);
  }
}
function listaBaloes() {
  limpaItens();
  for (var i = 0; i < baloes.length - 1; i += 2) {
    adicionaItem("img/baloes/" + baloes[i],"img/baloes/" + baloes[i+1]);
  }
  if (baloes.length % 2 != 0) {
    adicionaItem("img/baloes/" + baloes[baloes.length-1],"img/baloes/" + baloes[baloes.length-1]);
  }
}
function listaTodos() {
  limpaItens();
  /*
  var todos = baloes + objetos + onomatopeias;
  for (var i = 0; i < baloes.length; i += 2){
    adicionaItem(todos[i],todos[i+1]);
  }
  if (todos.length % 2 != 0) {
    adicionaItem(todos[todos.length-1],todos[todos.length-1]);
  }
  */
  for (var i = 0; i < baloes.length; i += 2) {
    adicionaItem("img/baloes/" + baloes[i],"img/baloes/" + baloes[i+1]);
  }
  if (baloes.length % 2 != 0) {
    adicionaItem("img/baloes/" + baloes[baloes.length-1],"img/baloes/" + baloes[baloes.length-1]);
  }
  for (var i = 0; i < objetos.length; i += 2) {
    adicionaItem("img/objetos/" + objetos[i],"img/objetos/" + objetos[i+1]);
  }
  if (objetos.length % 2 != 0) {
    adicionaItem("img/objetos/" + objetos[objetos.length-1],"img/objetos/" + objetos[objetos.length-1]);
  }
  for (var i = 0; i < onomatopeias.length; i += 2) {
    adicionaItem("img/onomatopeias/" + onomatopeias[i],"img/onomatopeias/" + onomatopeias[i+1]);
  }
  if (onomatopeias.length % 2 != 0) {
    adicionaItem("img/onomatopeias/" + onomatopeias[onomatopeias.length-1],"img/onomatopeias/" + onomatopeias[onomatopeias.length-1]);
  }
}
function adicionaItem(src0,src1) {
  var bandeja = document.getElementById("mySidenav");
  var item = document.createElement("DIV");
  item.className = "twooptions";
  var option = [];
  option[0] = document.createElement("A");
  option[1] = document.createElement("A");
  option[0].className = "sideoption";
  option[1].className = "sideoption";
  option[0].href = "#";
  option[1].href = "#";
  var imagens = [];
  imagens[0] = document.createElement("IMG");
  imagens[1] = document.createElement("IMG");
  imagens[0].alt = "crash";
  imagens[1].alt = "crash";
  imagens[0].className = "optionimage";
  imagens[1].className = "optionimage";
  imagens[0].src = src0;
  imagens[1].src = src1;
  option[0].appendChild(imagens[0]);
  option[1].appendChild(imagens[1]);
  item.appendChild(option[0]);
  item.appendChild(option[1]);
  bandeja.insertBefore(item,document.getElementById("bottomoffset"));
}
