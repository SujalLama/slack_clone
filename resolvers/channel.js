module.exports = {
    Query: {
        allChannels: (parent, args, context, info) => 'hi'
    },
    Mutation: {
        postChannel: async(parent, args, {db}) => {
            try {
                await db.Channel.create(args);
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}