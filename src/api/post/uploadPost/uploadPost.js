import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation: {
        uploadPost: async (_, args, {request, isAuthenticated}) => {
            isAuthenticated(request);
            const {user} = request;
            const {caption, files, location} = args;
            const post = await prisma.createPost({
                caption,
                location,
                user: {connect: {id: user.id}}
            });
            for (const file of files) {
                await prisma.createFile({
                    url: file,
                    post: {
                        connect: {
                            id: post.id
                        }
                    }
                });
            }
            return post;
        }
    }
};