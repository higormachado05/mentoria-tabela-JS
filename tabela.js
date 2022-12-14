let nome, notas, situacao, situacao_1, situacao_2, situacao_3;

let soma = 0
let soma_1 = 0
let soma_2 = 0
let soma_3 = 0

let media = 0
let media_1 = 0
let media_2 = 0
let media_3 = 0

const alunos = [
  {
    nome: 'Jonas',
    notas: [1, 4, 10, 8]
  },
  {
    nome: 'Adam',
    notas: [10, 5, 6, 8]
  },
  {
    nome: 'Marta',
    notas: [7, 7, 8, 8]
  }
]

let cont = 0
for (cont = 0; cont < alunos.length; cont++) {
  let notasAluno = alunos[cont].notas;
  for (let i = 0; i < notasAluno.length; i++){
    soma+= notasAluno[i]
    media = soma / notasAluno.length
    if(media >= 7){
      situacao = 'aprovado'
    } else {
      situacao = 'reprovado'
    }
  }
  console.log('Nome: ' + alunos[cont].nome + ' soma: ' + soma + ' media: ' + media + ' status: ' + situacao);
  soma = 0

}

//Dados row 2 (aluno 1)
let aluno1 = alunos[0]
let nomeAluno1 = aluno1.nome
let notasAluno1 = aluno1.notas

for(let cont_1 = 0; cont_1 < notasAluno1.length; cont_1++){
  soma_1+=notasAluno1[cont_1];
  media_1 = soma_1 / notasAluno1.length
  if(media_1 >= 7){
    situacao_1 = 'aprovado'
  } else {
    situacao_1 = 'reprovado'
  }
}

//Dados row 3 (aluno 2)
let aluno2 = alunos[1]
let nomeAluno2 = aluno2.nome
let notasAluno2 = aluno2.notas

for(let cont_2 = 0; cont_2 < notasAluno2.length; cont_2++){
  soma_2+=notasAluno2[cont_2];
  media_2 = soma_2 / notasAluno2.length
  if(media_2 >= 7){
    situacao_2 = 'aprovado'
  } else {
    situacao_2 = 'reprovado'
  }
}

//Dados row 4 (aluno 3)
let aluno3 = alunos[2]
let nomeAluno3 = aluno3.nome
let notasAluno3 = aluno3.notas

for(let cont_3 = 0; cont_3 < notasAluno3.length; cont_3++){
  soma_3+=notasAluno3[cont_3];
  media_3 = soma_3 / notasAluno3.length
  if(media_3 >= 7){
    situacao_3 = 'aprovado'
  } else {
    situacao_3 = 'reprovado'
  }
}

//Criando a estrutura da tabela
let table = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')
let div = document.createElement('div')

div.className = 'tabela-notas'

document.getElementById('body').appendChild(div)
div.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)

// Criando e adicionando elementos na linha 1 do thead
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = 'NOME';

let heading_2 = document.createElement('th');
heading_2.innerHTML = 'MEDIA';

let heading_3 = document.createElement('th');
heading_3.innerHTML = 'STATUS';

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


//Criando e adicionando elementos na linha 2 do tbody
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = nomeAluno1;

let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = media_1;

let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = situacao_1;
row_2_data_3.style.backgroundColor = (row_2_data_3 == 'aprovado') ? "green" : "red";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

//Criando e adicionando elementos na linha 3 do tbody
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = nomeAluno2;

let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = media_2;

let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = situacao_2;
row_3_data_3.style.backgroundColor = (row_3_data_3.innerHTML == 'aprovado') ? "green" : "red";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

//Criando e adicionando elementos na linha 4 do tbody
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = nomeAluno3;

let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = media_3;

let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = situacao_3;
row_4_data_3.style.backgroundColor = (row_4_data_3.innerHTML == 'aprovado') ? "green" : "red";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);
