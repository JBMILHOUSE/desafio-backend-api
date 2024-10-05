import fastify from "fastify";
import { env } from "./env";
import { createGanhador } from "./routes/create-ganhador";
import { getGanhadores } from "./routes/get-ganhadores";
import { deleteGanhador } from "./routes/delete-ganhador";
import { connectionDatabase } from "./config/database";

const app = fastify()

//Config Conexão ao MongoDB
connectionDatabase()

app.register(createGanhador)
app.register(getGanhadores)
app.register(deleteGanhador)

app.listen({ port: env.PORT }, () => {
   console.log('Server rodando')
})