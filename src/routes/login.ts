import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { verifyPassword } from "../utils/hash";
import z from "zod";

const loginSchema = z.object({
    email: z.string(),
    password: z.string()
})

export function login(app: FastifyInstance) {
    app.post('/login', async (request, response) => {
        const { email, password } = loginSchema.parse(request.body)

        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return response.status(400).send({ message: "Empresa não encontrada." })
        }

        const isPassword = await verifyPassword(password, user.password)

        if (!isPassword) {
            return response.status(400).send({ message: "Senha Inválida" })
        }

        const token = app.jwt.sign({ 
            id: user.id, 
            email: user.email, 
            role: user.role
        },
        { expiresIn: '1h' })

        return response.status(200).send({ token })
    })
}