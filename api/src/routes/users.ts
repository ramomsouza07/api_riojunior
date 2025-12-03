import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod"
import { prisma } from "../lib/prisma"

export const createUser: FastifyPluginAsyncZod = async app => {
    app.post("/user",{
        schema:{
            body:z.object({
                nome: z.string().min(5, "Deve possuir pelo menos 5 caracteres!").max(20, "Deve possuir até 20 caracteres!"),
                email: z.string().email("Não é um formato de e-mail!"),
                password: z.string().min(12, "Deve possuir pelo menos 12 caracteres!"),
                federada: z.boolean()
            }),
            response:{
                201:z.object({
                    id: z.number(),
                    name: z.string(),
                    email: z.string(),
                    federada: z.boolean(),
                    createdAt: z.date(),
                }),
                400:z.object({
                    error: z.string()
                }),
                500: z.object({
                    error: z.string()
                })
            }
        }
            
        },
        async (request, reply) => {
        const {nome, email, password, federada} = request.body

        if(!nome || !email || !password || !federada){
            return reply.status(400).send({error: "Preencha todos os campos."})
        }

        try {
            const existUser = await prisma.user.findUnique({
                where:{
                    email
                },
            })
            
            if (existUser) {
                return reply.status(400).send({error: "Usuário já existe!"})
            }
            
            const newUser = await prisma.user.create({
                data:{
                    nome,
                    email,
                    password,
                    federada
                }
            })
            
            return reply.status(201).send(newUser)             
        } catch (error) {
            return reply.status(500).send({error: "Erro ao criar conta."})
        }
    })

    app.get("/user" , {
        schema:{
            response: {
                200: z.array(
                    z.object({
                        id: z.number(),
                        nome: z.string().min(5).max(20),
                        email: z.string().min(5).max(20),
                        fererada: z.boolean(),
                        createdAt: z.date(),
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
}