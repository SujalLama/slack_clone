module.exports = `
    type Channel {
        id: Int!
        text: String!
        messages: [Message!]!
        users: [User!]!
    }

    type Query {
        allChannels: [Channel]
    }

    type Mutation {
        postChannel(teamId: Int!, text: String!, public: Boolean=false): Boolean!
    }
`