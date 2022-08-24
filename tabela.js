
var nome, notas, media, soma;
const alunos = [
  {
    nome: "Jonas",
    notas: [1, 4, 10, 8]
  },
  {
    nome: "Adam",
    notas: [10, 5, 6, 8],
  },
  {
    nome: "Marta",
    notas: [7, 7, 8, 8],
  },

];

console.log(alunos[0].nome);
console.log(alunos[1].nome);
console.log(alunos[2].nome);

var soma = 0

var aluno1 = alunos[0];
var nomeAluno1 = aluno1.nome;
var notasAluno1 = aluno1.notas;

var aluno2 = alunos[1];
var nomeAluno2 = aluno2.nome;
var notasAluno2 = aluno2.notas;

var aluno3 = alunos[2];
var nomeAluno3 = aluno3.nome;
var notasAluno3 = aluno3.notas;




for (let i = 0; i < notasAluno1.length; i++){
  soma += notasAluno1[i]
}

console.log(soma)
//Criando a estrutura da tabela
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let div = document.createElement('div');

div.className = "tabela-notas";

document.getElementById('body').appendChild(div);
div.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

// Criando e adicionando elementos na linha 1 do thead
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "NOME";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "MEDIA";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "STATUS"

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

//Criando e adicionando elementos na linha 2 do tbody
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = nomeAluno1;
let row_1_data_2 = document.createElement('td');
let row_1_data_3 = document.createElement('td');

row_2.appendChild(row_2_data_1);
tbody.appendChild(row_2);

//Criando e adicionando elementos na linha 3 do tbody
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = nomeAluno2;


row_3.appendChild(row_3_data_1);
tbody.appendChild(row_3);


//Criando e adicionando elementos na linha 4 do tbody
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = nomeAluno3;

row_4.appendChild(row_4_data_1);
tbody.appendChild(row_4);
