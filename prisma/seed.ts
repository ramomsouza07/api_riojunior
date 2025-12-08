import { PrismaClient, Role } from "../src/generated/prisma"
import { hashPassword } from "../src/utils/hash"

const prisma = new PrismaClient()

function getMonthDate(monthsAgo: number): Date {
  const date = new Date()
  date.setMonth(date.getMonth() - monthsAgo)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

async function main() {
    console.log("Iniciando o seed...")

    const admin = await prisma.user.upsert({
        where: { email: "admin@app.com" },
        update: { role: Role.ADMIN },
        create: {
        nome: "Mestre Admin",
        local: "Cidade ADM",
        email: "admin@app.com",
        password: await hashPassword("admin123"),
        role: Role.ADMIN,
        faculdade: "-",
        curso: "-",
        federada: false
        }
    })
  console.log(`Admin criado: ${admin.nome}`)

    const empresaTeste = await prisma.user.upsert({
        where: { email: "frijr@ej.com" },
        update: {},
        create: {
        nome: "Friburgo Jr",
        local: "Friburgo",
        email: "frijr@ej.com",
        password: await hashPassword("user123"),
        role: Role.USER,
        faculdade: "UNF",
        curso: "Medicina",
        federada: true
        }
    })
    console.log(`Empresa criada: ${empresaTeste.nome}`)

    for (let i = 0; i < 3; i++) {
    const mesRef = getMonthDate(i)
    
    await prisma.resultadoMensal.upsert({
        where: {
            empresaId_mesReferencia: {
            empresaId: empresaTeste.id,
            mesReferencia: mesRef
            }
        },
        update: {},
        create: {
            empresaId: empresaTeste.id,
            mesReferencia: mesRef,
            numeroProjetos: 5 - i,
            faturamento: 5000 - i * 500,
            numeroMembros: 15,
            csat: 9.0,
            engajamentoMej: 75.0,
            fatorColaborativo: 5.0,
            indiceCluster: 4
        }
    })
    console.log(`Indicadores gerados para: ${empresaTeste.nome}`)
}console.log("Seed finalizado com sucesso!")

}main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
})