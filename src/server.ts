import fastify from "fastify";
import { env } from "./env";
import { createGanhador } from "./routes/create-ganhador";
import { getGanhadores } from "./routes/get-ganhadores";
import { deleteGanhador } from "./routes/delete-ganhador";
import { connectionDatabase } from "./config/database";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";

const app = fastify()

//Config Conexão ao MongoDB
connectionDatabase()

app.register(fastifySwagger, {
   openapi: {
      info: {
         title: 'API de Ganhadores',
         description: 'Documentação da API para gerenciar ganhadores',
         version: '1.0.0',
      },
   },
});

app.register(fastifySwaggerUi, {
   routePrefix: '/docs',
   uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
   },
   staticCSP: true,
   transformStaticCSP: (header) => header,
});

app.register(fastifyCors, {
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'DELETE'],
});

app.register(createGanhador)
app.register(getGanhadores)
app.register(deleteGanhador)

app.listen({ port: env.PORT }, (err) => {
   if (err) {
      console.error('Erro ao iniciar o servidor:', err);
      process.exit(1);
   }
   console.log('Server rodando')
})