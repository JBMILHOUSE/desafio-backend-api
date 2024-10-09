import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import ganhador from "../models/ganhador";

export async function deleteGanhador(app: FastifyInstance) {
  app.delete('/ganhador/:id', {
    schema: {
      description: "Rota para remover um ganhador pelo ID",
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", description: "ID do ganhador a ser removido" },
        },
      },
      response: {
        200: {
          description: "Ganhador removido com sucesso",
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
        404: {
          description: "Ganhador não encontrado",
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
        500: {
          description: "Erro no servidor ao remover o ganhador",
          type: "object",
          properties: {
            error: { type: "string" },
          },
        },
      },
    },
  }, async (req: FastifyRequest, reply: FastifyReply) => {

    try {
      const { id } = req.params as { id: string };
      const g = await ganhador.findByIdAndDelete(id);

      if (!g) {
        reply.status(404).send({ message: 'Ganhador não encontrado' })
      }
      console.log(g)

      reply.status(200).send({ message: 'Ganhador removido com sucesso' });
    } catch (error) {
      console.log(error)
      reply.status(500).send({ error: 'Erro ao remover o ganhador' });
    }
  })
}