let adicionarPaciente = document.querySelector ("#adicionar-paciente");

adicionarPaciente.addEventListener("click", function(Event){
  Event.preventDefault();
  let form = document.querySelector("#form-adiciona");
  let paciente = obtemPacienteDoForm(form);
  let pacienteTr = montaTr(paciente);
  let erros = validaPaciente(paciente);

  if (erros.length > 0){  
    exibeMensagensDeErro(erros);  
    return;
  } else{
    let mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";
  }
  
  adicionaPacienteNaTabela(paciente);
  
  form.reset();
});

function adicionaPacienteNaTabela(paciente){
  let pacienteTr = montaTr(paciente);
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
  let ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  /* for (let i = 0; i < erros.length; i++) {
    const erro = erros[i];    
  } */
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoForm(form){
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}


function montaTr(paciente){
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}


function montaTd(dado,classe){
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

/* function validaPaciente (paciente){
  if (validaPeso(paciente.peso) && validaAltura(paciente.altura)){
    return "";
  }else{
    return "Verifique o peso e/ou altura digitada!";
  }
} */

function validaPaciente (paciente){
  let erros = [];
  if (paciente.nome.length <= 1){
    erros.push("Verifique o campo nome!")
  }
  if (!validaPeso(paciente.peso) || paciente.peso.length <= 1) erros.push("Peso inválido!")
  if (!validaAltura(paciente.altura) || paciente.altura.length <= 1) erros.push("Altura inválida!")
  if (paciente.gordura.length == 0){
    erros.push("Verifique o campo gordura!")
  }
  return erros;
}