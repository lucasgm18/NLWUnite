import fastify from "fastify";
import {  serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { generateSlug } from "./utils/generate-slug";
 
const app = fastify()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);


const prisma = new PrismaClient({
    log: ['query'],
})



app.withTypeProvider<ZodTypeProvider>().post('/events', async (request, reply) => {
    const createEventSchema = z.object({
       title: z.string().min(4),
       details: z.string().nullable(),
       maximumAttendees: z.number().int().positive().nullable(), 
    })

    const {
        title,
        details,
        maximumAttendees,
    } = createEventSchema.parse(request.body)

    const slug = generateSlug(title)
 
    const eventWithSameSlug = await prisma.event.findUnique({
        where: {
            slug,
        }
    })
    
    if (eventWithSameSlug !== null) {
        throw new Error('Outro evento com o mesmo titulo já existe.')
    }
    
    const event = await prisma.event.create({
        data: {
          title,
          details,
          maximumAttendees,
          slug,
        },
    })

    
    return reply.status(201).send({ eventId: event.id })
})

app.listen({ port: 3333}).then(() => {
    console.log('Servidor HTTP ligado!')

})