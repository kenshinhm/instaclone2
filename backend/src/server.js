import {GraphQLServer} from "graphql-yoga";
import schema from "src/schema.js";
import logger from 'morgan';

require("dotenv").config();

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema});

//Express server can be touched from GraphQLServer
//Using logger from morgan as a middleware
server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`Server running on port http://localhost:${PORT}`));