const env = process.env;

export const PORT = Number(env.PORT ?? 8090);
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;
export const MONGODB_URL = env.MONGODB_URL ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
    HOST,
    PORT,
    SERVER_URL
}

