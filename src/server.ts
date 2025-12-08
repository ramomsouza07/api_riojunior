import fastify from "fastify"
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod"
import jwt, { fastifyJwt } from "@fastify/jwt"
import {createUser} from "./routes/users"
import { indicadoresRoutes } from './routes/indicadores'
import { rankingRoutes } from "./routes/destaque"
import { profileRoutes } from './routes/profiles'
import { login } from "./routes/login"

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createUser)
app.register(indicadoresRoutes)
app.register(rankingRoutes)
app.register(profileRoutes)
app.register(login)

app.register(fastifyJwt, {
  secret: "secret"
})

app.get("/", () =>{
    return "Hello World"
})

app.listen({port: 3000}, () => {
    console.log("Server Running in http://localhost:3000")
})