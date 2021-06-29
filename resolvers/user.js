const bcryptjs = require('bcrypt');
module.exports = {
    Query: {
        allUsers: (parent, args, {db}) => db.User.findAll({include: [db.Team]}),
        getUser: (parent, {id}, {db}) => db.User.findOne({where: {id}})
    },
    Mutation: {
        register: async (parent, {password, ...otherArgs}, {db}) => {
            try {
                const hashedPassword = await bcryptjs.hash(password, 12);
                await db.User.create({...otherArgs, password: hashedPassword});
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        },
    }
}