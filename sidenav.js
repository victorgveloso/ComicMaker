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
'Efeitos-sonoros1T.png',
'Efeitos-sonoros2T.png',
'Efeitos-sonoros3T.png',
'Efeitos-sonoros4T.png',
'ono10T.png',
'ono11T.png',
'ono12T.png',
'ono13T.png',
'ono14T.png',
'ono15T.png',
'ono16T.png',
'ono17T.png',
'ono18T.png',
'ono19T.png',
'ono1T.png',
'ono20T.png',
'ono21T.png',
'ono22T.png',
'ono23T.png',
'ono24T.png',
'ono25T.png',
'ono26T.png',
'ono28T.png',
'ono29T.png',
'ono34T.png',
'ono35T.png',
'ono36T.png',
'ono37T.png',
'ono38T.png',
'ono3T.png',
'ono40T.png',
'ono41T.png',
'ono4T.png',
'ono5T.png',
'ono6T.png',
'ono7T.png',
'ono8T.png',
'onomatopeiaT.png'
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
"baloons10T.png",
"baloons11T.png",
"baloons13T.png",
"baloons14T.png",
"baloons1T.png",
"baloons2T.png",
"baloons3T.png",
"baloons4T.png",
"baloons5T.png",
"baloons6T.png",
"baloons7T.png",
"baloons8T.png",
"baloons9T.png"
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
  for (var i = 0; i < baloes.length-1; i += 2) {
    adicionaItem("img/baloes/" + baloes[i],"img/baloes/" + baloes[i+1]);
  }
  if (baloes.length % 2 != 0) {
    adicionaItem("img/baloes/" + baloes[baloes.length-1],"img/baloes/" + baloes[baloes.length-1]);
  }
  for (var i = 0; i < objetos.length-1; i += 2) {
    adicionaItem("img/objetos/" + objetos[i],"img/objetos/" + objetos[i+1]);
  }
  if (objetos.length % 2 != 0) {
    adicionaItem("img/objetos/" + objetos[objetos.length-1],"img/objetos/" + objetos[objetos.length-1]);
  }
  for (var i = 0; i < onomatopeias.length-1; i += 2) {
    adicionaItem("img/onomatopeias/" + onomatopeias[i],"img/onomatopeias/" + onomatopeias[i+1]);
  }
  if (onomatopeias.length % 2 != 0) {
    adicionaItem("img/onomatopeias/" + onomatopeias[onomatopeias.length-1],"img/onomatopeias/" + onomatopeias[onomatopeias.length-1]);
  }
}
function carrega(event) {
  event.dataTransfer.setData("text", event.target.getAttribute("src"));
  event.dataTransfer.setData("id", false);
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
  imagens[0].setAttribute("draggable","true");
  imagens[1].setAttribute("draggable","true");
  imagens[0].addEventListener("dragstart",function(event){carrega(event)});
  imagens[1].addEventListener("dragstart",function(event){carrega(event)});
  imagens[0].src = src0;
  imagens[1].src = src1;
  title = [];
  title[0] = src0.split("/");
  title[0] = title[0][title[0].length - 1].split(".")[0];
  title[1] = src1.split("/");
  title[0] = title[1][title[1].length - 1].split(".")[0];
  imagens[0].setAttribute("title",title[0]);
  imagens[1].setAttribute("title",title[1]);
  option[0].appendChild(imagens[0]);
  option[1].appendChild(imagens[1]);
  item.appendChild(option[0]);
  item.appendChild(option[1]);
  bandeja.insertBefore(item,document.getElementById("bottomoffset"));
}
