import { FastifyReply, FastifyRequest } from 'fastify'

export async function verificarAutenticacao(request: FastifyRequest, reply: FastifyReply) {
    try {
        await request.jwtVerify()
    } catch (error) {
        return reply.status(401).send({ message: "Token Inválido!" })
    }
}

export async function verificarUsuario(request: FastifyRequest, reply: FastifyReply) {
    try {
        await request.jwtVerify()
        const body = request.body as { empresaId: string }
        const params = request.params as { id: string, empresaId: string }

        const idRota = params.empresaId || params.id || body.empresaId

        if (request.user.role === "ADMIN") {
            return
        }

        if (request.user.id !== idRota) {
            return reply.status(403).send({ message: "Acesso Negado. Você só pode acessar seu próprio perfil!" })
        }
    } catch (error) {
        return reply.status(401).send({ message: "Token Inválido!" })
    }
}

export async function verificarAdmin(request: FastifyRequest, reply: FastifyReply) {
    try {
        await request.jwtVerify()

        if (request.user.role !== "ADMIN") {
            return reply.status(403).send({ message: "Acesso Negado. Apenas administradores podem acessar!" })
        }
    } catch (error) {
        return reply.status(401).send({ message: "Token Inválido!" })
    }
}