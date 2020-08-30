//Variáveis

var body = document.querySelector('body');
var btnC1 =  document.getElementById('btnC1');
var btnC2 =  document.getElementById('btnC2');
var btnC3 =  document.getElementById('btnC3');

var btnEnviar = document.getElementById('btnEnviar');
var listaRecados = document.getElementById('listaRecados');
var nome = document.getElementById('inputNome');
var mensagem = document.getElementById('inputMensagem');

var btnCreditos = document.getElementById('creditos');

var contador = 0;

//Mudança de background
btnC1.onclick = () => { body.style.backgroundColor = '#7b93a5'}
btnC2.onclick = () => { body.style.backgroundColor = '#baa9b1'}
btnC3.onclick = () => { body.style.backgroundColor = '#9fb4c7'}

//Créditos
btnCreditos.onclick = () =>{alert('Aluno: João Vitor de Lima; Matrícula: 385397')}

//Mural de recados
btnEnviar.onsubmit = function(){

    var textNome = document.createTextNode(nome.value);
    var textMsg = document.createTextNode(mensagem.value);
    var excluir = document.createTextNode('Excluir');

    var paragrafo = document.createElement('p');
    paragrafo.appendChild("Nome: " + textNome + "Recado: " + textMsg);

    var btnExcluir = document.createElement('button');
    btnExcluir.appendChild(excluir);


    var divContainer = document.createElement('div');
    divContainer.setAttribute('class','divRecado');
    divContainer.appendChild(paragrafo);
    divContainer.appendChild(btnExcluir);

    listaRecados.appendChild(divContainer);

}
