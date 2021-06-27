module.exports = `
    type Team {
        name: String!
        owner: User!
        members: [User!]!
        channels: [Channel!]!
    }

    type Query {
        allTeams: [Team]
    }

    type Mutation {
        postTeam(name: String!): Boolean!
    }
`