//criando um array de objetos. cada objeto tem 3 propriedades, cada propriedade tem um valor
//esse método foi utilizado no projeto anteiror para estudar o crud com objeto na memória
//ao invés de comentar todos os lugares em que os comandos manipuladores de objeto e vetor foram utiizados,
//eles foram deletados para proporcionar um código mais limpo na nova versão com FETCH
// let produtos =
//     [
//         { id: 1, nome: 'sapato', preco: 100.00 },
//         { id: 2, nome: 'sandalia', preco: 250.00 },
//         { id: 3, nome: 'cinto', preco: 450.00 },
//         { id: 4, nome: 'bolsa', preco: 650.00 }
//     ]

//crio uma variável tabela para trazer o elemento table utilizando o id dela
const tabela = document.querySelector("#tabela");
limpaTabela();
getprodutos();

function getprodutos() {
  //esta função irá listar os produtos na tabela, utilizando manipulação do DOM

  //comando fetch irá trazer os produtos da API
  fetch("https://api-crud-server-ok.vercel.app/produtos", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((resposta) => resposta.json())
    .then((produtos) => {
      //loop mais externo forEach: irá percorrer os produtos
      produtos.forEach((produto) => {
        //cria uma linha na tabela para começar a inserir os dados do produto
        tabela.innerHTML += `<tr id="a${produto.id}">`;

        //loop mais interno for: irá percorrer as propriedades do produto "da vez"
        for (let propriedade in produto) {
          //irá inserir na tabela cada um dos valores de cada uma das propriedades daquele produto
          document.querySelector(
            "#" + "a" + produto.id
          ).innerHTML += `<td> ${produto[propriedade]} </td>`;
        }

        //inserindo um botão de DELETE
        //primeiro criamos o BOTAO, aplicamos as propriedades e depois o criamos um TD pra ele
        let botaoApagar = document.createElement("button"); /*crio botão*/
        botaoApagar.setAttribute(
          "class",
          "btn-apagar"
        ); /*crio atributo classe p/ estilo css*/
        botaoApagar.setAttribute(
          "onclick",
          `deleta(${produto.id})`
        ); /*crio evento click passando id como parâmetro*/
        botaoApagar.innerHTML = "APAGAR"; /*crio o texto do botão*/

        //inserindo um botão de UPDATE:
        // primeiro criamos o BOTAO, aplicamos as propriedades e depois o criamos um TD pra ele
        let botaoEditar = document.createElement("button");
        botaoEditar.setAttribute("class", "btn-editar");
        botaoEditar.setAttribute("onclick", `mostraEditar(${produto.id})`);
        botaoEditar.innerHTML = "EDITAR";

        //inserindo um botão de VISUALIZAR:
        // primeiro criamos o BOTAO, então aplicamos as propriedades
        let botaoView = document.createElement("button");
        botaoView.setAttribute("class", "btn-view");
        botaoView.setAttribute("onclick", `mostraView(${produto.id})`);
        botaoView.innerHTML = "DETALHES";

        //criando TDs e anexando a TR
        let td = document.createElement("td");

        td.appendChild(botaoEditar);
        td.appendChild(document.createTextNode("   "));
        td.appendChild(botaoApagar);
        td.appendChild(document.createTextNode("   "));
        td.appendChild(botaoView);

        tr = document.querySelector("#" + "a" + produto.id);
        tr.appendChild(td);

        //fecha a linha da tabela
        tabela.innerHTML += "</tr>";
      });
    });
}

function cadastrar() {
  //Esta função irá cadastrar um novo produto no array de produtos
  // fetch("https://api-crud-server-ok.vercel.app/produtos", {
  //   method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // })
  //   .then((resposta) => resposta.json())
  //   .then((produtos) => {
      //PASSO 1: pegando as informações que o usuario digitou e colocando em variaveis
      const idInsere = parseInt(document.getElementById("id").value);
      const nomeInsere = document.querySelector("#nome").value;
      const precoInsere = parseInt(document.querySelector("#preco").value);

      //PASSO 2: criando um objeto produto
      let produto = {
        id: idInsere,
        nome: nomeInsere,
        preco: precoInsere,
      };   

      //passo 4: inserindo o objeto PRODUTO na API
      fetch(`https://api-crud-server-ok.vercel.app/produtos`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(produto),
      }).then((response) => {
        limpaTabela();
        getprodutos();

        //mensagem de alteração salva e escondo a div
        div = document.getElementById("div-cadastrar");
        div.classList.remove("div-cadastrar-ativo");
        div.classList.add("div-cadastrar-inativo");
        alert("PRODUTO CADASTRADO COM SUCESSO");
      // });
    });
}

