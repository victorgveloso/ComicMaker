var idDoUniverso = 0;
function permite(event) {
    event.preventDefault();
}
function joga(event) {

  alert(event.dataTransfer.getData("text") + " " + event.dataTransfer.getData("id") );
  if(event.dataTransfer.getData("id") == "true"){
    remove(event.dataTransfer.getData("text"));
  }
}
function solta(event) {
    adiciona(event.dataTransfer.getData("text"),{x: event.clientX, y: event.clientY},event.dataTransfer.getData("id"));
}
function move(event) {
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.setData("id", true);
}
function remove(src){
  document.getElementById('board').removeChild(document.getElementById(src));
}
function adiciona(src,pos,mover) {
  alert(src + " " + mover);
  var imagem;
  if(mover == "true"){
    imagem = document.getElementById(src);
    imagem.style.top = ((pos.y - 70) / 9)+"%";
    imagem.style.left = ((pos.x - 70) / 11)+"%";
  }
  else{
    imagem = document.createElement("IMG");
    imagem.alt = "crash";
    imagem.className = "boarditem";
    imagem.src = src;
    imagem.style.width = "70%";
    imagem.style.top = ((pos.y - 70) / 9)+"%";
    imagem.style.left = ((pos.x - 70) / 11)+"%";
    imagem.style.resize = "both";
    imagem.id = ("ImagemInserida" + idDoUniverso);
    idDoUniverso += 1;
    imagem.addEventListener("dragstart",function(event){move(event)});
    document.getElementById('board').appendChild(imagem);
  }
}
