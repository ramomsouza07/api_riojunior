import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { verificarAutenticacao, verificarUsuario } from "../utils/auth"
import { prisma } from "../lib/prisma"
import z from "zod"

export const profileRoutes: FastifyPluginAsyncZod = async (app) => {
  app.addHook("onRequest", async (request, response) => {
        try {
            await request.jwtVerify()
        } catch (error) {
            return response.status(401).send({ error })
        }
    })

  app.get("/profile/:empresaId",{
      preHandler: [verificarAutenticacao, verificarUsuario],
      schema: {
        params: z.object({
          empresaId: z.string().uuid("ID inválido")
        }),
        response: {
          200: z.object({
            id: z.string().uuid(),
            nome: z.string(),
            local: z.string(),
            faculdade: z.string(),
            curso: z.string(),
            email: z.string(),
            federada: z.boolean(),
            createdAt: z.date(),
            
            resultados: z.array(
              z.object({
                id: z.string(),
                mesReferencia: z.date(),
                numeroProjetos: z.number(),
                faturamento: z.any(),
                numeroMembros: z.number(),
                csat: z.any(),
                engajamentoMej: z.any(),
                fatorColaborativo: z.any(),
                indiceCluster: z.number()
              })
            )
          }),
          404: z.object({
            error: z.string()
          }),
          500: z.object({
            error: z.string()
          })
        }
      }
    },async (request, reply) => {
      const { empresaId } = request.params

      try {
        const empresaProfile = await prisma.user.findUnique({
          where: {
            id: empresaId
          },
          include: {
            resultados: {
              orderBy: {
                mesReferencia: "desc"
              },
            },
          },
        })

        if (!empresaProfile) {
          return reply.status(404).send({ error: "Empresa não encontrada." })
        }

        return reply.send(empresaProfile)
      } catch (error) {
        console.error(error)
        return reply.status(500).send({ error: "Erro ao buscar perfil da empresa." })
      }
    }
  )
}