import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import ganhador from "../models/ganhador";

export async function getGanhadores(app: FastifyInstance) {
 app.get('/ganhadores', async (req: FastifyRequest, reply: FastifyReply) => {
   
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