import {isAuthenticated} from "../../../middlewares.js";
import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation: {
        followUser: async (_, args, {request}) => {
            isAuthenticated(request);
            const {id} = args;
            const {user} = request;
            try {
                await prisma.updateUser({
                    where: {id: user.id},
                    data: {
                        following: {
                            connect: {id}
                        }
                    }
                });
                return true;
            } catch {
                return false;
            }
        }
    }
};