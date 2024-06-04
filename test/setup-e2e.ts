import { execSync } from "node:child_process"
import { randomUUID } from "node:crypto"

import { PrismaClient } from "@prisma/client"
import { config } from "dotenv"

import { envSchema } from "@/infra/env/env"

config({ path: ".env", override: true })
config({ path: ".env.test", override: true })

const env = envSchema.parse(process.env)

const prisma = new PrismaClient()

function generateDbUrl(schemaId: string) {
  if (!env.DATABASE_URL) {
    throw new Error("Please provide a DATABASE_URL environment variable")
  }

  const url = new URL(env.DATABASE_URL)

  url.searchParams.set("schema", schemaId)

  return url.toString()
}

const schema = randomUUID()

beforeAll(async () => {
  const dbUrl = generateDbUrl(schema)

  process.env.DATABASE_URL = dbUrl

  execSync("npm prisma migrate deploy")
})

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE;`)

  await prisma.$disconnect()
})
