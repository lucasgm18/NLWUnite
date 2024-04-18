# 🎉 Cadastro de Eventos

📝 **Descrição**: Este sistema de cadastro de eventos facilita a organização e inscrição em eventos variados, permitindo que os organizadores criem eventos com detalhes como data, local e descrição, e que os participantes se inscrevam facilmente.

## 🛠 Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-FFFFFF?style=flat-square&logo=zod&logoColor=E34F26)

## ⚙️ Configuração

🔧 **Configurar o ambiente**: Para rodar o projeto localmente, é necessário realizar algumas configurações simples:

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione as variáveis de ambiente necessárias, por exemplo:


🔄 **Iniciar o servidor**:
```bash
npm run dev

## 📖 Anotações
 Corpo em requisição (Request Body)
 Parâemetros de busca(Search Params / Query Params) 'http://localhost:3333/users?name=lucas'
 Parâmetros de rota (Route Params) -> Identificação de recursos 'DELETE http://localhost:3333/users/5'
 Cabeçalhos (Headers)  -> Contexto

 Semânticas = Significado

 Driver nativo / Query Bulders / ORMs

 Object Relational Mapping (Hibernate / Doctrine / ActiveRecord)

 20x => Sucesso
 30x => Redirecionamento
 40x => Erro do cliente (Erro em alguma informação enviada por QUEM está fazendo a chamada p/ API)
 50x => Erro do servidor (Um erro que está acontecendo INDEPENDENTE do que está sendo enviado p/ o servidor)

Esse README usa emojis para destacar seções importantes e inclui imagens shields para cada tecnologia principal, fornecendo um rápido reconhecimento visual das ferramentas envolvidas no projeto. Certifique-se de atualizar o link dos shields e adicionar informações específicas sobre seu projeto para torná-lo mais relevante e útil!

