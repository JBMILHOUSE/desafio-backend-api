import z from "zod";
import * as dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  MONGO_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)