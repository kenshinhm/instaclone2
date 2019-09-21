import {prisma} from "../../../../generated/prisma-client";

export default {
    Query: {
        me: (_, args, {request, isAuthenticated}) => {
            isAuthenticated(request);
            const {user} = request;
            return prisma.user({id: user.id});
        }
    },
};