import { z } from "zod"

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["dev", "test"]).default("dev"),
  PORT: z.coerce.number().default(3333),
})

export type Env = z.infer<typeof envSchema>
