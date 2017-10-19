function permite(event) {
    event.preventDefault();
}
function solta(event) {
    adiciona(event.dataTransfer.getData("text"),{x: event.clientX, y: event.clientY});
}
function adiciona(src,pos) {
  //alert(src + " " + ((pos.x - 70) / 11)+"%" + " " + ((pos.y - 70) / 9)+"%");
  var imagem = document.createElement("IMG");
  imagem.alt = "crash";
  imagem.className = "boarditem";
  imagem.src = src;
  imagem.style.width = "70%";
  imagem.style.top = ((pos.y - 70) / 9)+"%";
  imagem.style.left = ((pos.x - 70) / 11)+"%";
  imagem.style.resize = "both";
  imagem.addEventListener("dragstart",function(event){carrega(event)});
  document.getElementById('board').appendChild(imagem);
}
