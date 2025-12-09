import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { verificarAdmin, verificarAutenticacao, verificarUsuario } from "../utils/auth"
import { hashPassword } from "../utils/hash"
import { prisma } from "../lib/prisma"
import "@fastify/jwt"
import z from "zod"

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: { id: string, email: string, role: string }
  }
}

export const createUser: FastifyPluginAsyncZod = async app => {
    app.post("/user",{
        schema:{
            body:z.object({
                nome: z.string().min(5, "Deve possuir pelo menos 5 caracteres!").max(20, "Deve possuir até 20 caracteres!"),
                local: z.string(),
                email: z.string().email("Não é um formato de e-mail!"),
                password: z.string().min(12, "Deve possuir pelo menos 12 caracteres!"),
                faculdade: z.string(),
                federada: z.boolean()
            }),
            response:{
                201:z.object({
                    id: z.string().uuid(),
                    nome: z.string(),
                    local: z.string(),
                    email: z.string(),
                    faculdade: z.string(),
                    federada: z.boolean(),
                    createdAt: z.date()
                }),
                400:z.object({
                    error: z.string()
                }),
                500: z.object({
                    error: z.string()
                })
            }
        }},async (request, reply) => {
        const {nome, local, email, password, faculdade, federada} = request.body

        try {
            const existUser = await prisma.user.findUnique({
                where:{
                    email
                },
            })
            
            if (existUser) {
                return reply.status(400).send({error: "Usuário já existe!"})
            }

            const hashedPassword = await hashPassword(password)
            
            const newUser = await prisma.user.create({
                data:{
                    nome,
                    local,
                    email,
                    password: hashedPassword,
                    faculdade,
                    federada
                }
            })
            
            return reply.status(201).send(newUser)             
        } catch (error) {
            return reply.status(500).send({error: "Erro ao criar conta."})
        }
    })

    app.get("/user",{
        preHandler: verificarAutenticacao,
        schema:{
            response: {
                200: z.array(
                    z.object({
                        id: z.string().uuid(),
                        nome: z.string().min(5).max(20),
                        local: z.string(),
                        email: z.string(),
                        faculdade: z.string(),
                        federada: z.boolean(),
                        createdAt: z.date()
                    })
                ),
                500: z.object({
                    error: z.string()
                })
            }
        }
    }, async (request, reply) => {
        try {
            const users = await prisma.user.findMany()
            reply.send(users)
        } catch (error) {
            return reply.status(500).send({error: "Erro ao encontrar usuários."})
        }
    })

    app.put("/user/:id",{
      preHandler: [verificarAutenticacao, verificarUsuario],
      schema: {
        params: z.object({
          id: z.string().uuid("ID inválido")
        }),
        body: z.object({
          nome: z
            .string()
            .min(5, "Deve possuir pelo menos 5 caracteres!")
            .max(20, "Deve possuir até 20 caracteres!")
            .optional(),
          local: z.string().optional(),
          email: z.string().email("Não é um formato de e-mail!").optional(),
          password: z
            .string()
            .min(12, "Deve possuir pelo menos 12 caracteres!")
            .optional(),
          faculdade: z.string().optional(),
          federada: z.boolean().optional()
        }),
        response: {
          200: z.object({
            id: z.string().uuid(),
            nome: z.string(),
            local: z.string(),
            email: z.string(),
            faculdade: z.string(),
            federada: z.boolean(),
            createdAt: z.date()
          }),
          400: z.object({
            error: z.string()
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
      const { id } = request.params
      const { nome, local, email, password, faculdade, federada } = request.body

      try {
        const userExists = await prisma.user.findUnique({
          where: { id }
        })

        if (!userExists) {
          return reply.status(404).send({ error: "Usuário não encontrado." })
        }

        if (email && email !== userExists.email) {
          const emailTaken = await prisma.user.findUnique({
            where: { email },
          })
          if (emailTaken) {
            return reply.status(400).send({ error: "E-mail já está em uso." })
          }
        }

        const updatedUser = await prisma.user.update({
          where: { id },
          data: {
            nome,
            local,
            email,
            password,
            faculdade,
            federada
          }
        })

        return reply.status(200).send(updatedUser)
        
      } catch (error) {
        return reply.status(500).send({ error: "Erro ao atualizar usuário." })
      }
    }
    )

    app.delete("/user/:id",{
      preHandler: verificarAdmin,
      schema: {
        params: z.object({
          id: z.string().uuid("ID inválido")
        }),
        response: {
          200: z.object({
            message: z.string(),
            id: z.string().uuid()
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
      const { id } = request.params

      try {
        const userExists = await prisma.user.findUnique({
          where: { id }
        })

        if (!userExists) {
          return reply.status(404).send({ error: "Usuário não encontrado." })
        }

        await prisma.user.delete({
          where: { id }
        })

        return reply.status(200).send({ message: "Usuário deletado com sucesso.", id })

      } catch (error) {
          return reply.status(500).send({ error: "Erro ao deletar usuário. Verifique se existem registros vinculados." })
      }
    }
  )
}