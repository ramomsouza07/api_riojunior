import fastify from "fastify";
import jwt, { fastifyJwt } from "@fastify/jwt"
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import {createUser} from "./routes/users"

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createUser)

app.register(fastifyJwt, {
  secret: "secret"
})

app.get("/", () =>{
    return "Hello World"
})

app.listen({port: 3000}, () => {
    console.log("Server Running in https://localhost:3000")
})