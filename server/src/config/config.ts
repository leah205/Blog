import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET;
const db_url = process.env.DATABASE_URL;

if (!secret) {
  throw new Error("secret is not defined");
}

if (!db_url) {
  throw new Error("db url is missing");
}

interface Config {
  secret: string;
  port: number;
  db_url: string;
}

const config: Config = {
  secret: secret,
  port: Number(process.env.PORT) || 8080,
  db_url: db_url,
};

export default config;
