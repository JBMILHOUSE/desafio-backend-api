import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import ganhador from "../models/ganhador";

export async function getGanhadores(app: FastifyInstance) {
  app.get('/ganhadores', {
    schema: {
      description: "Rota para listar todos os ganhadores cadastrados",
      response: {
        200: {
          description: "Lista de ganhadores",
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string", description: "ID do ganhador" },
              name: { type: "string", description: "Nome do ganhador" },
              prize: { type: "string", description: "Prêmio recebido" },
              date: { type: "string", format: "date", description: "Data do prêmio" },
            },
          },
        },
        500: {
          description: "Erro no servidor ao listar ganhadores",
          type: "object",
          properties: {
            error: { type: "string" },
          },
        },
      },
    },
  }, async (req: FastifyRequest, reply: FastifyReply) => {

    try {
      const ganhadores = await ganhador.find();

      console.log(ganhadores)

      reply.status(201).send(ganhadores);
    } catch (error) {
      console.log(error)
      reply.status(500).send({ error: 'Erro' });
    }
  })
}