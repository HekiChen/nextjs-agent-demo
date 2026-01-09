import { z } from 'zod';

// Define the environment variables schema
const envSchema = z.object({
  DATABASE_URL: z.string(),
  GITHUB_TOKEN: z.string(),
  NODE_ENV: z.enum(['development', 'staging', 'production']),
});

// Validate environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error('Invalid environment variables:', env.error.format());
  process.exit(1);
}

export const validatedEnv = env.data;
