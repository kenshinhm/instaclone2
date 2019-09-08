import dotenv from "dotenv";
import path from "path";
import {GraphQLServer} from "graphql-yoga";
import schema from "./schema.js";
import logger from "morgan";
import {sendSecretMail} from "./utils.js";

dotenv.config({path: path.resolve(__dirname, ".env")});

// sendSecretMail("kenshinhm@naver.com", "123");

const PORT = process.env.PORT || 9999;

const server = new GraphQLServer({schema});

//Express server can be touched from GraphQLServer
//Using logger from morgan as a middleware
server.express.use(logger("dev"));

server.start({port: PORT}, () =>
    console.log(`Server running on port http://localhost:${PORT}`)
);
