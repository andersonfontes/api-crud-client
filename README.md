## Faça o deploy do JSON Server na Vercel

Um template para fazer o deply do [JSON Server](https://github.com/typicode/json-server) na [Vercel](https://vercel.com) permite que você rode uma API REST fake (mock API) online!

Demonstração deste repositório: 

1. [https://json-server-vercel-api.vercel.app/](https://json-server-vercel-api.vercel.app/)
2. [https://json-server-vercel-api.vercel.app/produtos](https://json-server-vercel-api.vercel.app/produtos)

### Como utilizar

1. Clique em "**Use this template**" ou clone este repositório.
2. Atualize o [`db.json`](./db.json) ou utilize o padrão no repositório.
3. Crie uma conta ou faça login na [Vercel](https://vercel.com).
4. A partir da dashboard da Vercel, clique "**+ New Project**" e então "**Import**" seu repositório.
5. Na tela "**Configure Project**", deixe tudo padrão e clique "**Deploy**".
6. Aguarde até que o deploy esteja terminado e o seu próprio JSON Server está pronto para uso!

## `db.json` padrão

```json
[
  {
    "id": 1,
    "descricao": "Sapato Social New York",
    "preco": "199.90",
    "imagem": "produto.webp"
  }
]
```

## Referências

1. https://github.com/typicode/json-server
2. https://vercel.com
3. https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel
4. https://github.com/kitloong/json-server-vercel
