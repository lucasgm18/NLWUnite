import fastify from "fastify";

const app = fastify()

app.get('/', () => {
    return 'Olá NLW UNITE'
})

app.get('/teste', () => {
    return 'Hello teste'
})

app.listen({ port: 3333}).then(() => {
    console.log('Servidor HTTP ligado!')

})