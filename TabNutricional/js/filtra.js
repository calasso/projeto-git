let campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
  let pacientes = document.querySelectorAll(".paciente");

 if(this.value.length > 0){
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    const tdNome = paciente.querySelector(".info-nome");
    const nome = tdNome.textContent;
    const expressao = new RegExp(this.value, "i");

    if(!expressao.test(nome)){
      paciente.classList.add("display-none");
    } else{
      paciente.classList.remove("display-none")
    }
   }
} else{
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    paciente.classList.remove("display-none")
   }
}
})