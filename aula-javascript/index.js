var nome = "Willian Sousa Farias";
var idade = 27;

//alert(`Bem vindo ${nome}, sua idade é ${idade} anos`);
console.log(nome.replace("Willian", "Samanta"));
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

//array
var lista = ['pera', 'uva', 'laranja'];
console.log(lista[0]);

//lista
lista.push('morango');
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
//altera o separador
console.log(lista.join(" - "));

//Dicionario
frutas = [{ nome: 'uva', cor: 'roxa' }, { nome: 'maçã', cor: 'vermelha' }];

console.log(frutas[0].nome);

//condicionais
/*var idade = prompt('Qual sua idade?');
if (idade >= 18) {
  alert('Maior de idade');
} else {
  alert('Menor de idade');
}*/

//Datas
var d = new Date();
//console.log(d.getDay());

//console.log("Hoje é " + d.getDate() + " e isso outro " + (d.getMonth() + 1));
console.log("ass" + 15)

//funcoes
function soma(n1, n2) {
  return n1 + n2;
}

console.log('funcao soma ' + soma(5, 10));

function clicou() {
  alert('Obrigado por clicar!');
}


var h3 = document.querySelector('#clicada');
var buton = document.querySelector('button');
var texto = 'Obrigado por clicar!';

buton.setAttribute('onClick=teste()');
console.log(buton);

buton.onClick = function colocarTexto() {
  h3.innerHTML(texto);
}

//abrir novas pags
//window.open('xxx')
//windows.href



