import { PrismaClient, Role } from "../src/generated/prisma";

const prisma = new PrismaClient()

async function main() {
    const admin = await prisma.user.upsert({
        where: { email: "admin@app.com" },
        update: {
            password: "admin123",
            role: Role.ADMIN,
            nome: "Administrador" 
        },
        create: {
            nome: "Administrador",
            email: "admin@app.com",
            password: "admin123",
            role: Role.ADMIN,
            federada: false 
        }
    })

    console.log(`Usuário Admin criado: ${admin.nome}`)

    const user = await prisma.user.upsert({
        where: { 
            email: "usuario@comum.com"
        },
        update: {
            password: "user123",
            role: Role.USER
        },
        create: {
            nome: "Usuário Padrão",
            email: "usuario@comum.com",
            password: "user123",
            role: Role.USER,
            federada: true
        }
    })

    console.log(`Usuário Padrão criado: ${user.nome}`)
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })