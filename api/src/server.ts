import fastify from "fastify";
import jwt, { fastifyJwt } from "@fastify/jwt"
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import {createUser} from "./routes/users"
import { indicadoresRoutes } from './routes/indicadores'
import { profileRoutes } from './routes/profiles'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createUser)
app.register(indicadoresRoutes)
app.register(profileRoutes)

app.register(fastifyJwt, {
  secret: "secret"
})

app.get("/", () =>{
    return "Hello World"
})

app.listen({port: 3333}, () => {
    console.log("Server Running in https://localhost:3333")
})
