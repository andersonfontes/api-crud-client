function getProdutos(btDelete = false) {

    fetch('https://json-server-vercel-api.vercel.app/produtos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {

            const listaProdutos = document.querySelector('#listaProdutos');
            listaProdutos.innerHTML = "";
            listaProdutos.classList.add('lista-produtos');

            const tituloLista = document.createElement('h2');
            tituloLista.innerHTML = 'Lista de Produtos';
            tituloLista.classList.add('titulo-lista');

            listaProdutos.append(tituloLista);

            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');
                ul.id = `produto-${resposta[i].id}`;
                ul.tabIndex = '';

                if (btDelete) {
                    const liCheck = document.createElement('li');

                    const labelCheck = document.createElement('label');
                    labelCheck.classList.add('container');

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.value = resposta[i].id;

                    labelCheck.appendChild(checkbox);
                    labelCheck.appendChild(document.createElement('span')).classList.add('checkmark');

                    ul.appendChild(liCheck).appendChild(labelCheck);
                }

                const img = document.createElement('img');
                img.setAttribute('src', `./assets/images/${resposta[i].imagem}`);
                img.setAttribute('height', '50');
                img.setAttribute('data-produto', 'imagem');

                const liId = document.createElement('li');
                liId.innerHTML = resposta[i].id;
                liId.setAttribute('data-produto', 'id');

                const liDescricao = document.createElement('li');
                liDescricao.innerHTML = resposta[i].descricao;
                liDescricao.setAttribute('data-produto', 'descricao');

                const liPreco = document.createElement('li');
                liPreco.innerHTML = resposta[i].preco;
                liPreco.setAttribute('data-produto', 'preco');

                const liImg = document.createElement('li');
                liImg.appendChild(img);

                ul.append(liImg, liId, liDescricao, liPreco);

                // Início do código do botão
                if (btDelete) {

                    const liBotao = document.createElement('li');

                    const botao = document.createElement('button');
                    botao.type = 'button';
                    botao.innerHTML = '❌';
                    botao.classList.add('botao-delete');
                    botao.value = resposta[i].id;

                    ul.appendChild(liBotao).appendChild(botao);
                }
                // Fim do código do botão

                listaProdutos.appendChild(ul);
            }

        });
}

export { getProdutos };