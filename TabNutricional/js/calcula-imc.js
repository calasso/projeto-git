var titulo = document.querySelector(".titulo");
  titulo.textContent = "Barbara Nutricionista"

let pacientes = document.querySelectorAll(".paciente");

for (let i =0; i < pacientes.length; i++){
  let paciente = pacientes[i];
  
  let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

  //let tdGordura = paciente.querySelector(".info-gordura");
    //let gordura = tdGordura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido")
    //console.log("classePeso:", paciente)
  }
  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido")
    //console.log("classeAltura:", paciente)
    
  }
  if (pesoValido && alturaValida) {
    let imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function  validaPeso(peso){
  if(peso >= 0 && peso < 500){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 2.50){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso,altura){
  let imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}


















//titulo.addEventListener("click", mostraMensagem);
//function mostraMensagem(){
  //console.log("Fui Clicado")/*  */
//}

//titulo.addEventListener("click", function(){
  //console.log("Fui Clicado")
//});


/* var inputFrase = document.querySelector('.frase');
var botao = document.querySelector('.botao');
var copia = document.querySelector('.copia');
function botaoHandler() {
    copia.textContent = inputFrase.value; 
    inputFrase.value = "";        
}
botao.addEventListener('click', botaoHandler); */