import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import ganhador from "../models/ganhador";

export async function deleteGanhador(app: FastifyInstance) {
 app.delete('/ganhador/:id', async (req: FastifyRequest, reply: FastifyReply) => {
   
    try {
        const { id } = req.params as { id: string };
        const g = await ganhador.findByIdAndDelete(id);

        if(!g) {
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