import {prisma} from "../../../../generated/prisma-client";

export default {
    Query: {
        seeRoom: async (_, args, {request, isAuthenticated}) => {
            isAuthenticated(request);
            const {id: roomId} = args;
            const {user} = request;
            const canSee = await prisma.$exists.room({
                id: roomId,
                participants_some: {
                    id: user.id
                }
            });
            if (canSee) {
                return prisma.room({id: roomId});
            } else {
                throw Error("you can't see this");
            }
        }
    }
};