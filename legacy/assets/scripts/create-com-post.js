import { getProdutos } from "./read-com-get.js";

getProdutos();

// Desafio 2
function checaInputs() {

    const descricaoPreenchida = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";
    const imagemPreenchida = document.querySelector('input#imagem').value !== "";

    if (descricaoPreenchida || precoPreenchido || imagemPreenchida) {
        document.querySelector('button#btCancelar').removeAttribute('disabled');
        document.querySelector('button#btConfirmar').removeAttribute('disabled');
    } else {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
        document.querySelector('button#btConfirmar').setAttribute('disabled', '');
    }
}

// Complemento desafio 2
document.querySelector('form').addEventListener('reset', () => {
    document.querySelector('#btCancelar').setAttribute('disabled', '');
    document.querySelector('#btConfirmar').setAttribute('disabled', '');
});

//Complemento desafio 3
document.addEventListener('input', () => {
    checaInputs();
});

document.querySelector('#btConfirmar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
        'imagem': document.querySelector('#imagem').value
    };

    fetch(`https://json-server-vercel-api.vercel.app/produtos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (response.ok) {
                document.querySelector('#resposta').innerHTML = 'Produto cadastrado!';
                getProdutos();
            } else {
                location.reload();
            }
        })


});
