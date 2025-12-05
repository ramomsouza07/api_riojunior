import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import z from "zod"
import { prisma } from "../lib/prisma"

export const indicadoresRoutes: FastifyPluginAsyncZod = async (app) => {
  app.post("/indicador",{
      schema: {
        body: z.object({
          empresaId: z.string().uuid("ID da empresa inválido"),
          numeroProjetos: z.number().int().min(0),
          faturamento: z.number().min(0),
          numeroMembros: z.number().int().min(0),
          csat: z.number().min(0).max(100).or(z.number().min(0).max(10)),
          engajamentoMej: z.number(),
          fatorColaborativo: z.number(),
          indiceCluster: z.number().int()
        }),
        response: {
          201: z.object({
            id: z.string().uuid(),
            mesReferencia: z.date(),
            numeroProjetos: z.number(),
            faturamento: z.any(),
            empresaId: z.string()
          }),
          400: z.object({
            error: z.string()
          }),
          404: z.object({
            error: z.string()
          }),
          409: z.object({
            error: z.string()
          }),
          500: z.object({
            error: z.string()
          })
        },
      },
    },async (request, reply) => {
      const {
        empresaId,
        numeroProjetos,
        faturamento,
        numeroMembros,
        csat,
        engajamentoMej,
        fatorColaborativo,
        indiceCluster,
      } = request.body

      try {
        const dataAtual = new Date()

        const mesReferencia = new Date(
          dataAtual.getFullYear(),
          dataAtual.getMonth(),
          1
        )

        const empresaExiste = await prisma.user.findUnique({
          where: { id: empresaId }
        })

        if (!empresaExiste) {
          return reply.status(404).send({ error: "Empresa não encontrada." })
        }

        const conflitoMes = await prisma.resultadoMensal.findFirst({
          where: {
            empresaId: empresaId,
            mesReferencia: mesReferencia
          }
        })

        if (conflitoMes) {
          return reply.status(409).send({
            error:
              "Já existem indicadores cadastrados para este mês de referência (Mês atual)."
          })
        }

        const indicador = await prisma.resultadoMensal.create({
          data: {
            empresaId,
            mesReferencia,
            numeroProjetos,
            faturamento,
            numeroMembros,
            csat,
            engajamentoMej,
            fatorColaborativo,
            indiceCluster
          }
        })

        return reply.status(201).send(indicador)
      } catch (error) {
        console.error(error)
        return reply
          .status(500)
          .send({ error: "Erro interno ao salvar indicadores." })
      }
    }
  )
}