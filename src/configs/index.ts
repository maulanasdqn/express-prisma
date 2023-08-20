import { config as configEnv } from "dotenv";

configEnv();

export const config = {
  port: process.env.PORT,
  host: process.env.HOST,
  dbUrl: process.env.DATABASE_URL,
};
