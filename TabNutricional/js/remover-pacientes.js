let tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(Event){
  Event.target.parentNode.classList.add("fadeOut");
  setTimeout(function(){
    Event.target.parentNode.remove();
  }, 500)
});

