import "./env.js";
import {GraphQLServer} from "graphql-yoga";
import schema from "./schema.js";
import logger from "morgan";
import passport from "passport";
import "./passport.js";
import {authenticateJwt} from "./passport.js";
import {isAuthenticated} from "./middlewares.js";
import {uploadMiddleware, uploadController} from "./upload";

const PORT = process.env.PORT || 9999;

const server = new GraphQLServer({
    schema,
    context: ({request}) => ({request, isAuthenticated})
});

//Express server can be touched from GraphQLServer
//Using logger from morgan as a middleware
server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.express.post("/api/upload", uploadMiddleware, uploadController);

server.start({port: PORT}, () =>
    console.log(`Server running on port http://localhost:${PORT}`)
);
