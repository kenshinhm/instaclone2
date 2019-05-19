import {prisma} from "generated/prisma-client";

export default {
    Query: {
        userById: async (_, args) => {
            const {username} = args;
            return await prisma.user({username});
        }
    }
};