import fastify from "fastify";
import { env } from "./env";
import mongoose from "mongoose";

const app = fastify()
// conexão mongodb 
mongoose.connect('mongodb://localhost:27017/teste')
  .then(() => { console.log('conectado!!') })
  .catch((err) => { console.log('Erro na conexão', err)})

app.listen({ port: env.PORT }, () => {
   console.log('Server rodando')
})