function mostraCadastro() {
  //mostra ou oculta a tela de cadastro quando o usuário clica no botão abaixo da tabela INSERIR PRODUTO
  const div = document.getElementById("div-cadastrar");
  const divEditar = document.getElementById("div-editar");
  const divView = document.getElementById("div-view");

  if (div.classList.contains("div-cadastrar-inativo")) {
    div.classList.remove("div-cadastrar-inativo");
    div.classList.add("div-cadastrar-ativo");
  } else {
    div.classList.remove("div-cadastrar-ativo");
    div.classList.add("div-cadastrar-inativo");
  }
  //esconde a tela editar caso ela esteja visível
  if (divEditar.classList.contains("div-editar-ativo")) {
    divEditar.classList.remove("div-editar-ativo");
    divEditar.classList.add("div-editar-inativo");
  }

  //esconde a tela de visualização caso esteja visível
  if (divView.classList.contains("div-view-ativo")) {
    divView.classList.remove("div-view-ativo");
    divView.classList.add("div-view-inativo");
  }

  //antigo método CriaID() :
  fetch("https://api-crud-server-ok.vercel.app/produtos", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((resposta) => resposta.json())
    .then((produtos) => {
      //uso o SLICE para criar um novo vetor que começa a partir do índice passa no parâmetro
      //no caso, o parâmetro -1 sempre irá trazer o ultimo elemento do array      

      let vetorCorte = produtos.slice(-1);

      //será um vetor de um elemento, entao eu pego o valor da proriedade .id do primeiro elemento [0]
      let ultimoElemento = vetorCorte[0].id;

      //retorno este numero incrementado de 1
      let proximo = parseInt(ultimoElemento + 1);
      document.getElementById("id").value = proximo;
    });
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
}

function limpaTabela() {
  //zera a tabela e deixa só o cabeçalho
  tabela.innerHTML =
    "<tr> <th>ID</th> <th>PRODUTO</th> <th>PREÇO</th>  <th>AÇÕES</th> </tr>";
}

function deleta(idDoProdutoDelete) {
  /*arrow function-função seta*/
  let textConfirmacao = `CONFIRMA A EXCLUSÃO DO REGISTRO? 
                        ESTA AÇÃO NÃO PODE SER DESFEITA`;

  if (confirm(textConfirmacao) == true) {
    fetch(
      `https://api-crud-server-ok.vercel.app/produtos/${idDoProdutoDelete}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((resposta) => {
      limpaTabela();
      getprodutos();
      alert("PRODUTO APAGADO!");
    });
  }
}

function mostraEditar(idDoProdutoEdit) {    
  //mostra ou oculta a tela de edição quando o usuário clica no botão EDITAR   (alterna)
  const div = document.getElementById("div-editar");
  const divCadastro = document.getElementById("div-cadastrar");
  const divView = document.getElementById("div-view");

  if (div.classList.contains("div-editar-inativo")) {
    div.classList.remove("div-editar-inativo");
    div.classList.add("div-editar-ativo");
  } else {
    div.classList.remove("div-editar-ativo");
    div.classList.add("div-editar-inativo");
  }

  //esconde a tela de cadastro caso esteja visível
  if (divCadastro.classList.contains("div-cadastrar-ativo")) {
    divCadastro.classList.remove("div-cadastrar-ativo");
    divCadastro.classList.add("div-cadastrar-inativo");
  }

  //esconde a tela de visualização caso esteja visível
  if (divView.classList.contains("div-view-ativo")) {
    divView.classList.remove("div-view-ativo");
    divView.classList.add("div-view-inativo");
  }

  //conecta à API
  fetch("https://api-crud-server-ok.vercel.app/produtos", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((resposta) => resposta.json())
    .then((produtos) => {
      //traz os dados daquele objeto para os campos de edição
      let obj = produtos.find((prod) => prod.id == idDoProdutoEdit);
      document.getElementById("idEdit").value = obj.id;
      document.getElementById("nomeEdit").value = obj.nome;
      document.getElementById("precoEdit").value = obj.preco;
    });
}

function salvarAlteracao() {
  //pega os valores dos campos
  const idEditar = parseInt(document.getElementById("idEdit").value);
  const nomeEditar = document.getElementById("nomeEdit").value;
  const precoEditar = parseInt(document.getElementById("precoEdit").value);

  //crio um objeto com esses valores
  //let objNovo = { id: idEditar, nome: nomeEditar, preco: precoEditar };

  // Atualiza o produto na API
  fetch(`https://api-crud-server-ok.vercel.app/produtos/${idEditar}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: idEditar,
      nome: nomeEditar,
      preco: precoEditar,
    }),
  }).then((response) => {
    //atualizo a listagem
    limpaTabela();
    getprodutos();
    //mensagem de alteração salva e escondo a div
    div = document.getElementById("div-editar");
    div.classList.remove("div-editar-ativo");
    div.classList.add("div-editar-inativo");
    alert("PRODUTO ALTERADO");
  });
}

function mostraView(idVisualizar) {
  //mostra ou oculta a tela de VISUALIZAÇÃO quando o usuário clica no botão VISUALIZAR   (alterna)
  const div = document.getElementById("div-view");
  const divCadastro = document.getElementById("div-cadastrar");
  const divEditar = document.getElementById("div-editar");

  if (div.classList.contains("div-view-inativo")) {
    div.classList.remove("div-view-inativo");
    div.classList.add("div-view-ativo");
  } else {
    div.classList.remove("div-view-ativo");
    div.classList.add("div-view-inativo");
  }

  //esconde a tela de cadastro caso esteja visível
  if (divCadastro.classList.contains("div-cadastrar-ativo")) {
    divCadastro.classList.remove("div-cadastrar-ativo");
    divCadastro.classList.add("div-cadastrar-inativo");
  }

  //esconde a tela de edição caso esteja visível
  if (divEditar.classList.contains("div-editar-ativo")) {
    divEditar.classList.remove("div-editar-ativo");
    divEditar.classList.add("div-editar-inativo");
  }

  //conecta à API e traz os dados utilizando o ID
  fetch(`https://api-crud-server-ok.vercel.app/produtos/${idVisualizar}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((resposta) => resposta.json())
    .then((obj) => {
      //traz os dados daquele objeto para visualização
      //let obj = produtos.find((prod) => prod.id == idVisualizar);
      document.getElementById("idView").value = obj.id;
      document.getElementById("nomeView").value = obj.nome;
      document.getElementById("precoView").value = obj.preco;
    });
}
