module.exports = {
    Query: {
        allTeams: (parent, args, {db}, info) => db.Team.findAll()
    },
    Mutation: {
        postTeam: async (parent, args, {db, user}) => {
            try {
                await db.Team.create({...args, owner: user.id});
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
}