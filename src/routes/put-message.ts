import { FastifyRequest, FastifyReply } from "fastify"
import { createHmac } from "node:crypto"
import { encrypt } from "../function/crypto"
import { db, table } from "../database"

export async function put_message(
    request: FastifyRequest<{
        Body: {
            key: string
            message: string
            expires?: string | null
            one_time?: boolean | null
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { key, message, expires = null, one_time = false } = request.body
        const secret = process.env.SECRET
        if (!secret) {
            return reply.code(500).send({ error: "Server misconfiguration: SECRET is not set" })
        }
        const hmac = createHmac("sha512", secret).update(key).digest("hex")
        const encrypted = encrypt(hmac, message)

        const [data] = await db
            .insert(table.message)
            .values({
                key: hmac,
                message: encrypted,
                expires: expires ? new Date(expires) : null,
                one_time: Boolean(one_time)
            })
            .returning()

        return { id: data.id, message, expires, one_time }
    } catch (error) {
        console.log(error)
        return reply.code(500).send({ error: "Internal Server Error" })
    }
}
