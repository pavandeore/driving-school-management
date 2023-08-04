import express  from "express";
import { graphqlHTTP } from "express-graphql";

import cors from 'cors'
import { schema } from "./schema";

import { createConnection } from "typeorm";
import { log } from "console";
import { User } from "./entities/User";

const main = async () => {

    await createConnection({
        type: "mysql",
        database: "drive",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [User]
    });

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true,
    }))
    app.listen(4001, () => {
        log('app runnign on 4001');
    })
};

main().catch(err => {
    console.log(err);
});