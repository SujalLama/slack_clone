module.exports = `
    type Message {
        id: Int!
        text: String!
        user: User!
        channel: Channel!
    }

    type Query {
        allMessages: [Message]
    }

    type Mutation {
        postMessage(channelId: Int!, text: String!): Boolean!
    }
`