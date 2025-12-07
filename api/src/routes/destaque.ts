import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import z from "zod"
import { prisma } from "../lib/prisma"

export const rankingRoutes: FastifyPluginAsyncZod = async (app) => {
  app.get("/destaque",{
      schema: {
        response: {
          200: z.object({
            nome: z.string(),
            local: z.string(),
            email: z.string(),
            federada: z.boolean(),
            mesReferencia: z.date(),
            faturamento: z.any(),
            numeroProjetos: z.number(),
            csat: z.any(),
            indiceCluster: z.number()
          }),
          404: z.object({
            message: z.string()
          }),
          500: z.object({
            error: z.string()
          })
        }
      }
    },async (request, reply) => {
      try {
        const destaque = await prisma.resultadoMensal.findFirst({
          orderBy: [
            { mesReferencia: 'desc' },
            { indiceCluster: 'desc' }
          ],
          include: {
            empresa: true
          }
        })

        if (!destaque) {
          return reply.status(404).send({ message: "Nenhum dado de destaque encontrado." })
        }

        return reply.status(200).send({
          nome: destaque.empresa.nome,
          email: destaque.empresa.email,
          local: destaque.empresa.local,
          federada: destaque.empresa.federada,
          mesReferencia: destaque.mesReferencia,
          faturamento: destaque.faturamento,
          numeroProjetos: destaque.numeroProjetos,
          csat: destaque.csat,
          indiceCluster: destaque.indiceCluster
        })

      } catch (error) {
        console.error(error)
        return reply.status(500).send({ error: "Erro ao buscar destaque." })
      }
    }
  )
}