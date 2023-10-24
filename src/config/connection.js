import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
    let db;

    try {
        const client = new MongoClient(process.env.DATABASE_URL, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
              }
        });
        await client.connect();
        console.log('conectou')
        db = client.db();    
    } catch (error) {
        console.log(error);
    }
    

export {db};