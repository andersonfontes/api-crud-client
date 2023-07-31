import { getProdutos } from "./read-com-get.js";

getProdutos(true);

document.querySelector('#btConfirmar').addEventListener('click', () => {
    const checkboxesProdutos = document.querySelectorAll('input[type="checkbox"]');

    checkboxesProdutos.forEach(checkbox => {
        if (checkbox.checked) {
            fetch(`https://json-server-vercel-api.vercel.app/produtos/${checkbox.value}`, {
                method: 'DELETE'
            });
        }
    });

    alert(`Produto(s) apagado(s)!`);
    getProdutos(true);
});

document.addEventListener('click', event => {

    if (event.target.classList.contains('botao-delete')) {

        fetch(`https://json-server-vercel-api.vercel.app/produtos/${event.target.value}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resposta => {
                if (resposta.ok) {
                    alert('Produto apagado!');
                    getProdutos(true);
                } else {
                    location.reload();
                }
            });


    }
});
