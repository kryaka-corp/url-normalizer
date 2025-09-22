declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Node
            NODE_ENV: 'production' | 'development';

            // MongoDB
            MONGO_DB: string;
            MONGO_HOST: string;
            MONGO_PORT: number;
            MONGO_USER: string;
            MONGO_PASSWORD: string;
            MONGO_REGISTRY_COLLECTION: string;
        }
    }
}

export {global};

