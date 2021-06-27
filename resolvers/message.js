module.exports = {
    Query: {
        allMessages: (parent, args, context, info) => 'hi'
    },
    Mutation: {
        postMessage: async(parent, args, {db, user}) => {
            try {
                await db.Message.create({
                    ...args,
                    userId: user.id
                });
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}