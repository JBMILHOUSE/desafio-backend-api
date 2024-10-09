import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import ganhador from "../models/ganhador";

export async function createGanhador(app: FastifyInstance) {
  app.post('/ganhador', {
    schema: {
      body: {
        type: "object",
        required: ["name", "prize", "date"],
        properties: {
          name: { type: "string" },
          prize: { type: "string" },
          date: { type: "string", format: "date" },
        },
      },
      response: {
        201: {
          description: "Ganhador cadastrado com sucesso",
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            prize: { type: "string" },
            date: { type: "string" },
          },
        },
        500: {
          description: "Erro no servidor",
          type: "object",
          properties: {
            error: { type: "string" },
          },
        },
      },
    },
  }, async (req: FastifyRequest, reply: FastifyReply) => {

    try {
      const { name, prize, date } = req.body as { name: string, prize: string, date: string };

      const newGanhador = new ganhador({
        name,
        prize,
        date: new Date(date),
      });

      const ganhadorSalvo = await newGanhador.save();
      console.log(ganhadorSalvo)

      reply.status(201).send(ganhadorSalvo);
    } catch (error) {
      console.log(error)
      reply.status(500).send({ error: 'Erro ao cadastrar ganhador' });
    }
  })
}
