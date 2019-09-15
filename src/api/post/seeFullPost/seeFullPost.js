import {prisma} from "../../../../generated/prisma-client";
import {COMMENT_FRAGMENT, FULL_POST_FRAGMENT} from "../../../fragments.js";

export default {
    Query: {
        seeFullPost: async (_, args, {request}) => {
            const {id} = args;
            return prisma.post({id}).$fragment(FULL_POST_FRAGMENT);
        }
    }
};